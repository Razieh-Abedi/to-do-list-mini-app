import React from "react";
function AddToList() {
    return (
      <div>
        <section className="py-5 bg-light mb-5">
          <div className="container d-flex flex-column align-items-center">
            <h1 className="">Welcome!</h1>
            <p className="lead text-muted">
              To get started, add some items to your list:
            </p>
  
            <form className="">
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control mx-sm-3"
                  placeholder="I want to do ..."
                />
                <button className="btn btn-primary">add</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
  export default AddToList;