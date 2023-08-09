import React from 'react';
import '../../styles/login/signin.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';

function Signin() {
    const login = useSelector(state => state.Login.Login);
    const navigate = useNavigate();
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const licklogin = () => {
        if (Email === "" || Password === "") {
            toast.error("Please enter Email and Password");
            return;
        }
        let user = login.find((item) => item.username === Email);
        if (user.length === 0) {
            toast.error("Email is incorrect");
            return;
        } else {
            if (user.password === Password) {
                // toast.success("Signin successfully");
                navigate('/home');
            } else {
                toast.error("Password is incorrect");
                return;
            }
        }
    }
    return (
        <MDBContainer fluid className="p-3 my-5">

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
                </MDBCol>

                <MDBCol col='4' md='6'>


                    <MDBInput wrapperClass='mb-4' placeholder='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => setEmail(e.target.value)} />
                    <MDBInput wrapperClass='mb-4' placeholder='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)} />


                    <div className="d-flex justify-content-between mx-4 mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        <a href="!#">Forgot password?</a>
                    </div>

                    <MDBBtn className="mb-4 w-100" size="lg" onClick={() => licklogin()}>Sign in</MDBBtn>

                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">OR</p>
                    </div>

                    <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                        <MDBIcon fab icon="facebook-f" className="mx-2" />
                        Continue with facebook
                    </MDBBtn>

                    <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#55acee' }}>
                        <MDBIcon fab icon="twitter" className="mx-2" />
                        Continue with twitter
                    </MDBBtn>
                    <div style={{ textAlign: 'center', fontSize: "20px" }}>
                        <span>Don't have an account?</span> &nbsp; &nbsp;
                        <NavLink to="/signup">Sign Up</NavLink>
                    </div>


                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default Signin;