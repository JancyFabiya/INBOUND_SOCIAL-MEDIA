import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../api/UserRequest";
import ChatUsers from "../ChatUsers/ChatUsers";
import LiveUser from "../LiveUser/LiveUser";
import "./Message.css";
const Message = () => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUsers();
      console.log("111", data);
      setPersons(data);
    };
    fetchPersons();
  }, []);
  return (
    <div className="Message">
      <h3>Messages</h3>
      <div>
        {persons.map((person, id) => {
          if (person._id !== user._id) {
            return <LiveUser person={person} key={id} />;
          }
        })}
      </div>
      <hr />
      <div>
      {persons.map((person, id) => {
          if (person._id !== user._id) {
            return <ChatUsers person={person} key={id} />;
          }
        })}
      </div>
    </div>
  );
};

export default Message;
