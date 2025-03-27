import React from 'react'
import './Header.scss'
export default function Header() {
  return (
   <>
<header>
  <div className="header_container">
    <nav>
      <div className="log">
        <a href="#">
          protfo<span>lio.</span>
        </a>
      </div>
      <ul>
        <li>
          <a href="#">home </a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">services</a>
        </li>
        <li>
          <a href="#">skills</a>
        </li>
        <li>
          <a href="#">teams</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </nav>
    <div className="home">
      <p>Hello, my name is </p>
      <br />
      <h2>adel ramadan saper Elbamby</h2>
      <br />
      <h3>
        and, I'm a <span>develober</span>
      </h3>
      <a href="#">hair me </a>
    </div>
  </div>
</header>

   </>
  )
}
