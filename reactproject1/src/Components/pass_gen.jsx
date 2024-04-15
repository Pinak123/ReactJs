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
            let char = Math.floor(Math.random * length + 1);
            pass += str.charAt(char)
        }
    },
   [length, numAllowed, charAllowed, setPassword]);

    return (
        <>
            <h1 className="text-4xl text-center text-white">Password</h1>
            <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 text-orange-500 my-8
                shadow-md bg-gray">
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input value={Pass}
                        type='text'
                        className='outline-none w-full py-1 px-3'
                        placeholder="password"
                        readOnly></input>
                    <button className="bg-blue-700 mx-3 rounded-lg pd-1">
                        copy
                    </button>
                </div>
                <div className="flex text-sm gap-x-2">
                    <div className="flex item-center gap-x-1">
                        <input type="range" className="cursor-pointer" min={6} max={100}
                            onChange={(e) => {
                                setLength(e.target.value)
                            } }
                        >

                        </input>
                        <label>length :{length}</label>

                    </div>
                    <div className="flex item-center gap-x-1 mx-2">
                        <input type="checkbox"
                            defaultChecked={numAllowed}
                            id='numInput'
                            onChange={() => {
                                setNumAllowed((prev) => !prev);
                            }}></input>
                        <label htmlFor="numInput">Numbers</label>
                    </div>
                    <div className="flex item-center gap-x-1 mx-2">
                        <input type="checkbox"
                            defaultChecked={charAllowed}
                            id='charInput'
                            onChange={() => {
                                SetCharAllowed((prev) => !prev);
                            }}></input>
                        <label htmlFor="charInput">Characters</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pass