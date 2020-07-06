import React from 'react'

function SignIn() {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: [e.target.value]
        });
    }

    handleSubmit = (e) => {
        console.log(this.state);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <form id="signInForm" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type='email' className="form-control" id="email" onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type='password' className="form-control" id="password" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-block btn-primary" value="Login"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn
