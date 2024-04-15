import '../index.css'
import { useState } from 'react'
import { useCallback } from 'react';



function Pass() {
    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, SetCharAllowed] = useState(false);
    const [Password, setPassword] = useState("");

    const PasswordGen = useCallback(() => {
        let pass = ''
        let str = 'qwertyuiopasdfghjjkklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
        if (numAllowed) str += '1234567890';
        if (charAllowed) str += '!@#$%^&*(){}[]<>?'
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random * str.length + 1);
            pass += str.charAt(char)
        }
    },
   [length, numAllowed, charAllowed, setPassword]);

    return (
        <>
            <h1 className="text-4xl text-center text-white">Password</h1>
            <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 text-orange-500 my-8
                shadow-md bg-gray">test</div>
        </>
    )
}

export default Pass