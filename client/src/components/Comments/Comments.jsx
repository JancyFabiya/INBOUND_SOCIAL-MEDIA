import React from "react";

const Comments = (snd,d) => {
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div>
      <img
        src={
          snd.senderId.profilePicture
            ? serverPublic + snd.senderId.profilePicture
            : serverPublic + "defaultProfile.png"
        }
        alt=""
        className="senImg"
        key={d}
      />
      <div className="sname">
        <span>{snd.senderId.firstname}</span>
      </div>
      <div className="commands">
        <span>{snd.text}</span>
      </div>
      {/* {command.map((cmd,e)=>{
                    <div className="cnd">
                        <span>{cmd.text}</span>
                    </div>
                    })} */}
    </div>
  );
};

export default Comments;
