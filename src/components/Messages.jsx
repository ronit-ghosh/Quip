import { FaUserCircle } from "react-icons/fa";
import { userAuth } from "../context/AuthContext";

const Messages = (props) => {
    const { text, uid, username, keyId } = props;
    const { currentUser } = userAuth();

    return (
        <>
            <div key={keyId} className={`wrapper chat px-2 ${uid === currentUser.uid ? "chat-end" : "chat-start"}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <FaUserCircle fontSize={38} color="#7480ff" />
                    </div>
                </div>
                <div className="chat-header ml-2 mb-1 font-medium capitalize">{username}</div>
                <div className="chat-bubble">{text}</div>
            </div>
        </>
    )
}

export default Messages
