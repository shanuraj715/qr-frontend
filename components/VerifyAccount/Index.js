import React, { useCallback, useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Alert from "@/components/Alert/Alert";
import { Row, Col } from "react-bootstrap";
const Modal = dynamic(() => import("@/components/Modal/CustomModal"), { ssr: false });
import styles from "./styles.module.scss";
import { postRequest } from "@/utils/request";
import Button from '@/components/Buttons/Button'
import { toaster } from "@/utils/toaster";
import { USER_ACCOUNT_OTP_VERIFY, USER_ACCOUNT_OTP_RESEND } from '../../utils/endpoints'
import { useRouter } from "next/router";

const VerifyAccount = (props) => {
  const router = useRouter()
  const { isModalOpen, closeVerifyAccountModal, email = "", token = '' } = props;

  const [value, setValue] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const [resendOtpCounter, setResendOtpCounter] = useState(null)

  const intervalRef = useRef(null)

  const startResendOtpTimer = () => {
    clearInterval(intervalRef.current)
    let timer = 10
    intervalRef.current = setInterval(() => {
      if(timer !== null && timer <= 0){
        setResendOtpCounter(null)
        timer = null
        clearInterval(intervalRef.current)
        return
      }
      setResendOtpCounter(timer)
      timer--
    }, 1000)
  }

  const resendOtp = useCallback(async () => {
    if(resendOtpCounter !== null) return
    try{
      const payload = {
        token
      }
      const response = await postRequest(USER_ACCOUNT_OTP_RESEND, payload)
      if(response.status === 200){
        toaster.success("OTP Sent. Check your email.")
      }
    }
    catch(err){
      toaster.error(err.message)
    }
    finally{
      startResendOtpTimer()
    }
  }, [token])

  useEffect(() => {
    startResendOtpTimer()
  }, [])

  const verifyOTP = useCallback(async () => {
    if(isVerifying) return
    setIsVerifying(true)
    if(value.length !== 6){
      return toaster.error("Invalid OTP.");
    }
    try{
      const payload = {
        token,
        otp: value
      }
      const response = await postRequest(USER_ACCOUNT_OTP_VERIFY, payload)
      if(response.status === 200){
        toaster.success("Account verified successfully.")
        router.replace('/login')
      }
    }
    catch(err){
      return toaster.error(err.message)
    }
    finally{
      setIsVerifying(false)
    }
  }, [value, isVerifying, token]);

  const updateValue = useCallback((e) => {
    if(isVerifying) return
    const val = e.target.value
    if(isNaN(val) || val.length === 7)  return
    setValue(e.target.value)
  }, [isVerifying])

  useEffect(() => {
    if(value.length !== 6) return
    verifyOTP()
  }, [value])

  const verifyAccountModalBtns = [
    {
      text: "Verify",
      variant: "success",
      onClick: verifyOTP,
    },
  ];

  return (
    <Modal
      open={isModalOpen}
      heading={"Verify your account!"}
      onClose={closeVerifyAccountModal}
      closeButton={false}
      buttons={verifyAccountModalBtns}
      size={"lg"}
    >
      <h2 className={'text-center my-4 pb-2'}>Verify your account.</h2>
      <Alert variant="success" className={'mb-4'}>
        We have sent an OTP on you email <strong>{email}</strong>. OTP will expire after 5 minutes.
      </Alert>

      <Row>
        <Col>
          <div className={"d-flex align-items-center"}>
            <div className="mb-3 w-100">
              <input
                type="text"
                placeholder="Enter OTP here."
                className={`py-3 ${styles.otpInput}`}
                autoFocus
                onChange={updateValue}
                value={value}
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className={'py-2 d-flex gap-3 justify-content-center'}>
          <Button disabled={resendOtpCounter !== null} className={'py-2 mt-2 mb-4'} variant="outline-secondary" onClick={resendOtp}>Resend {resendOtpCounter === null ? '' : `(${resendOtpCounter})`}</Button>
          <Button onClick={verifyOTP} className={'py-2 mt-2 mb-4'} variant="primary" disabled={isVerifying}>{isVerifying ? "Verifying..." : "Verify!"}</Button>
        </Col>
      </Row>
    </Modal>
  );
};

export default VerifyAccount;
