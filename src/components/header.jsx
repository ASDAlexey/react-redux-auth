import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../actions";

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">Sign In</li>
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        // users: state.users,
    };
}

export default connect(mapStateToProps, actions)(Header);
