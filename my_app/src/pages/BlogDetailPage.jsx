import { useParams } from "react-router-dom";

const BlogDetailPage = () => {
  const {blogId} = useParams();
  return (
    <div>
      <h1>Blogs detail {blogId}</h1>
    </div>
  );
};

export default BlogDetailPage;
