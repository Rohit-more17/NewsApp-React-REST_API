import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  constructor() {
    super();
    console.log("Constructor working");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults : 0 ,
     
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
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catagory}&apiKey=2cc859b36f4b4f5f852352533daadc7a&page=${this.state.page}`;

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

  fetchMoreData = async() => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catagory}&apiKey=2cc859b36f4b4f5f852352533daadc7a&page=${this.state.page + 1}`;

    this.setState({ loading: true });
    let data = await fetch(url);

    let parseData = await data.json();

    console.log(this.props.catagory);

    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false,
      page : this.state.page + 1 ,
    });

  };

 

  render() {
    return (
      <>
      <div className="container my-3 text-white ">
        <div className="header text-center">
          <h1>
            Top Headlines For Today (
            {this.props.catagory.slice(0, 15).toUpperCase()})
          </h1>
        </div>
        {/* {this.state.loading && <Spinner></Spinner>} */}

        <InfiniteScroll
              dataLength={this.state.articles.length} //This is important field to render the next data
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Spinner></Spinner>}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>You're All Caught Up. Have A Nice Day. </b>
                </p>
              }>

                <div className="container">
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
        </div>
          </InfiniteScroll>


       
      </div>
     
      </>
    );
  }
}

export default News;
