import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userChats } from "../../api/ChatRequest";
import { getAllUsers } from "../../api/UserRequest";
import ChatUsers from "../ChatUsers/ChatUsers";
import LiveUser from "../LiveUser/LiveUser";
import "./Message.css";
const Message = () => {
  // const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);
  // console.log('user1',user)
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
        console.log("chat");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user]);
  console.log("44");
  console.log(chats);
  console.log(user._id);
  return (
    <div className="Message">
      <h3>Messages</h3>
      <div>
        {/* {chats.map((chat) => {
          <div>
            <LiveUser data= {chat}></LiveUser>
          </div>
          // if (person._id !== user._id) {
          //   return <LiveUser person={person} key={id} />;
          // }
        })} */}
      </div>
      <hr />
      <div>
        {chats.map((chat) => {
          // <div>
          return (
            <div className="conversation" onClick={() => setCurrentChat(chat)}>
              <ChatUsers data={chat} currentUserId={user._id} />
            </div>
            // if (person._id !== user._id) {
            //   return <ChatUsers person={person} key={id} />;
            // }
          );
        })}
      </div>
    </div>
  );
};

export default Message;
