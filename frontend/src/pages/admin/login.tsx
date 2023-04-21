import { NextPage } from "next";
import React from "react";
import { AdminLoginForm } from "@repo/components/forms/AdminLoginForm";

const Login: NextPage = () => {
  return (
    <div className="admin-login-page green-bg fits-screen">
      <div className="admin-login-page__logo">
        <img
          className="login-page__logo"
          src="/assets/images/logo.svg"
          alt="Logo"
        />
      </div>
      <h2>
        Upload your models through the
        <br />
        administration panel.
      </h2>
      <AdminLoginForm />
    </div>
  );
};

export default Login;
