import React from 'react';
import { connect } from 'react-redux'

import { SignUpForm } from './../../components'

class SignUpFormContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { errors: [] };
    }

    handleSubmit = (values) => {
        console.log('data form', values)
    }


    render() {
        return (
            <SignUpForm
                onSubmit={this.handleSubmit}
                errors={this.state.errors}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {}
}

export default connect(mapStateToProps)(SignUpFormContainer)