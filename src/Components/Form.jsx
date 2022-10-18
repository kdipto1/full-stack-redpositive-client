import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Form = ({ refetch }) => {
  const submitData = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    const hobbies = event.target.hobbies.value;
    const candidate = { name, phone, email, hobbies };
    const url = `https://crud-redpositive.onrender.com/addCandidate`;
    await axios
      .post(url, candidate)
      .then((response) => {
        const { data } = response;
        console.log(data);
        if (data) {
          toast.success("Candidate added to database");
          refetch();
          event.target.name.value = "";
          event.target.phone.value = "";
          event.target.email.value = "";
          event.target.hobbies.value = "";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
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
          <input
            type="text"
            name="name"
            className="form-control"
            id="nameInput"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneInput" className="form-label">
            Your phone number
          </label>
          <input
            type="number"
            name="phone"
            className="form-control"
            id="phoneInput"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Your email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hobbiesInput" className="form-label">
            Your hobbies
          </label>
          <input
            type="text"
            name="hobbies"
            className="form-control"
            id="hobbiesInput"
            required
          />
        </div>

        <button type="submit" className="btn btn-warning">
          Save
        </button>
      </form>
    </section>
  );
};

export default Form;
