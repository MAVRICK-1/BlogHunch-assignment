import React, { useState } from "react";

const FloatingButtonForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="floating-button-container">
      <button className="floating-button" onClick={toggleForm}>
        +
      </button>
      {isFormOpen && (
        <div className="form-container">
          <form>
            <div className="form-group">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Product Name</label>
                <input type="text" className="form-control fs-6" id="exampleFormControlInput1" placeholder=""/>
              </div>
            </div>
            <div className="form-group">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Product Company</label>
                <input type="text" className="form-control fs-6" id="exampleFormControlInput1" placeholder=""/>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" maxLength="3"/>
                <span className="input-group-text">.00</span>
              </div>
            </div>
            <div className="form-group mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
              Product Description
              </label>
              <textarea
                className="form-control form-group fs-6"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="col-12">
              <button type="submit" className="btn btn-dark">Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default FloatingButtonForm;
