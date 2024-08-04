import Input from "../components/Input"
import Messages from "../components/Messages"
import Navbar from "../components/Navbar"

const Chat = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper overflow-y-scroll pt-14 pb-[6rem]">
        <Messages />
        <Messages />
        <Messages />
        <Messages />
        <Messages />
        <Messages />
        <Messages />
        <Messages />
      </div>
      <Input />
    </>
  )
}

export default Chat
