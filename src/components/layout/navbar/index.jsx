import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Briefcase, Feather, Anchor, GitHub } from 'react-feather'

import { NavbarElement, NavbarList, NavbarLogo } from './style'

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
        <NavbarLogo>
          <h3>
            <a href="/">
              <Anchor className="align-middle" />
              <span className="align-middle"> {siteTitle} </span>
            </a>
          </h3>
        </NavbarLogo>
        <div className="main-navigation">
          <NavbarList>
            {/* <li><a href="/blog">blog</a></li> */}
            {/* <li><Link to="/" className="lined-link" activeClassName="active"> <User /> <span> About </span> </Link></li>
            <li><Link to="/blog" className="lined-link" activeClassName="active"> <Feather /> <span> Projects </span> </Link></li>
            <li><Link to="/works" className="lined-link" activeClassName="active"> <Briefcase /> <span> Resume </span> </Link></li> */}
            <li><a href="/" className="lined-link" activeClassName="active"> <User /> <span> About </span> </a></li>
            <li><a href="/blog" className="lined-link" activeClassName="active"> <Feather /> <span> Projects </span> </a></li>
            <li><a href="/works" className="lined-link" activeClassName="active"> <Briefcase /> <span> Resume </span> </a></li>

          </NavbarList>
        </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
