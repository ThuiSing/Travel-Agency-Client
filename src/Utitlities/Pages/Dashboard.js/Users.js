import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [email, setEmail] = useState("");
  const [showErr, setShowErr] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let cancel = false;

    axios.get("https://serene-ocean-67383.herokuapp.com/users").then((res) => {
      if (cancel) return;
      setUsers(res.data);
    });
    return () => {
      cancel = true;
    };
  }, []);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMakeAdmin = () => {
    setShowErr("");
    const filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(email)) {
      axios
        .put(`https://serene-ocean-67383.herokuapp.com/users/${email}`)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            alert("Making Admin Successfully ");
            setShowErr("");
            const filter = users.find((user) => user.email === email);
            filter.role = "admin";
          }
        });
    } else {
      setShowErr("Please Enter validate Email !");
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-medium">Enter Email For Make him Admin</h2>
      <div className="md:w-3/4 flex mt-5 ">
        <input
          type="email"
          onBlur={handleEmail}
          className="p-3 w-full outline-none bg-white "
          placeholder="Enter Email"
        />
        <button
          onClick={handleMakeAdmin}
          className="bg-neutral-800 text-white  hover:bg-neutral-300 hover:text-neutral-900 w-56 py-3 transition-all"
        >
          Make Admin
        </button>
      </div>
      <h3 className="text-red-600 font-medium">{showErr}</h3>
      <div className="mt-5 border-t-2 border-neutral-400 pt-5">
        <h3 className="text-2xl font-medium">Show All User :</h3>
        <div className="mt-4">
          <table className="table-auto w-full text-center">
            <thead>
              <tr className="bg-neutral-800 text-white h-10">
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="h-9 text-medium">
                  <td className="font-semibold">{user.name}</td>
                  <td>{user.email}</td>
                  <td className="font-bold ">
                    {user?.role ? user.role : "Member"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
