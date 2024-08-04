import { IoSend } from "react-icons/io5";

const Input = () => {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="wrapper fixed bottom-0 px-2 pb-2 pt-1 flex justify-around gap-2 bg-base-100">
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full"></input>
                    <button className="btn btn-active btn-ghost"><IoSend fontSize={24} /></button>
                </div>
            </div>
        </>
    )
}

export default Input
