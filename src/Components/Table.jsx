import axios from "axios";
import React from "react";
import SendData from "./SendData";
import UpdateModal from "./UpdateModal";

const Table = ({ candidates, refetch }) => {
  if (!candidates) {
    return (
      <div className="">
        <h2>Loading......</h2>
      </div>
    );
  }
  // console.log(props);
  const addToLocal = (candidate) => {
    let data = JSON.stringify(candidate);
    localStorage.setItem("candidates", data);
    // setCandidate(candidate);
    // console.log(JSON.parse(localStorage.getItem("candidates")));
  };
  // ++++++++++++++++++++++++++++ Delete candidate function
  const handleDelete = async (id) => {
    const url = `http://localhost:3000/deleteCandidate/${id}`;
    try {
      const { data } = await axios.delete(url);
      // console.log(data);
      if (data) {
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="mt-5">
      <SendData/>
      <table className="table table-warning">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Select</th>
            <th scope="col">Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col">Hobbies</th>
            <th scope="col">Update/Delete</th>
          </tr>
        </thead>
        {candidates?.map((candidate, index) => {
          return (
            <tbody key={candidate?._id}>
              <tr>
                <th scope="row">{index}</th>
                <td>
                  <input
                    onClick={() => addToLocal(candidate)}
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    // id="flexCheckDefault"
                  />
                </td>
                <td>{candidate.name}</td>
                <td>{candidate.phone}</td>
                <td>{candidate.email}</td>
                <td>{candidate.hobbies}</td>
                <td>
                  <UpdateModal
                    candidate={candidate}
                    key={candidate._id}
                    refetch={refetch}
                  />
                  <button
                    className="btn btn-danger ms-1"
                    onClick={() => handleDelete(candidate._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </section>
  );
};

export default Table;
