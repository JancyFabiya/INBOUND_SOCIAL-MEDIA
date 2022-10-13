import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import PostSide from "../../components/PostSide/PostSide";
import ProfileSide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import Message from "../../components/Message/Message";
import { useSelector } from "react-redux";
import RightSearch from "../../components/RightSearch/RightSearch";
import { userChats } from "../../api/ChatRequest";
import ChatBox from "../../components/ChatBox/ChatBox";
import ChatUsers from "../../components/ChatUsers/ChatUsers";
import { io } from "socket.io-client";

const Chat = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  //  console.log('user',user);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [recieveMessage, setRecieveMessage] = useState(null);

  const socket = useRef();

  useEffect(() => {
    socket.current = io("http://localhost:8800");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  //sending message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);
  //receive Message from socket server
  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      setRecieveMessage(data);
    });
  }, []);
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

  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };
  return (
    <div className="Chat">
      <ProfileSide />
      <div className="Chat-container">
        <ChatBox
          chat={currentChat}
          currentUser={user._id}
          setSendMessage={setSendMessage}
          recieveMessage={recieveMessage}
        />
      </div>
      <div>
      <RightSearch />
      {/* <RightSide/> */}

      {/* <Message/> */}
      <div>
        <div className="msg">
        <h3>Message</h3>

          {chats.map((chat) => {
            // <div>
            return (
              <>
              <div
                className="conversation"
                onClick={() => setCurrentChat(chat)}
              >
                <ChatUsers
                  data={chat}
                  currentUserId={user._id}
                  online={checkOnlineStatus(chat)}
                />
                
              </div>
      <hr style={{ border: "0.1px solid " }} />
      </>
              // if (person._id !== user._id) {
              //   return <ChatUsers person={person} key={id} />;
              // }
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Chat;
