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

function Register() {
    return (
        <>
            <NextSeo {...seoData.register} />
            <div
                style={{
                    background: 'linear-gradient(to bottom, #f0f0f0, #ffffff)',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    className="p-4 rounded border"
                    style={{
                        backgroundColor: 'white',
                        border: '2px solid #ccc',
                        width: '400px',
                    }}
                >
                    <h2>Create an Account</h2>
                    <form>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col">
                                    <select className="form-select">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <select className="form-select">
                                        <option value="india">India</option>
                                        <option value="usa">USA</option>
                                        <option value="canada">Canada</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                            />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary w-100" type="submit">
                                Create Account
                            </button>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-light border w-100" type="button">
                                Sign Up Using Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

Register.layout = "blank"

export default Register