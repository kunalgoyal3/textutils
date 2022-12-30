//type rfc to get react function component 

import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav className={` navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className={`nav-link text-${props.mode === 'dark' ? 'light' : 'dark'}`} href="/"><span className="sr-only">Home</span></a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-${props.mode === 'dark' ? 'light' : 'dark'}`} href="/accordian1">{props.aboutText}</a>
            </li>
           


          </ul>

        </div>
        <div>
          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" onClick={props.togglemode} id=" customSwitch1"  />
            <label className={`custom-control-label text-${props.mode === 'dark' ? 'light' : 'dark'} for="customSwitch1" `}>{props.mode==='primary'?"enable dark mode":"enable light mode"}</label>
          </div>
        </div>

      </nav>

    </>
  )
}

Navbar.prototype = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About Text here'
};