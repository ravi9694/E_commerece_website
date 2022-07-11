export default function Footer() {
  return (
    <footer className="bg-dark text-primary">
      <div className="container py-5">
        <div className="row py-3">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <img src="img/logo.png" alt="" width="180" className="mb-3" />
            <p className="font-italic text-white">
              You can also follow us on these platforms
            </p>
            <ul className="list-inline mt-4 ">
              <li className="list-inline-item me-5">
                <a href="/" target="_blank" title="twitter">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item me-5">
                <a href="/" target="_blank" title="facebook">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item me-5">
                <a href="/" target="_blank" title="instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item me-5">
                <a href="/" target="_blank" title="pinterest">
                  <i className="fa-brands fa-pinterest"></i>
                </a>
              </li>
              <li className="list-inline-item me-5">
                <a href="/" target="_blank" title="vimeo">
                  <i className="fa-brands fa-vimeo"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* Shop */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Shop</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="/" className="text-white text-decoration-none">
                  For Women
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white text-decoration-none">
                  For Men
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white text-decoration-none">
                  Stores
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white text-decoration-none">
                  Our Blog
                </a>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="/" className="text-white text-decoration-none">
                  Login
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white text-decoration-none">
                  Register
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white text-decoration-none">
                  Wishlist
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white text-decoration-none">
                  Our Products
                </a>
              </li>
            </ul>
          </div>
          {/* NewsLetter */}
          <div className="col-lg-4 col-md-6 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
            <p className="text-white mb-4">
              Enter your email id for updates on your favourite products
            </p>
            <div className="p-1 rounded border">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  aria-describedby="button-addon1"
                  className="form-control border-0 shadow-0"
                />
                <div className="input-group-append">
                  <button
                    id="email-submit"
                    type="submit"
                    className="btn btn-link"
                  >
                    <i className="fa fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary py-4">
        <div className="container text-center">
          <p className="text-white mb-0 py-2">
            © 2022 Monsoon All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
