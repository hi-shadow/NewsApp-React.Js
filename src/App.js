import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsSection from './Components/NewsSection';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'




export default class App extends Component {
  PageSize = 15
  apiKey = process.env.REACT_APP_NEWS_API
  constructor() {
    super()
    this.state = {
      Progress: 18,

    }


  }
  setProgress = (progress) => {
    this.setState({
      Progress: progress
    })
  }
  render() {
    return (

      <Router>
        <div>
          <LoadingBar
            color='black'
            height={1.5}
            progress={this.state.Progress}
          />
          <Navbar />

          <Routes>

            <Route exact path="/" element={<NewsSection setProgress={this.setProgress} apiKey={this.apiKey} key="general" PageSize={this.PageSize} Category="general" />} />
            <Route exact path="/sports" element={<NewsSection setProgress={this.setProgress} apiKey={this.apiKey} key="sports" PageSize={this.PageSize} Category="sports" />} />
            <Route exact path="/business" element={<NewsSection setProgress={this.setProgress} apiKey={this.apiKey} key="business" PageSize={this.PageSize} Category="business" />} />
            <Route exact path="/entertainment" element={<NewsSection setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" PageSize={this.PageSize} Category="entertainment" />} />
            <Route exact path="/technology" element={<NewsSection setProgress={this.setProgress} apiKey={this.apiKey} key="technology" PageSize={this.PageSize} Category="technology" />} />
            <Route exact path="/health" element={<NewsSection setProgress={this.setProgress} apiKey={this.apiKey} key="health" PageSize={this.PageSize} Category="health" />} />
            <Route exact path="/science" element={<NewsSection setProgress={this.setProgress} apiKey={this.apiKey} key="science" PageSize={this.PageSize} Category="science" />} />
          </Routes>
        </div>

      </Router>

    )
  }
}


