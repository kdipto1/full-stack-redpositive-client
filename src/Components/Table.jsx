import React from "react";

const Table = ({ candidates }) => {
  console.log(candidates);
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
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
