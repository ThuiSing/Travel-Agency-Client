import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const MyPost = () => {
  const [post, setPost] = useState([]);
  const [loader, setLoader] = useState(true);
  const { user } = useAuth();
  useEffect(() => {
    setLoader(true);
    axios
      .get(`https://serene-ocean-67383.herokuapp.com/blogs/${user.email}`)
      .then((res) => {
        // console.log(res);
        setLoader(false);
        setPost(res.data);
      })
      .finally(() => setLoader(false));
  }, []);

  //delete
  const handleCancel = (id) => {
    const cancelConfirm = window.confirm("Are you sure to cancel your Order?");
    cancelConfirm &&
      axios
        .delete(`https://serene-ocean-67383.herokuapp.com/blogs/${id}`)
        .then((res) => {
          if (res.data.deletedCount >= 0) {
            alert("successfully Canceled");
            const exist = post.filter((order) => order._id !== id);
            setPost(exist);
          }
        });
  };

  const statusStyle = (status) => {
    if (status === "pending") {
      return "bg-red-200 text-red-600";
    } else if (status === "approved") {
      return "bg-green-200 text-green-600";
    }
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold">My post's</h2>
      {loader ? (
        <div className="w-full flex justify-center items-center">
          <img
            className="w-20"
            src="https://i0.wp.com/www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif"
            alt=""
          />
        </div>
      ) : (
        <div className="grid md:grid-cols-2">
          {post.map((data) => (
            <div key={data._id} className="flex items-center border">
              <div className="border-r w-1/3">
                <img src={`data:image/jpeg;base64,${data?.img}`} alt="" />
              </div>
              <div className="w-2/3 space-y-2 p-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-medium">{data?.title}</h2>
                  <span className={`${statusStyle(data.status)} px-2 py-1`}>
                    {data.status}
                  </span>
                </div>
                <h2 className="text-md text-gray-600">
                  {data?.description.slice(0, 100)}..
                </h2>
                <h5>Post Date: {data?.date}</h5>

                <div>
                  <button
                    onClick={() => handleCancel(data._id)}
                    className="text-red-800 bg-red-300 px-5 py-2 font-medium hover:bg-white hover:text-red-800 transition-all"
                  >
                    Cancel
                  </button>
                  <Link to={`/dashboard/manage-post/${data._id}`}>
                    <button className=" ml-5 text-green-800 bg-green-300 px-5 py-2 font-medium hover:bg-white hover:text-green-800 transition-all">
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPost;
