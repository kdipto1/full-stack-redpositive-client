import axios from "axios";
import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const UpdateModal = (props) => {
  const candidate = props?.candidate;
  const id = props?.candidate._id;
  const refetch = props.refetch();
  //
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //

  const updateCandidate = async (event) => {
    event.preventDefault();
    const name = event?.target.name.value;
    const phone = event?.target.phone.value;
    const email = event?.target.email.value;
    const hobbies = event?.target.hobbies.value;
    const candidate = { name, phone, email, hobbies };
    console.log(candidate);
    const url = `https://crud-redpositive.onrender.com/updateCandidates/${id}`;
    await axios
      .put(url, candidate)
      .then((response) => {
        const { data } = response;
        // console.log(data);
        if (data) {
          refetch();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={updateCandidate}
            style={{ width: "400px" }}
            className=" mx-auto text-center"
          >
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">
                Your name
              </label>
              <input
                defaultValue={candidate.name}
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
                defaultValue={candidate.phone}
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
                defaultValue={candidate.email}
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
                defaultValue={candidate.hobbies}
                type="text"
                name="hobbies"
                className="form-control"
                id="hobbiesInput"
                required
              />
            </div>
            <Modal.Footer>
              <button type="submit" className="btn btn-warning">
                Save
              </button>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateModal;
