import React, { Component } from 'react'

export default class NewsItem extends Component {



    render() {
        let { Title, Description, ImageUrl, NewsUrl, author, date } = this.props

        return (


            <div className="card my-2">
                <img src={ImageUrl} className="card-img-top image-fluid" height="206" width="367" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{Title}...</h5>
                    <p className="card-text">{Description}...</p>
                    <p className="card-text"><span>By : {author} On {new Date(date).toGMTString()}
                    </span>
                    </p>

                    <a href={NewsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>

        )
    }
}
