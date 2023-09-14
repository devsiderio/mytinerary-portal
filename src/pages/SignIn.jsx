import { useRef, useEffect } from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import user_actions from "../store/actions/users";
import Swal from "sweetalert2";
const { signin } = user_actions;

export default function SignIn() {
  const navigate = useNavigate();
  const mail_signin = useRef("");
  const password_signin = useRef("");
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  function handleSignIn() {
    const emailValue = mail_signin.current.value;
    const passwordValue = password_signin.current.value;

    if (emailValue && passwordValue) {
      let data = {
        mail: emailValue,
        password: passwordValue,
      };

      dispatch(signin({ data }))
        .then((res) => {
          if (res.payload.token) {
            Swal.fire({
              icon: "success",
              title: "Logged in!",
            });
            navigate("/");
          } else if (res.payload.messages.length > 0) {
            let html = res.payload.messages
              .map((each) => `<p>${each}</p>`)
              .join("");
            Swal.fire({
              title: "Something went wrong!",
              icon: "error",
              html: res.payload.messages
                .map((each) => `<p>${each}</p>`)
                .join(""),
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      Swal.fire({
        title: "Error",
        text: "Please fill in both email and password fields.",
        icon: "error",
      });
    }
  }

  return (
    <div className="flex flex-grow justify-center items-center bg-signin">
      <form className="w-full text-center max-w-md p-4 my-16 bg-transparent backdrop-blur-sm  rounded-lg shadow-md">
        <h1 className="text-4xl text-white font-extrabold text-center mb-4">
          Sign In!
        </h1>
        <input
          ref={mail_signin}
          type="text"
          className="mb-4 px-4 py-2 w-full border rounded focus:ring focus:ring-blue-500"
          name="mail_signin"
          id="mail_signin"
          defaultValue=""
          placeholder="Mail"
        />
        <input
          ref={password_signin}
          type="password"
          className="mb-4 px-4 py-2 w-full border rounded focus:ring focus:ring-blue-500"
          name="password_signin"
          id="password_signin"
          defaultValue=""
          placeholder="Password"
        />
        <button
          type="button"
          className="mb-4 px-4 py-2 w-full bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:ring focus:ring-blue-400"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <p className="text-white">
          Don't you have an account?{" "}
          <Anchor
            className="text-white font-bold border p-1 rounded hover:bg-blue-600 focus:ring focus:ring-blue-400 cursor-pointer"
            to="/signup"
          >
            Sign up
          </Anchor>
        </p>
      </form>
    </div>
  );
}
