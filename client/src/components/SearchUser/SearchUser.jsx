import React from "react";
import { Link } from "react-router-dom";

const SearchUser = ({ Suser }) => {
  console.log("@@@", Suser[0]);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      {Suser[0] == undefined ? (
        <h4>No result</h4>
      ) : (
        <div className="notification">
          <div>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`/friendProfile/${Suser[0]._id}`}
            >
              <img
                src={
                  Suser[0].profilePicture
                    ? serverPublic + Suser[0].profilePicture
                    : serverPublic + "defaultProfile.png"
                }
                alt=""
                className="followerImg"
              />
            </Link>
            <div className="name">
              <span>{Suser[0].firstname}</span>
            </div>
          </div>
          <div className="butdiv">
            {/* <button
          className={
            following ? "button fc-button UnfollowButton" : "button fc-button"
          }
          onClick={handleFollow}
        >
          {following ? "Unfollow" : "Follow"}
        </button> */}
            {/* <button className="button-dec">Decline</button> */}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchUser;
