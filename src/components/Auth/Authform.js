import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from "../UI/Input";
import { useGlobalHook } from "../Store/Contex_provider";
import { useNavigate } from "react-router-dom";
const Authform = () => {
  const navigate = useNavigate();
  const ctx = useGlobalHook();
  const [islogin, setislogin] = useState(true); // this is for to show the page user have account or not
  const switchAuthModeHandler = (e) => {
    e.preventDefault();
    setislogin((prevState) => !prevState);
  };
  

  const submitHandler = (e) => {
    e.preventDefault();
    var email = e.target.Email.value;
    var pass = e.target.Password.value;

    if (islogin) {
      //
      const check = async () => {
        try {
          const res = await fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBXXXskQKXF37sbqFTrxdIK7I3juj9VgxI",
            {
              method: "POST",
              body: JSON.stringify({
                email: email,
                password: pass,
                returnSecureToken: true,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const data = await res.json();
            console.log("uset",data)
            var mail = data.email.replace("@", "");
               mail=data.email.replace(".", "")
            ctx.login(data.idToken ,mail)

          if (res.ok) {
            
            toast.success("Login successful!");
            navigate("/home");

          } else {
            throw Error(data.error.message);
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      };
      check();
    } else {
      const create = async () => {
        try {
          const res = await fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBXXXskQKXF37sbqFTrxdIK7I3juj9VgxI",
            {
              method: "POST",
              body: JSON.stringify({
                email: email,
                password: pass,
                returnSecureToken: true,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const data = await res.json();
          console.log(data);

          if (res.ok) {
            console.log("done");
            toast.success("Create account successful!");
          } else {
            throw Error(data.error.message);
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      };
      create();
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" col-12  col-md-6  mx-auto">
            <h1 className="text-center">{islogin ? "Login" : "Sign up"}</h1>

            <form
              className="form-control bg-secondary "
              onSubmit={submitHandler}
            >
              <Input
                label={"Email"}
                name={"Email"}
                input={{
                  type: "email",
                  require: "",
                }}
              ></Input>
              <Input
                label={"Password"}
                name={"Password"}
                input={{
                  type: "password",
                  require: "",
                }}
              ></Input>
              <div
                style={{ flexDirection: "column" }}
                className=" d-flex justify-content-center align-items-center my-1"
              >
                <button type="submit">
                  {islogin ? "login " : "Create Account"}
                </button>
                <button
                  className=" border-0 my-1 "
                  style={{ backgroundColor: "transparent" }}
                  onClick={switchAuthModeHandler}
                >
                  {islogin ? "create new account " : "login with same account"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Authform;
