const Messages = () => {
    return (
        <>
            <div className="wrapper chat chat-start px-2">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div className="chat-header">
                    User 1
                </div>
                <div className="chat-bubble">You were the Chosen One!</div>
            </div>
            <div className="wrapper chat chat-end px-2">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div className="chat-header">
                    User 2
                </div>
                <div className="chat-bubble">I hate you!</div>
            </div>
        </>
    )
}

export default Messages
