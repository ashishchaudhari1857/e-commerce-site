import React from "react";
import Input from "../UI/Input";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGlobalHook } from "../Store/Contex_provider";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const ctx = useGlobalHook();
  const Navigate=useNavigate();
  const token = ctx.token;
  const submithandler = async (e) => {
    e.preventDefault();
    const newpass = e.target.Newpass.value;
    try {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBXXXskQKXF37sbqFTrxdIK7I3juj9VgxI",
        {
          method: "POST",
          body: JSON.stringify({
            password: newpass,
            idToken: token,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = res.json();
      if (res.ok) {
        console.log("password change successfully");
        toast.success("password change successfully")
        // Navigate('/home')
      } else {
        throw Error(data.error.message);
      }
    } catch (err) {
      toast.error(err.message)
    }
  };
  return (
    <>
      <h1 className="text-center">This is Your Profile </h1>

      <form onSubmit={submithandler}>
        <Input
          name={"Newpass"}
          label={"NewPassword"}
          input={{
            type: "password",
            min: "6",
            max: "10",
            // value:NewPassword
          }}
        ></Input>

        <div className="text-center d-flex justify-content-center">
          <button type="submit"> submit</button>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Profile;
