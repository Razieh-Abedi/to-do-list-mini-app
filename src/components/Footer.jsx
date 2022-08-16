import React from "react";
function Footer() {
    return (
      <div className="w-100 text-center">
        <footer className="bg-dark text-white text-center text-lg-start">
          <div className="container text-center p-4 pb-0">
            <form action="">
              <div className="row">
                <div className="col-auto mb-4 mb-md-0">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
  
                <div className="col-md-5 col-12 mb-4 mb-md-0">
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form5Example25"
                      className="form-control"
                    />
                    <label className="form-label" for="form5Example25">
                      Email address
                    </label>
                  </div>
                </div>
  
                <div className="col-auto mb-4 mb-md-0">
                  <button type="submit" className="btn btn-primary mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
  
          <div className="text-center p-3">
            © 2022 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">
              ToDoList.com
            </a>
          </div>
        </footer>
      </div>
    );
  }
  export default Footer;
