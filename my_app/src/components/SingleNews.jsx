import { useEffect,useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const SingleNews = () => {
  const[singleNews,setSingleNews]=useState([])

  const {id}=useParams()


  useEffect(()=>{
  singleFetch()
  },[])



async function singleFetch() {
    try {
        
        const response = await axios.get(
          `https://api.spaceflightnewsapi.net/v3/articles/${id}`
        );
        setSingleNews(response.data)
    } catch (error) {
        console.log(error);
    }
    
}

console.log(singleNews);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <img
              className="card-img-top"
              src={singleNews.imageUrl}
              alt={singleNews.title}
            />
            <div className="card-body">
              <h2>{singleNews.title}</h2>
              <h3>{singleNews.summary}</h3>
              <p>{singleNews.publishedAt}</p>
              <Link to="/">Back to home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleNews