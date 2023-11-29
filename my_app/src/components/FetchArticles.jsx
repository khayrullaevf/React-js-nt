import React, { useEffect, useState } from "react";
import ArticlesCard from "./ArticlesCard";

const FetchArticles = () => {
  const [articles, setArticles] = useState([]);

  const fetchArtciles = async () => {
    try {
      let url = "https://api.spaceflightnewsapi.net/v3/articles";
      const res = await fetch(url);
      const data = await res.json();
      setArticles(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArtciles();
  }, []);
    console.log(articles);

  return (
    <div>
      <div className="container">
        <h1 className="text-center">Articles</h1>
        <div className="row">
            {articles.map((article, index) => (
              <ArticlesCard key={index} articlesData={article} />
            ))}

        </div>
      </div>
    </div>
  );
};

export default FetchArticles;


