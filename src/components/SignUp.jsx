import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase.config";

const SignUp = () => {
    const [singUpError ,setSignUpError]=useState('');
    const [successAcount ,setSuccessAcount]=useState('');
    const [validationUsr ,setValidationUsr]=useState('');
  const handleSubmitSignUp = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if(password.length < 3){
        setValidationUsr('password must be 6 cherector');
        return ;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        setSuccessAcount('acoount create success full')


        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setSignUpError(errorCode ,errorMessage)
        // ..
      });

      setSignUpError('')
      setSuccessAcount('');
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">SignUp</h1>
          </div>
          <form
            novalidate=""
            action=""
            onSubmit={handleSubmitSignUp}
            className="space-y-12"
          >
            <div className="space-y-4">
              <div>
                <label for="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label for="password" className="text-sm">
                    Password
                  </label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-600"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
                {validationUsr && <p>{validationUsr}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                >
                  SignUp
                </button>
              </div>
              {successAcount && <p className="text-green-600">{successAcount}</p>}
              {singUpError && <p className="text-red-600">{singUpError}</p>}
              <p className="px-6 text-sm text-center dark:text-gray-600">
                Don't have an account yet?
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline dark:text-violet-600"
                >
                  Sign in
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
