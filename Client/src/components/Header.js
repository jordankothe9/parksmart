import React, { Component } from 'react'
import {Link} from 'react-scroll'

export default class Header extends Component {
    render() {
        return (
            <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
          <li><Link activeClass="active" to="welcome" spy={true} smooth={true}>Welcome</Link></li>
          <li><Link  to="about" spy={true} smooth={true}>About</Link></li>
          <li><Link  to="faq" spy={true} smooth={true}>FAQ</Link></li>
          <li><Link  to="team" spy={true} smooth={true}>Team</Link></li>
          <li><Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
            </ul>
        )
    }
}