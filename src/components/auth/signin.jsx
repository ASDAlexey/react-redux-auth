import React, { Component } from "react";
import { reduxForm } from "redux-form";
import * as actions from "../../actions";

export default class Signin extends Component {
    handleFormSubmit({ email, password }) {
        this.props.signinUser({ email, password });
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Opps!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        const labelIds = ['email', 'password'];
        const { handleSubmit, fields:{ email, password } } = this.props;
        return (
            <form onSubmit={handleSubmit(::this.handleFormSubmit)}>
                <fieldset className="form-group">
                    <label htmlFor={labelIds[0]}>Email</label>
                    <input {...email} className="form-control" id={labelIds[0]} />
                </fieldset>
                <fieldset className="form-group">
                    <label htmlFor={labelIds[1]}>Password</label>
                    <input {...password} type="password" className="form-control" id={labelIds[1]} />
                </fieldset>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error,
    };
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password'],
}, mapStateToProps, actions)(Signin);