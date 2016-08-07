import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

export default class UserList extends Component {
    componentWillMount() {
        this.props.fetchUsers();
    }

    renderUser(user, key) {
        return (
            <div className="card card-block" key={key}>
                <h4 className="card-title">{user.name}</h4>
                <p className="card-text">{user.company.name}</p>
                <a className="btn btn-primary" href={user.website}>website</a>
            </div>
        );
    }

    render() {
        return (
            <div className="user-list">
                {this.props.users.map(this.renderUser)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
    };
}

export default connect(mapStateToProps, actions)(UserList);
