import React, { Component } from 'react'
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
    state = {
        isOpen: false
    };
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    };
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-center">
                    <div className="navbar-header">
                        <Link to="/" style={{textDecoration: 'none', color: 'grey'}}>
                            {/* <img src={logo} alt="Beach Resort"/> */}
                            <h3>Ebekendy Hotel</h3>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
