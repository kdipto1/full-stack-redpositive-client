import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import UpdateModal from "./UpdateModal";

const Table = ({candidates,refetch}) => {
  // const [candidate, setCandidate] = useLocalStorage("candidates");
  // const candidates = props?.candidates;
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
  return (
    <div>
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
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
