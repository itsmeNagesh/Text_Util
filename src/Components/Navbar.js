import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
<>
   
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
 
    <a class="navbar-brand" href="#">Home</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">about</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">help</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown link
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>

 

</>
  )
  
}
// pre describe about type of properties like
Navbar.propTypes={
  tittle:PropTypes.string,
  about:PropTypes.string
}
// we can set default value of our properties
Navbar.defaultProps={
  tittle:'please pass tittle name ',
  about:' enter the discription about'
};