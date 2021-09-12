import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  constructor() {
    super();
    console.log("Constructor working");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  static defaultProps = {
    catagory: "sports",
  };

  static propTypes = {
    catagory: PropTypes.string,
  };

  async update(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catagory}&apiKey=2cc859b36f4b4f5f852352533daadc7a&page=${this.state.page}`;

    this.setState({ loading: true });
    let data = await fetch(url);

    let parseData = await data.json();

    

    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catagory}&apiKey=2cc859b36f4b4f5f852352533daadc7a`;

    this.setState({ loading: true });
    let data = await fetch(url);

    let parseData = await data.json();

    console.log(this.props.catagory);

    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  async handleNextClick() {
    
    this.setState({
      page: this.state.page + 1,
     
    });

    this.update();
  }

  async handlePreviousClick() {
   
    this.setState({
      page: this.state.page - 1,
      
    });
    this.update();
  }

  render() {
    return (
      <div className="container my-3 text-white ">
        <div className="header text-center">
          <h1>
            Top Headlines For Today (
            {this.props.catagory.slice(0, 15).toUpperCase()})
          </h1>
        </div>
        {this.state.loading && <Spinner></Spinner>}
        <div className="row my-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3">
                <NewsItem
                  key={element.url}
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  source={element.source.name}
                  date={element.publishedAt}
                ></NewsItem>
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-primary btn-sm"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
