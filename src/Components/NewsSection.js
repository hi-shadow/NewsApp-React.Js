import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import DF from './image.png'
import InfiniteScroll from "react-infinite-scroll-component";




export default class NewsSection extends Component {
    articles = []

    constructor() {
        super()
        this.state = {
            loading: false,
            articles: this.articles,
            page: 1,
            totalResults: 0
        }


    }

    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        })
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.Category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.PageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let ParsedData = await data.json()
        this.setState({
            articles: ParsedData.articles.concat(ParsedData.articles),
            totalResults: ParsedData.totalResults,
            loading: false
        })
    }
    UpdateNews = async () => {
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.Category}&apiKey=89cc663a7b0644a39221df94ed35c6ad&page=${this.state.page}&pageSize=${this.props.PageSize}`
        this.setState({ loading: true })
        this.props.setProgress(30)
        let data = await fetch(url)
        this.props.setProgress(500)
        let ParsedData = await data.json()
        this.props.setProgress(70)
        this.setState({
            articles: ParsedData.articles,
            totalResults: ParsedData.totalResults,
            loading: true
        })


    }
    async componentDidMount() {
        this.UpdateNews()

    }


    PreviousBtnHandler = async () => {
        this.setState({
            page: this.state.page - 1
        })
        this.UpdateNews()
    }

    NextBtnHandler = async () => {
        this.setState({
            page: this.state.page + 1
        })
        this.UpdateNews()
    }
    render() {
        return (
            <>
                <div className="container">



                    <h2>Headlines Of News</h2>
                    <hr className="py-3 text-dark" />

                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={this.state.loading && <Spinner height={100} width={100} />}>
                        <div className="row">
                            {
                                this.state.articles.map((element) => {
                                    return (<div className="col-4" >
                                        <NewsItem Title={element.title ? element.title.slice(0, 54) : "Not Available"} Description={element.description ? element.description.slice(0, 141) : "Not Available"} ImageUrl={element.urlToImage ? element.urlToImage : DF} NewsUrl={element.url ? element.url : "Not Available"} author={element.author ? element.author : "Unknown"} date={element.publishedAt ? element.publishedAt : "Not Known"} key={element.url} />

                                    </div>)


                                })
                            }
                        </div>
                    </InfiniteScroll>
                </div>
            </>
        )
    }
}
