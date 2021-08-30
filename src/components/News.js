import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  

  async componentDidMount (){

      let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2cc859b36f4b4f5f852352533daadc7a";

      let data = await fetch(url)

      let parseData = await data.json() ;

      console.log(parseData);

      this.setState({ articles: parseData.articles  }) 
  }

  constructor() {
    super();
    console.log("Constructor working");
    this.state = {
      articles: [],
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h1>Top Headlines For Today</h1>
        <div className="row my-3">
          {this.state.articles.map((element) => {
            return (
                <div className="col-md-4 my-3">
                <NewsItem
                  key = {element.url}
                  title={element.title}
                  description={element.description}
                  imageUrl = {element.urlToImage}
                  newsUrl = {element.url}
                ></NewsItem>
              </div>
             
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
