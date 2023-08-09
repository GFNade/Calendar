import '../../styles/login/signup.scss'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../store/actions/Login'
import { FaFacebookF, FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';

function Signup() {
    const dispatch = useDispatch()
    const Login = useSelector(state => state.Login.Login)
    const navigate = useNavigate()
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const clickSigin = () => {
        if (FirstName === "" || LastName === "" || Email === "" || Password === "") {
            toast.error("Please enter all information");
            return;
        }
        let user = { id: Login.length + 1, username: Email, password: Password, firstName: FirstName, lastName: LastName }
        dispatch(login(user));
        navigate('/');
        toast.success("Sign up successfully");
    }
    return (
        <MDBContainer fluid>

            <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '200px' }}></div>

            <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
                <MDBCardBody className='p-5 text-center'>

                    <h2 className="fw-bold mb-5">Sign up now</h2>

                    <MDBRow>
                        <MDBCol col='6'>
                            <MDBInput wrapperClass='mb-4' placeholder='First name' id='form1' type='text' onChange={(e) => setFirstName(e.target.value)} />
                        </MDBCol>

                        <MDBCol col='6'>
                            <MDBInput wrapperClass='mb-4' placeholder='Last name' id='form1' type='text' onChange={(e) => setLastName(e.target.value)} />
                        </MDBCol>
                    </MDBRow>

                    <MDBInput wrapperClass='mb-4' placeholder='Email' id='form1' type='email' onChange={(e) => setEmail(e.target.value)} />
                    <MDBInput wrapperClass='mb-4' placeholder='Password' id='form1' type='password' onChange={(e) => setPassword(e.target.value)} />

                    <div className='d-flex justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                    </div>

                    <MDBBtn className='w-100 mb-4' size='md' onClick={() => clickSigin()}>sign up</MDBBtn>

                    <div className="text-center">

                        <p>or sign up with:</p>
                        <FaFacebookF className='icon_signup' />
                        <FaGoogle className='icon_signup' />
                        <FaTwitter className='icon_signup' />
                        <FaGithub className='icon_signup' id="icon_signup" />

                        {/* <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='facebook-f' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='twitter' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='google' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='github' size="sm" />
                        </MDBBtn> */}

                    </div>

                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    );
}

export default Signup;