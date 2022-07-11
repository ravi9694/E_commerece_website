import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
  background: linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export default function Login() {
  return (
    <Section>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body px-5 py-5 text-center">
                <div className="my-1 mx-0">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-4">
                    Please enter your phone number and password!
                  </p>

                  <div className="form-floating  mb-3">
                    <input
                      type="email"
                      className="form-control bg-dark text-primary "
                      id="email"
                      placeholder=" "
                    />
                    <label for="floatingInput" className="text-light">
                      Phone number
                    </label>
                  </div>
                  <div className="form-floating  mb-3">
                    <input
                      type="password"
                      className="form-control bg-dark text-primary "
                      id="password"
                      placeholder=" "
                    />
                    <label for="floatingInput" className="text-light">
                      Password
                    </label>
                  </div>

                  <p className="small mb-5 pb-lg-2">
                    <a className="text-white-50" href="#!">
                      Forgot password?
                    </a>
                  </p>

                  <button
                    className="btn btn-outline-primary btn-lg px-5"
                    type="submit"
                  >
                    Login
                  </button>

                  <div className="d-flex justify-content-center text-center my-3 pt-1">
                    <Link to="/#" className="text-primary">
                      <i className="fa-brands fa-facebook"></i>
                    </Link>
                    <Link to="#!" className="text-primary">
                      <i className="fa-brands fa-twitter mx-4 px-2"></i>
                    </Link>
                    <Link to="#!" className="text-primary">
                      <i className="fa-brands fa-google fa-lg"></i>
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <Link to="/SignUp" className="text-white-50 fw-bold">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
