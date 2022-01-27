import axios from "axios";
import React, { useState } from "react";

const SingleRequestedPost = ({ blog }) => {
  console.log(blog);
  const { _id, email, date, title, status } = blog;

  const [openInput, setSetOpenInput] = useState(false);
  const [inputStatus, setInputStatus] = useState(status);

  const handleInput = (e) => {
    setInputStatus(e.target.value);
  };

  const handleCheck = (id) => {
    // console.log(id);
    setSetOpenInput(false);
    const modifiedData = { ...blog };
    modifiedData.status = inputStatus;
    axios.put(`http://localhost:5000/blogs`, modifiedData).then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <tr className="h-12">
        <td>{email}</td>
        <td>{title}</td>
        <td>{date}</td>
        <td className={` font-medium w-32`}>
          {openInput ? (
            <select
              onBlur={handleInput}
              defaultValue={status}
              className="border-2 border-green-500 outline-none"
            >
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
            </select>
          ) : (
            <h2>{inputStatus}</h2>
          )}
        </td>
        <td className="text-center">
          {openInput ? (
            <button onClick={() => handleCheck(_id)} className="text-red-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => {
                setSetOpenInput(true);
              }}
              className="text-green-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

export default SingleRequestedPost;
