/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import styles from './styles.module.scss'
import { APP_LOGO_SQUARE } from '@/constants'
import Image from 'next/image'
import googleIcon from '@/assets/app/google.svg'
import Link from 'next/link'
import { Eye, EyeSlash } from 'react-bootstrap-icons'
import { NextSeo } from 'next-seo'
import seoData from '@/utils/seoData'

function Login(props) {
  return (
    <>
        <NextSeo {...props.pageMeta} />
        <div className={`${styles.formContainer} my-5 d-flex flex-column justify-content-center align-items-center `}>
            <h2 className="page-title">Login</h2>
            <div className={`d-flex gap-4 ${styles.formBox} py-4 px-3 px-md-5 mt-3`}>
                <div className={`${styles.formLeft} flex-grow-1 justify-content-center align-items-center d-none d-md-flex `}>
                    <Image src={APP_LOGO_SQUARE} width={300} height={300} alt="app logo" />
                </div>
                <div className={`${styles.formRight} py-3 flex-grow-1 `}>
                    <div className="d-flex gap-2 align-items-center pb-1">
                        {/* <span>Sign in with</span> */}
                        {/* <button className={`${styles.signInButton} p-1`}>
                            <Image src={googleIcon.src} alt="google sign in btn" width={25} height={25} /> 
                        </button> */}
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
                        <div className="input-group my-3">
                            <input type="text" className="form-control" placeholder="Email address" aria-label="email" />
                        </div>
                        <div className="input-group my-3">
                            <input type="text" className="form-control" placeholder="Password" aria-label="password" />
                            <span className="input-group-text" id="basic-addon1">
                                <EyeSlash />
                            </span>
                        </div>
                        <div className={`d-flex justify-content-between mt-2 borderLight px-2 py-1`}>
                            <div className={`${styles.rememberMeContainer} d-flex gap-2`}>
                                <input type='checkbox' id="rememberMe" />
                                <label htmlFor="rememberMe" >Remember Me</label>
                            </div>
                            <Link href="/reset-password">
                                Forgot Password?
                            </Link>
                        </div>
                        <div className={`${styles.submitBtnContainer} mt-3 pb-1`}>
                            <button className={"submitBtn"}>
                                Login
                            </button>
                        </div>

                        <hr />

                        <div className={styles.createAccount}>
                            <p className={`${styles.createAccText} p-0 m-0`}>
                                Don't have an account? <Link href="/register" className='text-decoration-underline'>Create Account</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export async function getServerSideProps(){
    const pageMeta = {
        ...seoData.login
    }
    return {
        props: {
            pageMeta
        }
    }
}

Login.layout = "full-width"

export default Login