/* eslint-disable react/no-unescaped-entities */

import React, { useCallback, useRef, useState } from 'react'
import dynamic from 'next/dynamic';
import styles from '../login/styles.module.scss'
import { APP_LOGO_SQUARE } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { Eye, EyeSlash } from 'react-bootstrap-icons'
import { NextSeo } from 'next-seo'
import seoData from '@/utils/seoData'
import allCountries from 'all-country-data'
import { toaster } from '../../utils/toaster'
import { USER_REGISTER } from '@/utils/endpoints'
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { ssr: false});

import VerifyAccount from '@/components/VerifyAccount/Index'
import { useLoader } from '@/context/Loader';
import { postRequest } from '@/utils/request';

function Register(props) {

    const { showLoader, hideLoader } = useLoader()

    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        country: '',
        password: '',
        confirmPassword: '',
        flag: ''
    })

    const [error, setError] = React.useState(null)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isVerified, setVerified] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false)

    const otpToken = useRef(null)

    const handleRecaptchaChange = (value) => {
        // This function will be called when reCAPTCHA is verified
        setVerified(true);
      };

    const updateForm = React.useCallback((e) => {
        const key = e.target.ariaLabel;
        const value = e.target.value
        setError(null)
        if(key === 'country'){
            const countries = allCountries.searchFlag(value).filter(country => country.name.toLowerCase() === value.toLowerCase())
            if(countries.length){
                setFormData(prev => ({
                    ...prev,
                    flag: countries[0].flag
                }))
            }
        }
        setFormData(prev => ({
            ...prev,
            [key]: value
        }))
    }, [formData])

    const validateForm = React.useCallback(() => {
        const { firstName, lastname, username, email, gender, country, password, confirmPassword } = formData
        if(firstName.length < 2){
            setError('firstName')
            toaster.error('Invalid first name.')
            return
        }
        if(lastname && lastname.length < 2){
            setError('lastName')
            toaster.error('Invalid last name.')
            return
        }
        if(username.length < 8 || username.length > 32){
            setError('username')
            toaster.error('Username length must be between 8 and 32 characters.');
            return
        }
        if(!/^[a-zA-Z0-9_]*$/.test(username)){
            setError('username')
            toaster.error("Invalid username.")
            return
        }
        if(!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)){
            setError('email')
            toaster.error('Invalid email address');
            return
        }
        if(allCountries.all().filter(item => item.country === country).length === 0){
            setError('country')
            toaster.error('Please select your country');
            return
        }
        if(password.length < 8 || password.length > 32){
            setError('password')
            toaster.error("Password length must be between 8 to 32 charaters")
            return
        }
        if(password !== confirmPassword){
            setError('confirmPassword')
            toaster.error('Password does not match');
            return
        }
        return true
    }, [formData])

    const submitForm = React.useCallback(async () => {
        if(!isVerified){
            toaster.error('Please verify')
            return
        }
        if(!validateForm()){
            return
        }
        try{
            showLoader()
            const payload = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                username: formData.username,
                email: formData.email,
                country: formData.country,
                password: formData.password
            }
            const response = await postRequest(USER_REGISTER, payload)
            
            if(response.status === 200){
                toaster.success('Account created successfully.')
                otpToken.current = response.data.responseData.token
                setIsModalOpen(true)
            }
        }
        catch(err){
            toaster.error(err.message)
        }
        finally{
            hideLoader()
        }
    }, [formData, isVerified])

    const togglePasswordVisibility = useCallback(() => {
        setIsPasswordVisible(prev => !prev)
    }, [])

  return (
    <>
        <NextSeo {...props.pageMeta} />
        <div className={`${styles.formContainer} my-5 d-flex flex-column justify-content-center align-items-center mx-1`}>
            <h2 className="page-title">Register</h2>
            <div className={`d-flex gap-4 ${styles.formBox} py-4 px-3 px-md-5 mt-3`}>
                <div className={`${styles.formLeft} flex-grow-1 justify-content-center align-items-center d-none d-lg-flex `}>
                    <Image src={APP_LOGO_SQUARE} width={300} height={300} alt="app logo" />
                </div>
                <div className={`${styles.formRight} py-3 flex-grow-1 `}>
                    <div className="d-flex gap-2 align-items-center pb-1">
                        <button className='google-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
                            <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                            <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                            <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                            <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                            </svg>
                            Continue with Google
                        </button>
                    </div>

                    <hr />

                    <div className={`${styles.form} pt-1`}>
                        <div className="input-group my-3 gap-2">
                            <input type="text" className={`form-control ${error === 'firstName' ? 'errorBorder' : ''}`} placeholder="First Name" aria-label="firstName" onChange={updateForm} value={formData.firstName} />
                            <input type="text" className={`form-control ${error === 'lastName' ? 'errorBorder' : ''}`} placeholder="Last Name" aria-label="lastName" onChange={updateForm} value={formData.lastName} />
                        </div>
                        <div className="input-group my-3 gap-2">
                            <input type="text" className={`form-control ${error === 'email' ? 'errorBorder' : ''}`} placeholder="Email" aria-label="email" onChange={updateForm} value={formData.email} />
                        </div>
                        <div className="input-group my-3 gap-2">
                            
                        <input type="text" className={`form-control ${error === 'username' ? 'errorBorder' : ''}`} placeholder="Username" aria-label="username" onChange={updateForm} value={formData.username} />
                            <div className={`form-control d-flex gap-2 align-items-center ${error === 'country' ? 'errorBorder' : ''}`}>
                                {formData.flag && <Image src={formData.flag} alt={''} width={20} height={15} />}
                                <select className={` w-100 ${styles.customSelect}`} aria-label='country' onChange={updateForm}>
                                    <option hidden selected>Select Country</option>
                                    {allCountries.all().map(item => <option key={item.country} value={item.country}>{item.country}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="input-group my-3 gap-2">
                            <input type={isPasswordVisible ? 'text' : 'password'} className={`form-control ${error === 'password' || error === 'confirmPassword' ? 'errorBorder' : ''}`} placeholder="Password" aria-label="password" value={formData.password} onChange={updateForm}/>
                            <div className={`form-control d-flex gap-2 ${error === 'confirmPassword' ? 'errorBorder' : ''}`}>
                                <input type={isPasswordVisible ? 'text' : 'password'}className={`w-100 border-0 ${styles.customSelect}`} placeholder="Confirm Password" aria-label="confirmPassword" value={formData.confirmPassword} onChange={updateForm} />
                                <span className="" onClick={togglePasswordVisibility}>
                                    {isPasswordVisible ? <EyeSlash /> : <Eye />}
                                </span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-end mt-3 pb-1 flex-column flex-sm-row gap-3">
                            <ReCAPTCHA
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                onChange={handleRecaptchaChange}
                            />
                            <div className={`${styles.submitBtnContainer}`}>
                                <button className={"submitBtn"} onClick={submitForm}>
                                    Register
                                </button>
                            </div>
                        </div>
                        

                        <hr />

                        <div className={styles.createAccount}>
                            <p className={`${styles.createAccText} p-0 m-0`}>
                                Already have an account? <Link href="/login" className='text-decoration-underline'>Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <VerifyAccount isModalOpen={isModalOpen} email={formData.email} token={otpToken.current} />
        
    </>
  )
}

export async function getServerSideProps(){
    const pageMeta = {
        ...seoData.register
    }
    return {
        props: {
            pageMeta
        }
    }
}

Register.layout = "full-width"

export default Register