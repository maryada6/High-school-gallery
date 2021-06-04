
import React from 'react';
import { Link } from 'react-router-dom'
const HeaderPart=()=>{
   return( <header>
    <div class="progress"></div>
    <nav>
      <ul>
      <Link to="/" >
      <li>Home</li>
      </Link>
      <Link to="/" >
      <li>Kodai</li>
      </Link>
      <Link to="/kadam" >
      <li>Kadam</li>
      </Link>
      <Link to="/sports" >
      <li>Sports</li>
      </Link>
      <Link to="/farewell" >
      <li>'19</li>
      </Link>
      <a href="#quote" data-name="farewell">
          <li>💙</li>
      </a>
      </ul>
    </nav>
  </header>
   ) 
}

export default HeaderPart;