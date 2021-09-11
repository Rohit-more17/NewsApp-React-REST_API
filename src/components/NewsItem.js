import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;

    return (
      <div>
        <div className="card bg-dark " >
          <img src={!imageUrl ?" https://lh3.googleusercontent.com/proxy/37FY2UpRrol4z1DQOJAkvklilj_Bl6ND8Kz8LdZ31m9N0MWi8WYf0mdmWoUsI6DDEh1lmPNEseP6VETa9WbV_qd7ZAGBHqAX5p4QNPd1ITfv0JUZOD0lIA " : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
