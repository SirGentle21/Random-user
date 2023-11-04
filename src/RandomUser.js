import React, { useState } from "react";

import { Table } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";

const RandomUsers = () => {
    let navigate= useNavigate();

  let data = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemsPerPage] = useState(5);

  let dataLength = data.length / itemPerPage;

  const indexOfLastUser = currentPage * itemPerPage;
  const indexOfFirstUser = indexOfLastUser - itemPerPage;
  let count = indexOfFirstUser + 1;
  const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser);

//   console.log(currentUsers);
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= dataLength) {
      setCurrentPage(newPage);
    }
  };
  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(parseInt(newItemsPerPage, 10));
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  //   console.log(data);
  return (
    <div className="randomUser">
      <h1>Random Users table</h1>
      <br/>
      <div className="paginate">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === dataLength}
        >
          Next
        </button>
        <select onChange={(e) => handleItemsPerPageChange(e.target.value)}>
          <option value="5">Select users per page</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
      <Table striped bordered hover responsive="sm" size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Country</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody className="userRow">
          {currentUsers.map((user, index) => (
            <tr key={index} onClick={()=> navigate('/userDetails', {state:user})} >
              <td>{count++}</td>
              <td>{`${user.name.title} ${user.name.first} ${user.name.first}`}</td>
              <td>{user.location.country}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RandomUsers;
