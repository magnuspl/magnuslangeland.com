import React from 'react'
import Link from 'gatsby-link'
import Favicon from 'react-favicon';


const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
    <Favicon url="http://oflisback.github.io/react-favicon/public/img/github.ico" />
  </div>
)

export default Header
