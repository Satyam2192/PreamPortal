import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // first handle submitt here

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    const formData = {
      firstName,
      lastName,
      email,
      verificationCode,
      password,
      confirmPassword,
    };

    // Perform validation here
    let errors = [];
    if (firstName.trim() === "") {
      errors.push("First name is required");
    }
    if (lastName.trim() === "") {
      errors.push("Last name is required");
    }
    if (email.trim() === "") {
      errors.push("Email is required");
    }
    if (verificationCode.trim() === "") {
      errors.push("Verification code is required");
    }
    if (password.trim() === "") {
      errors.push("Password is required");
    }
    if (confirmPassword.trim() === "") {
      errors.push("Confirm password is required");
    }
    if (password !== confirmPassword) {
      errors.push("Passwords do not match");
    }

    if (errors.length > 0) {
      // Display error message to the user
      console.log(errors);
    } else {
      // Form data is valid, continue with form submission
      console.log(formData);

      // Send form data to the server using fetch or axios
      fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          // Handle response from the server
          if (res.ok) {
            // Redirect the user to the login page
            history.push("/login");
          } else {
            // Display error message to the user
            console.log("An error occurred");
          }
        })
        .catch((err) => console.error(err));
    }

    fetch("./SignUp", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // Handle response from the server
      })
      .catch((err) => console.error(err));

    const navigate = useNavigate();

    if (res.ok) {
      // Redirect to the login page/dashboard
      navigate("/login");
    } else {
      // Display error message to the user
      navigate("./Error");
    }
  };

  // ...

  return (
    <Wrapper>
      <section>
        <div class="form-box">
          <div class="form-value">
            <form
              // action="/myaction.php"
              // name="myForm"
              onSubmit={handleSubmit}
              // method="post"
            >
              <h2>Sign Up</h2>
              <div class="inputbox" id="password1">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <label for="fname">First Name</label>
              </div>

              {/* <div class="inputbox" id="password2">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="text" name="fname" id="fname" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                <label for="">Last Name</label>
              </div> */}

              <div class="inputbox" id="password3">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  type="text"
                  required
                  name="lname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <label for="">Last Name</label>
              </div>

              <div class="inputbox" id="email">
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="mail"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label for="">Email</label>
              </div>

             

              <div class="inputbox" id="password">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label for="">Create Password</label>
              </div>

              <div class="inputbox" id="password">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label for="">Conform Password</label>
              </div>

              <button>Sign Up</button>
              <div class="register">
                <p>
                  Already have a account
                  <Link to="/LogIn"> Log In</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
  * {
    margin: 0;
    padding: 0;
    font-family: "poppins", sans-serif;
  }
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;

    background: #f9c5d1; /* set the background color to pinkish */
    background-image: url("https://img.freepik.com/free-vector/elegant-valentine-background-with-lighting-effect_1340-4358.jpg?w=740&t=st=1681019339~exp=1681019939~hmac=afb49d407bf6d59eb41d3ac2590b4f7d21a3619f785009e3d46d144b1688d10e"); /* add heart images as background */
    background-repeat: repeat-y; /* repeat the background image vertically */
    background-size: 100px; /* set the size of the background image */
    animation: moveHearts 10s linear infinite; /* animate the background image */
  
    @keyframes moveHearts {
      0% {
        background-position: 0 0; /* start the animation from top */
      }
      100% {
        background-position: 0 -2000px; /* move the background image up by 2000px */
      }
    }

    background-position: center;
    background-size: cover;
  }

  // @keyframes backgroundColorPalette {
  //   0% {
  //     background: #ee6055;
  //   }
  //   25% {
  //     background: #60d394;
  //   }
  //   50% {
  //     background: #aaf683;
  //   }
  //   75% {
  //     background: #ffc746;
  //   }
  //   100% {
  //     background: #ff9b85;
  //   }
  // }

  // body {
  //   animation-name: backgroundColorPalette;
  //   animation-duration: 60s;
  //   animation-iteration-count: infinite;
  //   animation-direction: alternate;
  // }

  .form-box {
    position: relative;
    width: 400px;
    height: 700px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    backdrop-filter: blur(15px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-size: 4em;
    color: #fff;
    text-align: center;
  }
  .inputbox {
    position: relative;
    margin: 30px 0;
    width: 310px;
    border-bottom: 2px solid #fff;
  }
  .inputbox label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    color: #fff;
    font-size: 1.3em;
    pointer-events: none;
    transition: 0.4s;
  }
  input:focus ~ label,
  input:valid ~ label {
    top: -5px;
  }
  .inputbox input {
    width: 100%;
    height: 50px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    padding: 0 35px 0 5px;
    color: #fff;
  }
  .inputbox ion-icon {
    position: absolute;
    right: 8px;
    color: #fff;
    font-size: 1.2em;
    top: 20px;
  }
  .forget {
    margin: -15px 0 15px 5px;
    font-size: 1.1em;
    color: #fff;
    display: flex;
    /
    justify-content: space-between;
  }

  .forget label input {
    margin-right: 3px;
  }
  .forget label a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1em;
    margin-left: 95px;
  }
  .forget label a:hover {
    text-decoration: underline;
  }
  button {
    width: 100%;
    height: 40px;
    border-radius: 40px;
    background: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.9em;
    font-weight: 600;
  }
  .register {
    font-size: 0.9em;
    color: #fff;
    text-align: center;
    margin: 25px 0 10px;
  }
  .register p a {
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    margin-left: 10px;
  }
  .register p a:hover {
    text-decoration: underline;
  }
`;

export default SignUp;
