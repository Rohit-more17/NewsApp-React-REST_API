import React, { Component } from "react";

export class NewsItem extends Component {
  addDefaultSrc(ev) {
    ev.target.src =
      "data:image/jpeg;base64,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";
  }
  render() {
    let { title, description, imageUrl, newsUrl, source, date } = this.props;

    return (
      <div>
        <div className="card bg-dark ">
          <div className="container">
            <span
              className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-dark text-light"
              style={{ left: "50%", zIndex: 1 }}
            >
              {source}
            </span>
            <img
              onError={this.addDefaultSrc}
              src={
                !imageUrl
                  ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIX2VGefuclz7q8BtXa7W7JPLZCK0lh3bdyp_Ai5OSaQtkGUk3iQ35kp6h91U3yq6Jd0w&usqp=CAU"
                  : imageUrl
              }
              className="card-img-top"
              alt="..."
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small class="text-white">{new Date(date).toGMTString()}</small>
            </p>
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
