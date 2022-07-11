import { Link } from "react-router-dom";
import styled from "styled-components";

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

export default function SignUp() {
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
                  <h2 className="fw-bold mb-2 text-uppercase">SignUp</h2>
                  <p className="text-white-50 mb-4">
                    Please set your password!
                  </p>

                  <div className="form-floating  mb-3">
                    <input
                      type="email"
                      className="form-control bg-dark text-primary "
                      id="email"
                      placeholder=" "
                    />
                    <label htmlFor="floatingInput" className="text-light">
                      Phone number
                    </label>
                  </div>
                  <form className="form-floating  mb-3">
                    <input
                      type="password"
                      className="form-control bg-dark text-primary "
                      id="password"
                      placeholder=" "
                    />
                    <label htmlFor="floatingInput" className="text-light">
                      Password
                    </label>
                  </form>
                  <form className="form-floating  mb-3">
                    <input
                      type="password"
                      className="form-control bg-dark text-primary "
                      id="ReEnterpassword"
                      placeholder=" "
                    />
                    <label htmlFor="floatingInput" className="text-light">
                      Re-enter Password
                    </label>
                  </form>

                  <button
                    className="btn btn-outline-primary btn-lg px-5"
                    type="submit"
                  >
                    SignUp
                  </button>

                  <div className="d-flex justify-content-center text-center my-3 pt-1">
                    <a href="#!" className="text-primary">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#!" className="text-primary">
                      <i className="fa-brands fa-twitter mx-4 px-2"></i>
                    </a>
                    <a href="#!" className="text-primary">
                      <i className="fa-brands fa-google fa-lg"></i>
                    </a>
                  </div>
                </div>

                <div>
                  <p className="mb-0">
                    have an account?{" "}
                    <Link to="/login" className="text-white-50 fw-bold">
                      Login
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
