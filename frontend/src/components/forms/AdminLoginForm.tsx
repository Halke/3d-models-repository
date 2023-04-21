import React, { FC } from "react";
import { Input } from "../block/Input";
import { Button } from "../block/Button";
import Link from "next/link";

export const AdminLoginForm: FC = () => {
  return (
    <div className="admin-login-form">
      <div className="admin-login-form__login">
        <h1>Admin login</h1>
        <p>Enter your informations:</p>
        <form>
          <Input name="email" placeholder="Email" label="Email" />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            label="Password"
          />
          <Button text="Submit" variant="secondary" />
        </form>
        <Link href='/admin/register'>I don&apos;t have an account.</Link>
        <Link href='/admin/fogot-password'>Forgot password</Link>
      </div>
      <div className="admin-login-form__visit-shop">
        <div className="cart-image">
          <img src="/assets/icons/cart.svg" alt="Cart" />
        </div>
        <h3>You are just a guest and want to buy some models?</h3>
        <Button text="Get to shop" />
      </div>
    </div>
  );
};
