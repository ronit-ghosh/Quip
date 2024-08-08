import { useEffect, useState } from "react";
import Input from "../components/Input";
import Messages from "../components/Messages";
import Navbar from "../components/Navbar";
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from "../config/firebase";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("creationTime"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgArr = [];
      querySnapshot.forEach((doc) => {
        msgArr.push({ ...doc.data(), uid: doc.data().uid, keyId: doc.id, username: doc.data().username });
      })
      setMessages(msgArr);
    })
    return () => unsubscribe
  }, []);

  return (
    <>
      <Navbar />
      <div className="wrapper mt-20 mb-20 pt-2">
        {messages.map((msg) => <Messages key={msg.keyId} text={msg.text} username={msg.username} uid={msg.uid} />)}
      </div>
      <Input />
    </>
  )
}

export default Chat
