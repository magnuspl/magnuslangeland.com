import React from 'react'
import Link from 'gatsby-link'

const Contact = () => (
  <div>
  <form action="mailto:someone@example.com" method="post" enctype="text/plain">
Name:<br></br>
<input type="text" name="name"/>
E-mail:<br></br>
<input type="text" name="mail"/>
Comment:<br></br>
<input type="text" name="comment" size="50"/>
<input type="submit" value="Send"/>
<input type="reset" value="Reset"/>
</form>
</div>
)

export default Contact
