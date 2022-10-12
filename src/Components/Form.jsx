import React from "react";

const Form = () => {

  const submitData = (event) => {
    event.preventDefault()
    console.log("test");
  }
  return (
    <section className="mt-5">
      <form
        onSubmit={submitData}
        style={{ width: "400px" }}
        className=" mx-auto text-center"
      >
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Your name
          </label>
          <input type="text" className="form-control" id="nameInput" />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneInput" className="form-label">
            Your phone number
          </label>
          <input type="text" className="form-control" id="phoneInput" />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Your email
          </label>
          <input type="text" className="form-control" id="exampleInputEmail1" />
        </div>
        <div className="mb-3">
          <label htmlFor="hobbiesInput" className="form-label">
            Your hobbies
          </label>
          <input type="password" className="form-control" id="hobbiesInput" />
        </div>

        <button type="submit" className="btn btn-warning">
          Save
        </button>
      </form>
    </section>
  );
};

export default Form;
