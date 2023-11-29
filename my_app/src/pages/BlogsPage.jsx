
import {Link,useSearchParams} from 'react-router-dom'

const BlogsPage = () => {
const params=useSearchParams()
console.log(params);
  return (
    <div>
      <div className="blog-card">
        <h3>Blog 1</h3>
        <Link to="/blogs/1">See more</Link>
      </div>
      <div className="blog-card">
        <h3>Blog 2</h3>
        <Link to="/blogs/2">See more</Link>
      </div>
      <div className="blog-card">
        <h3>Blog 3</h3>
        <Link to="/blogs/3">See more</Link>
      </div>
      <div className="blog-card">
        <h3>Blog 4</h3>
        <Link to="/blogs/4">See more</Link>
      </div>
    </div>
  );
}

export default BlogsPage