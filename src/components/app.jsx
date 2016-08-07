import React, { Component } from "react";
import { connect } from "react-redux";
import UserList from './user_list';

export default class App extends Component {
    render() {
        return (
            <div>
                <UserList />
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(App);
