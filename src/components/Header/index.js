import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = props => {
  const {location} = props
  const home = location.pathname === '/' ? 'active' : ''
  const bookShelves = location.pathname === '/shelf' ? 'active' : ''
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ul className="header-container">
      <Link to="/">
        <img
          className="book-hub logo"
          src="https://res.cloudinary.com/kesav-kuchi/image/upload/v1648060130/bookhublogo_r7wcay.png"
          alt="website logo"
        />
      </Link>
      <li>
        <nav className="header-links-container">
          <Link to="/">
            <button type="button" className={`header-button ${home}`}>
              Home
            </button>
          </Link>
          <Link to="/shelf">
            <button type="button" className={`header-button ${bookShelves}`}>
              Bookshelves
            </button>
          </Link>
          <button
            type="button"
            className="header-button logout-button"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </nav>
      </li>
    </ul>
  )
}

export default withRouter(Header)
