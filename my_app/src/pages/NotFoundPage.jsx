
import {Link} from 'react-router-dom'
const NotFoundPage = () => {
  return (
    <div>
      <div className="container">
        <h1>Page not found</h1>
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
}

export default NotFoundPage