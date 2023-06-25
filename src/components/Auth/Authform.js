import { useState } from "react";
import Input from "../UI/Input";
const Authform = () => {
  const [islogin, setislogin] = useState(true);
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
          } else {
            throw Error(data.error.message);
          }
        } catch (error) {
          console.log(error);
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
                  className=" border-0 my-1"
                  onClick={switchAuthModeHandler}
                >
                  {islogin ? "create new account " : "login with same account"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authform;
