import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
         <h1>Top-shelf businesses, handpicked by us, for your consideration.</h1>
         <p>CSS Grid Rules!!</p><br/>
         <Link to="/page-2/">Businesses for sale</Link>
      </div>
    </div>   
  </div>
)

export default IndexPage
