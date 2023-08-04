import React from "react";

function Users(props) {
  let { img, uname, email } = props;
  return (
    <>
      <div className="col-md-4 sss">
        <div
          className="card mt-2 ml-4 mr-2"
          style={{ width: "10 rem", height: "10 rem" }}
        >
          <img className="card-img-top" src={img} alt={uname} />
          <div className="card-body">
            <h2 className="card-text">
              <b>User Name: </b>
              {uname}
            </h2>
            <h3 className="card-text">
              <b>Email: </b>
              {email}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
export default Users;
