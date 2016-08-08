import React, { PropTypes, Component } from "react";
import { reduxForm } from "redux-form";
import * as actions from "../../actions";

class Signup extends Component {
    handleFormSubmit({ email, password }) {
        this.props.signupUser({ email, password });
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
        const labelIds = ['email', 'password', 'passwordConfirm'];
        const {
            fields:{
                email,
                password,
                passwordConfirm
            },
            handleSubmit,
            pristine,
            resetForm,
            submitting,
        } = this.props;
        return (
            <form onSubmit={handleSubmit(::this.handleFormSubmit)}>
                <fieldset className="form-group">
                    <label htmlFor={labelIds[0]}>Email</label>
                    <input {...email} className="form-control" id={labelIds[0]} />
                    {email.touched && email.error && <div className="error">{email.error}</div>}
                </fieldset>
                <fieldset className="form-group">
                    <label htmlFor={labelIds[1]}>Password</label>
                    <input {...password} type="password" className="form-control" id={labelIds[1]} />
                    {password.touched && password.error && <div className="error">{password.error}</div>}
                </fieldset>
                <fieldset className="form-group">
                    <label htmlFor={labelIds[2]}>Confirm Password:</label>
                    <input {...passwordConfirm} type="password" className="form-control" id={labelIds[2]} />
                    {passwordConfirm.touched && passwordConfirm.error &&
                    <div className="error">{passwordConfirm.error}</div>}
                </fieldset>
                {this.renderAlert()}
                <button type="submit" disabled={submitting}>Submit</button>
                <button type="button" disabled={submitting} onClick={resetForm}>
                    Cancel
                </button>
            </form>
        );
    }
}

function validate(formProps) {
    const errors = {};

    if (!formProps.email) {
        errors.email = 'Please enter an email';
    }

    if (!formProps.password) {
        errors.password = 'Please enter a password';
    }

    if (!formProps.passwordConfirm) {
        errors.passwordConfirm = 'Please enter a password confirmation';
    }

    if (formProps.password !== formProps.passwordConfirm) {
        errors.password = 'Passwords must match';
    }

    return errors;
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error,
    };
}

Signup.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
};

export default reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate,
}, mapStateToProps, actions)(Signup);