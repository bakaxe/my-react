import React from 'react'
import Link from 'gatsby-link'
import GatsbyLink from 'gatsby-link';
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/pb_logo.svg')}
      width="30" /></Link>
      <Link to="/for sale">Businesses for sale</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
       <Link to="/sign up"><button>Sign Up</button></Link>
    </div>
</div>
)

export default Header
