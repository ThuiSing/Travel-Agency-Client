import React from "react";

const SingleRequestedPost = ({ blog, handleApprove }) => {
  const { _id, email, date, title, status } = blog;

  return (
    <>
      <tr className="h-12">
        <td>{email}</td>
        <td>{title}</td>
        <td>{date}</td>
        <td>{status}</td>
        <td>
          <button
            onClick={() => handleApprove(_id)}
            className="bg-neutral-700 text-white px-2"
          >
            Approve Now
          </button>
        </td>
      </tr>
    </>
  );
};

export default SingleRequestedPost;
