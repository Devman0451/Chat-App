import React from 'react'

import classes from './SignIn.module.css'

import Logo from '../icons/Logo'

const SignIn = () => {
    return (
        <div className={classes.Container}>
            <div className={classes.LogoContainer}>
                <Logo />
                <h2 className={classes.LogoTitle}>DISCORD</h2>
            </div>
            <div className={classes.Greeting}>
                <h2>Welcome Back!</h2>
                <p>We're so excited to see you again!</p>
            </div>
            <form method="post">
                <div className={classes.FormInput}>
                    <label>EMAIL</label>
                    <input type="email"/>
                </div>
                <div className={classes.FormInput}>
                    <label>PASSWORD</label>
                    <input type="password"/>
                </div>
                <button>Login</button>
                <p className={classes.SignUpCTA}>Need an account? <a href="">Register</a></p>
            </form>
        </div>
    )
}

export default SignIn