import React from "react";

import '../static/style.css';
import '../static/utils.css';
// import '../MetaCss/meta'

export default function register() {
    return (
        <>
            <div className="  text-lg-start w-100  ">
                <div className=" container-xl" data-bind="with: signinSecurityDeviceWebAuthnAssertionVM">
                    <h2 className="align-center signin-page-title text-light mt-3" >
                        Sign up for a Workolia Account</h2>
                    <form action="/signup" method="post" className="js_double-submit-prevention">
                        <div className=" signup-form form ">
                            <div className="form-field">
                                {/* <div style={{ display: "none !important" }}>
                                    </div> */}
                                <div className="form signup-form">
                                    <h2 className="form__heading"><span>Create a Workolia Account</span>
                                    </h2>

                                    {/* <div className="global-errors">

                                    </div> */}

                                    <div className="form__field -mg-b-sm">
                                        <label className="form__label" for="name">Full name</label>
                                        <div className="form__control input-wrap">
                                            <input id="name" name="name" type="text" className="w-full large"
                                                autocomplete="nickname" data-bind="value: name, valueUpdate: 'afterinput'" />

                                        </div>
                                    </div>

                                    <div className="form__field -mg-b-sm" data-bind="with: emailViewModel">
                                        <label className="form__label" for="email">Email</label>
                                        <div className="form__control input-wrap">

                                            <input id="email" name="email" type="email"  className="w-full large"
                                                autocorrect="off" autocapitalize="off" autocomplete="username"
                                                data-bind="value: value, valueUpdate: 'afterinput', css:{ 'errors': hasMessages }, event: { blur: validate }" />
                                            <div data-bind="visible: hasMessages" style={{ display: "none" }}>
                                                <span className="error-message">
                                                    <span data-bind="foreach: messages">
                                                        <div data-bind="text: $data"></div>
                                                    </span>
                                                </span>
                                            </div>
                                            <div data-bind="visible: used" style={{ display: "none" }}>
                                                <div className="error-message">
                                                    <span>Try another or</span>
                                                    <a href="/signin">Log in from here</a>
                                                </div>
                                            </div>

                                        </div>


                                    </div>

                                    <div className="form__field" data-bind="with: passwordStrengthViewModel">
                                        <label className="form__label" for="password">Password</label>
                                        <div className="form__control input-wrap">

                                            <input id="password" name="password" type="password"  maxlength="128"
                                                className="w-full large" autocomplete="new-password"
                                                data-bind="value: value, valueUpdate: 'afterinput'" />

                                        </div>
                                        <label className="form__label" for="password">Confirm Password</label>
                                        <div className="form__control input-wrap">

                                            <input id="cpassword" name="cpassword" type="password"  maxlength="128"
                                                className="w-full large" autocomplete="new-password"
                                                data-bind="value: value, valueUpdate: 'afterinput'" />

                                        </div>

                                        <div className="password-strength mg-t10" data-bind="css: meterclassName">
                                            <div className="password-strength__meter">
                                                <div className="password-strength__meter-level"></div>
                                                <div className="password-strength__meter-level"></div>
                                                <div className="password-strength__meter-level"></div>
                                                <div className="password-strength__meter-level"></div>
                                                <div className="password-strength__meter-level"></div>
                                            </div>
                                            <p className="password-strength__hint">
                                                <span>Password strength</span>
                                                <img width="17px" className="icon"
                                                    src="https://d1lvv0q42gy9jf.cloudfront.net/R20230309_1/assets/img/common/indicator/indicator_sending.gif"
                                                    style={{ display: "none" }} data-bind="visible: loading.inProcess" />
                                                <b data-bind="text: messages"></b>
                                            </p>

                                            <div className="password-strength__suggestion" data-bind="visible: showSuggestions"
                                                style={{ display: "none" }}>
                                                <p className="password-strength__suggestion-title" data-bind="text: warning"></p>
                                                <ul className="password-strength__suggestion-list" data-bind="foreach: suggestions">
                                                    <li className="password-strength__suggestion-list-item" data-bind="text: $data">
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form__field -mg-b-lg">
                                        <div className="nu-checkbox">
                                            <input id="receiveNewsletter" className="nu-checkbox__button" name="receiveNewsletter"
                                                type="checkbox" value="true" /><input type="hidden" name="_receiveNewsletter"
                                                    value="on" />
                                            <label for="receiveNewsletter" className="nu-checkbox__label">It''s ok to send me emails
                                                about Workolia''s products and services.</label>
                                        </div>


                                    </div>

                                    <div className="form__field -mg-b-lg">
                                        <div className="g-recaptcha" data-callback="enableForm" data-expired-callback="disableForm"
                                            data-sitekey="6LdMliYUAAAAACqFT_xXfacWDfG08BEMKpbyTSzR"></div>
                                    </div>

                                    <div className="form__field align-center -mg-b-lg">
                                        <p className="form__text">By signing up, I agree to Workolia Inc.'s <a
                                            href="https://workolia.com/terms/" target="_blank" rel="noopener">Terms of
                                            Service</a> and <a href="https://workolia.com/privacy/" target="_blank"
                                                rel="noopener">Privacy Policy</a>.</p>
                                    </div>

                                    <div className="form-field form-buttons -x-center -mg-b-lg">
                                        <div className="form-buttons__control">
                                            <button className="px-5 py-3 sc-tnupqe-1 cLviyC " type="submit" id="next"
                                                data-bind="click: doSubmitEmail, enable: !sending()">
                                                <span data-bind="visible: !sending()">Sign up</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="form__field align-center">
                                        <p className="form__text">
                                            <span>Already have Account?</span>
                                            <a className="link-signin" href="/login">Log in from here</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/* 
                                    <p className="align-center font-weight-700 signin-form-title text-light">Log in or <a
                                        href="register">create an account</a></p>
                                    <p className="align-center font-weight-700 signin-form-title text-light"
                                        data-bind="visible: !!signinExtraParams.existingFlowProduct">Log in with your email</p>
                                </div>

 */}
                    {/* <!-- Login form step 1 --> */}
                    {/* <div data-bind="visible: step() == 1" className="signin-form-step"> */}
                    {/* <!-- Email input --> */}
                    {/* <div className="form-field" data-bind="css: { error: emailError() }">
                                        <label for="email" className="form-label">
                                            Email
                                        </label>
                                        <input type="email" id="email" name="email" placeholder="email@example.com" required
                                            value="" autocapitalize="off" autocomplete="username" autofocus
                                            data-bind="value: email, textInput: email" />
                                        <label for="password" className="form-label">
                                            Password
                                        </label>
                                        <input type="password" id="pass" name="pass" placeholder="Password" required value=""
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
                                    </div> */}
                    {/* <!-- End of email input --> */}
                    {/* </div>
                            </div> */}
                    {/* </form> */}
                    {/* </main> */}
                </div>
            </div>
            {/* </div> */}

        </>

    )
}
