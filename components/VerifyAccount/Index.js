import React, { useCallback } from "react";
import dynamic from "next/dynamic";
import Alert from "@/components/Alert/Alert";
import { Container, Row, Col, Form } from "react-bootstrap";
const Modal = dynamic(() => import("@/components/Modal/Modal"), { ssr: false });
import styles from "./styles.module.scss";
import axios from "axios";

const VerifyAccount = (props) => {
  const { isModalOpen, closeVerifyAccountModal, email = "" } = props;

  const verifyOTP = useCallback(() => {
    console.log("VERIFY")
  }, []);

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
      <Alert variant="success">
        We have sent an OTP on you email <strong>{email}</strong>.
      </Alert>

      <Row>
        <Col>
          <div className={"d-flex align-items-center"}>
            <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter OTP here."
                className={`py-3 ${styles.otpInput}`}
                autoFocus
              />
            </Form.Group>
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default VerifyAccount;
