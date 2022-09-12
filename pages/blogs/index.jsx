import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlog, getBlogApi } from "../../redux/Reducers/blogReducer";

export default function AllBlogs() {
  const { arrBlog } = useSelector((state) => state.blogReducer);
  const dispatch = useDispatch();

  const getAllBlog = () => {
    const actionthunk = getBlogApi();
    dispatch(actionthunk);
  };

  React.useEffect(() => {
    getAllBlog();
  }, []);

  const renderBlog = () => {
    return arrBlog.map((blog) => {
      return (
        <div className="col-4 mt-4" key={blog.id}>
          <div className="card" style={{ width: "18rem", height: "450px" }}>
            <img src={`https://picsum.photos/id/${blog.userId}/300/300`} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Blog</h1>
      <div className="row">{renderBlog()}</div>
    </div>
  );
}
