import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="intro">
      <h1 id="name">Hey 👋 I'm Magnus Peter Langeland</h1>
      <div className="subtext">
        <p>I'm a computer science student from Oslo</p>
        <p id="subtitle">Projects:</p>
        <p><a href="https://www.calculatortab.com/">Calculatortab</a>: Saving the world one calculator at a time</p>
        <p><a href="https://www.cryptolurker.com/">Cryptolurker</a>: Cryptotracker</p>
        <p><a href="https://github.com/NTNUI/booking">NTNUi booking</a>: Booking application for NTNUi.</p>
      </div>
      <div className="subtext">
        <p id="subtitle">Old projects:</p>
        <p><a href="https://www.facebook.com/parrybot/">Parry</a>: Facebook bot made for NTNU students.</p>
      </div>
      <div className="subtext">
        <p id="subtitle">Links:</p>
        <p><a href="https://github.com/magnuspl/">GitHub</a></p>
        <p><a href="https://twitter.com/magnus_pl">Twitter</a></p>
        <p><a href="https://www.linkedin.com/in/magnus-peter-langeland-5a012142/">LinkedIn</a></p>

      </div>
    </div>
    </div>
)

export default IndexPage
