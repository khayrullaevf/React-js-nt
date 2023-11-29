import React from 'react'


import './articleCard.css'
const ArticlesCard = (props) => {
    const {id,title,imageUrl,publishedAt,summary} = props.articlesData;




    const handleCard=()=>{
        console.log('clicked');
    }
   
  return (
    <div className="col-4" onClick={handleCard}>
      <div className="article-card card">
        <img className="card-img-top" src={imageUrl} alt={title} />
        <div className="card-body">
          <h5 className="card-title">
            {id} .{title}
          </h5>
          <h3>{title}</h3>
          <p>{summary}</p>
          <small>Published :{publishedAt}</small>
        </div>
      </div>
    </div>
  );
}

export default ArticlesCard;

