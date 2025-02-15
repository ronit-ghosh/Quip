import { Navigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

export const ChatroomRoute = ({ children }) => {

   const { currentUser } = userAuth();

   if (!currentUser) {
      return <Navigate to="/" replace={true} />
   }
   return children;
}
