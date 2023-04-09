import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <Wrapper>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form>
              <h2>Log in</h2>

              <div className="inputbox" id="email">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="mail" required />
                <label htmlFor="">Email</label>
              </div>
              
              <div className="inputbox" id="password">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" required />
                <label htmlFor="">Password</label>
              </div>
              <div className="forget">
                <label htmlFor="">
                  <input type="checkbox" />
                  Remember Me
                  <Link className="forgot-password" to="/FPassword">
                    Forget Password
                  </Link>
                </label>
              </div>
              <button>Log in</button>
              <div className="register">
                <p>
                  Don't have an account?
                  <Link to="/SignUp"> Register</Link>
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
    box-sizing: border-box;
  }
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(
      to bottom right,
      #ee6055,
      #60d394,
      #aaf683,
      #ffc746,
      #ff9b85
    );
  }
  .form-box {
    position: relative;
    width: 90vw;
    max-width: 400px;
    height: auto;
    background: rgba(255, 255, 255, 0.8);
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    backdrop-filter: blur(15px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  h2 {
    font-size: 3rem;
    color: #000;
    text-align: center;
    margin-bottom: 2rem;
  }
  .inputbox {
    position: relative;
    margin: 1rem 0;
    width: 100%;
    border-bottom: 2px solid #000;
  }
  .inputbox label {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    color: #000;
    font-size: 1.3rem;
    pointer-events: none;
    transition: 0.4s;
  }
  input:focus ~ label,
  input:valid ~ label {
    top: -1.5rem;
    font-size: 1rem;
  }
  .inputbox input {
    width: 100%;
    height: 3rem;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    color: #000;
  }
  .inputbox ion-icon {
    position: absolute;
    right: 1rem;
    color: #000;
    font-size: 1.2rem;
    top: 1.5rem;
  }
  .forget {
    margin: -1rem 0 1rem 1rem;
    font-size: 1.1rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
    
    .forget label input {
    margin-right: 0.5rem;
    }
    .forget label a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    margin-left: 1rem;
    transition: 0.2s;
    }
    .forget label a:hover {
    text-decoration: underline;
    }
    button {
    width: 100%;
    height: 3rem;
    border-radius: 40px;
    background: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
    transition: 0.2s;
    }
    button:hover {
    background: #000;
    color: #fff;
    }
    .register {
    font-size: 0.9rem;
    color: #000;
    text-align: center;
    margin: 2rem 0 1rem;
    }
    .register p a {
    text-decoration: none;
    color: #000;
    font-weight: 600;
    margin-left: 0.5rem;
    transition: 0.2s;
    }
    .register p a:hover {
    text-decoration: underline;
    }
    
    /* Responsive styles */
    @media screen and (max-width: 768px) {
    h2 {
    font-size: 2rem;
    }
    .inputbox label {
    font-size: 1rem;
    }
    input {
    font-size: 0.9rem;
    }
    .forget {
    font-size: 1rem;
    }
    button {
    font-size: 1.1rem;
    }
    .register {
    font-size: 0.8rem;
    }
    }
    `;
    
    export default LogIn;