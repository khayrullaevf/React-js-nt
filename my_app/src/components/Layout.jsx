import {Fragment} from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Layout