import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { userAuth } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";

const Input = () => {
    const [value, setValue] = useState('');
    const { currentUser } = userAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        if (value === "") {
            return
        }
        try {
            const { uid, email } = currentUser
            const docData = {
                text: value,
                creationTime: serverTimestamp(),
                uid,
                username: email.split('@')[0].toLowerCase()
            }
            await addDoc(collection(db, "messages"), docData);
        } catch (error) {
            console.log(error);
        }
        setValue('');
    }

    return (
        <>
            <div className="flex justify-center items-center">
                <div className="wrapper fixed bottom-0 px-2 pb-2 pt-1 flex justify-around gap-2 bg-base-100">
                    <form onSubmit={handleSubmit} className="wrapper fixed bottom-0 px-2 pb-2 pt-1 flex justify-around gap-2 bg-base-100">
                        <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-primary w-full"></input>
                        <button className="btn btn-active btn-ghost"><IoSend fontSize={24} /></button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Input
