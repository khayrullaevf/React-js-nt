import React from 'react'
import { Link } from 'react-router-dom';

const NewsCard = (props) => {
    const { title, imageUrl,id } = props.newsData;
    console.log(props.newsData);
  return (
    <div className="col-3">
      <div className="card">
        <img src={imageUrl} alt={title} />
        <div className="card-body">
          <h5>{title}</h5>
          <h6>{id}</h6>
          <Link to={`/news/${id}`}>Read more</Link>
        </div>
      </div>
    </div>
  );
}

export default NewsCard