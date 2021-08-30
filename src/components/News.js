import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    
      
      {
        source: { id: null, name: "The Indian Express" },
        author: "New York Times",
        title:
          "Fossils seized in police raid demystify a prehistoric flying reptile - The Indian Express",
        description:
          "The pterosaur had a giant, mohawk-style crest, a birdlike beak and a body covered in something resembling but not quite fur.",
        url: "https://indianexpress.com/article/technology/science/fossils-police-raid-demystify-prehistoric-flying-reptile-7478336/",
        urlToImage:
          "https://images.indianexpress.com/2021/08/PTEROSAUR-FOSSIL-2.jpg",
        publishedAt: "2021-08-30T11:04:33Z",
        content:
          "Limestone slabs recovered in a 2013 police raid in Brazil have revealed the most complete fossil of a species of pterosaur ever found, providing new details about how the flying reptile might have lo… [+4839 chars]",
      },
      {
        source: { id: null, name: "NDTV News" },
        author: null,
        title:
          'Pak NSA Denies "Warning" Of Second 9/11 If West Didn\'t Recognise Taliban - NDTV',
        description:
          "Pakistan National Security Advisor (NSA) Moeed Yousuf's latest interview has sparked a controversy after it was indicated that the security official suggested the risk of 'second 9/11' if the Western countries do not recognise Taliban.",
        url: "https://www.ndtv.com/world-news/pak-nsa-denies-warning-risk-of-second-9-11-if-west-does-not-recognise-taliban-2523747",
        urlToImage:
          "https://c.ndtvimg.com/2021-08/1skqf8_pakistan-national-security-advisor-nsa-moeed-yousuf_625x300_30_August_21.jpg",
        publishedAt: "2021-08-30T10:55:22Z",
        content:
          "Pakistan National Security Advisor Moeed Yousuf's interview recently sparked controversy.\r\nIslamabad: Pakistan National Security Advisor (NSA) Moeed Yousuf's latest interview has sparked a controvers… [+1530 chars]",
      },
      {
        source: { id: null, name: "Cricbuzz" },
        author: null,
        title:
          "Vasu Paranjape passes away | Cricbuzz.com - Cricbuzz - Cricbuzz",
        description:
          "Paranjape played 29 first-class matches for Mumbai and Baroda in a career spanning from 1956 to 1970",
        url: "https://www.cricbuzz.com/cricket-news/118802/vasu-paranjape-passes-away",
        urlToImage:
          "http://www.cricbuzz.com/a/img/v1/600x400/i1/c212089/paranjape-played-29-first-clas.jpg",
        publishedAt: "2021-08-30T10:53:58Z",
        content:
          "Paranjape played 29 first-class matches for Mumbai and Baroda in a career spanning from 1956 to 1970 © Getty\r\nVasudeo Paranjape, the former Mumbai cricketer, passed away on Monday (August 30), aged 8… [+1225 chars]",
      },
      {
        source: { id: null, name: "The Indian Express" },
        author: "Express News Service",
        title:
          "Staggered lunch breaks, quarantine room among guidelines for reopening of Delhi schools - The Indian Express",
        description:
          "Delhi news: Apart from standard precautions on sanitization, masking and physical distancing, institutes have also been directed to maintain a ‘quarantine room’ on campus for the event that a student or teacher displays symptoms while at school.",
        url: "https://indianexpress.com/article/cities/delhi/ddma-guidelines-for-reopening-of-delhi-schools-7477767/",
        urlToImage: "https://images.indianexpress.com/2021/08/School-10.jpg",
        publishedAt: "2021-08-30T10:35:02Z",
        content:
          "Delhi Schools Reopening, DDMA New Guidelines: The Delhi Disaster Management Authority Monday issued its order permitting schools, colleges, and other educational institutes to re-open for students in… [+2883 chars]",
      },
      {
        source: { id: null, name: "Hindustan Times" },
        author: "HT Entertainment Desk",
        title:
          "Karan Johar reveals mom Hiroo had ‘two massive surgeries’ amid pandemic, shares video from hospital: ‘Oscar goes to…’ - Hindustan Times",
        description:
          "Karan Johar showered praise on his ‘superhero’ Hiroo Johar as he shared a video of her from the hospital. He said that she underwent ‘two massive surgeries’ in the last eight months but kept her spirits high through it all. | Bollywood",
        url: "https://www.hindustantimes.com/entertainment/bollywood/karan-johar-reveals-mom-hiroo-had-two-massive-surgeries-amid-pandemic-shares-video-from-hospital-oscar-goes-to-101630318150853.html",
        urlToImage:
          "https://images.hindustantimes.com/img/2021/08/30/1600x900/karan_johar_1630318631669_1630318647188.jpg",
        publishedAt: "2021-08-30T10:26:24Z",
        content:
          "Karan Johar took to Instagram to share a video of his mother, Hiroo Johar, from a hospital in Mumbai after she underwent an operation. He called her a superhero in his caption and revealed that she u… [+1549 chars]",
      },
      {
        source: { id: "the-times-of-india", name: "The Times of India" },
        author: "TIMESOFINDIA.COM",
        title:
          "Sensex, Nifty hit record closing highs: Top reasons behind the surge - Times of India",
        description:
          "India Business News: Equity indices surged to fresh highs on Monday with the benchmark BSE sensex rising over 750 points led by gains in auto and metal stocks. After scali",
        url: "https://timesofindia.indiatimes.com/business/india-business/sensex-nifty-hit-record-closing-highs-top-reasons-behind-the-surge/articleshow/85763891.cms",
        urlToImage:
          "https://static.toiimg.com/thumb/msid-85763896,width-1070,height-580,imgsize-86304,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        publishedAt: "2021-08-30T10:25:00Z",
        content:
          "Sensex, Nifty hit record closing highs: Top reasons behind the surge",
      },
    
  ];

  // async componentDidMount (){

  //     let url = "https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=2cc859b36f4b4f5f852352533daadc7a";

  //     let data = await fetch(url)

  //     let parseData = await data.json() ;

  //     console.log(parseData);
  // }

  constructor() {
    super();
    console.log("Constructor working");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h4>Top Headlines For Today</h4>
        <div className="row my-3">
          {this.state.articles.map((element) => {
            return (
                <div className="col-md-4 my-3">
                <NewsItem
                  key = {element.url}
                  title={element.title.slice(0,45)}
                  description={element.description.slice(0,88)}
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
