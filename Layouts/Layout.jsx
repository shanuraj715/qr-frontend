import React, { useEffect } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useUser } from "@/context/user";
import { postRequest } from "@/utils/request";
import { USER_LOGIN_CHECK } from "@/utils/endpoints";
import { toaster } from "@/utils/toaster";

function Layout(props) {
  const { updateUser } = useUser();

  const checkForLogin = async () => {
    try {
      const resp = await postRequest(USER_LOGIN_CHECK);
      if (resp.data.statusCode === 200) {
        const { username, email, firstName, lastName, profilePicture } =
          resp.data.responseData;
        updateUser({
          isLoggedIn: true,
          username,
          email,
          firstName,
          lastName,
          profilePicture,
        });
      }
    } catch (err) {
      toaster.error(err.message);
    }
  };

  useEffect(() => {
    checkForLogin();
  }, []);

  return props.children.type.layout !== "blank" ? (
    <>
      <Header />
      <div
        className={`${
          props.children.type.layout === "full-width" ? "" : "container "
        } mt-5 pt-2 overflow-hidden`}
      >
        <div className="pageBG position-fixed w-100 h-100 top-0"></div>
        {props.children}
      </div>
      <Footer />
    </>
  ) : (
    props.children
  );
}

export default Layout;
