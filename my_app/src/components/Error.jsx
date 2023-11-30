import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <Link to='/'> <h1 className="text-center">Error 404</h1></Link>
    </div>
  );
}

export default Error