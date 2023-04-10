import React from "react";

import './static/style.css';
import './static/utils.css';
// import '../MetaCss/meta'

export default function login() {
    return (
        <>
            <div className="text-lg-start ">

                {/* <div classNameName="display: none;" data-bind="visible: true"> */}
                    <div className="container-xl" data-bind="with: signinSecurityDeviceWebAuthnAssertionVM">
                        
                        {/* <main data-bind="descendantsComplete: onDescendantsComplete"> */}
                            <h2 className="align-center signin-page-title text-light mt-3" >
                                Log in to your Workolia Account</h2>

                            <form action="/signin" method="post" data-bind="submit: onSubmit, attr: {action: action}">
                                {/* <input type="hidden" name="_csrf" value="463f57cf-e577-4379-b68d-5ca237a110bb" /> */}
                                {/* <div classNameName="display:none !important"><input type="text" name="contact_me" value="" tabindex="-1"
                                    autocomplete="off" /></div> */}

                                <div className="signin-form">
                                    <div className="form-field">
                                        <p className="align-center font-weight-700 signin-form-title text-light">Log in or <a className="border-bottom"
                                            href="register">create an account</a></p>
                                        <p className="align-center font-weight-700 signin-form-title text-light"
                                            data-bind="visible: !!signinExtraParams.existingFlowProduct">Log in with your email</p>
                                    </div>


                                    {/* <!-- Login form step 1 --> */}
                                    <div data-bind="visible: step() == 1" className="signin-form-step">
                                        {/* <!-- Email input --> */}
                                        <div className="form-field" data-bind="css: { error: emailError() }">
                                            <label for="email" className="form-label">
                                                Email
                                            </label>
                                            <input type="email" id="email" name="email" placeholder="email@example.com" required
                                                 autocapitalize="off" autocomplete="username" autofocus
                                                data-bind="value: email, textInput: email" />
                                            <label for="password" className="form-label">
                                                Password
                                            </label>
                                            <input type="password" id="pass" name="pass" placeholder="Password" required 
                                                autocapitalize="off" autocomplete="password" autofocus
                                                data-bind="value: email, textInput: email" />
                                            <div className="form-field-error-message" data-bind="visible: emailError()">Please enter a
                                                valid email</div>

                                        </div>
                                        <div className="form-field">
                                            <button className="button button-nulab" type="submit" id="next"
                                                data-bind="click: doSubmitEmail, enable: !sending()">
                                                <span data-bind="visible: !sending()">Login</span>
                                            </button>
                                        </div>
                                        <div className="form-field">
                                            <p className="align-center font-weight-700 signin-form-title text-light">Not have account? <a className="border-bottom"
                                                href="register">create an account</a></p>
                                            
                                        </div>

                                        {/* <!-- End of email input --> */}
                                    </div>
                                </div>
                            </form>
                        {/* </main> */}
                    </div>
                </div>
            {/* </div> */}

        </>

    )
}
