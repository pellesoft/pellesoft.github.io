import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-lg">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <button className="navbar-link">About me</button>
                    </li>
                    <li className="navbar-item">
                        <button className="navbar-link">Projects</button>
                    </li>
                    <li className="navbar-item">
                        <button className="navbar-link">Photos</button>
                    </li>
                    <li className="navbar-item">
                        <button className="navbar-link">Contact</button>
                    </li>
                </ul>
            </nav>
        );
    }
}