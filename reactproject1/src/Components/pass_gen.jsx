import '../index.css'
import { useState } from 'react'
import { useCallback, useEffect, useRef } from 'react';



function Pass() {
    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, SetCharAllowed] = useState(false);
    const [Password, setPassword] = useState("");
    // use ref hooh
    const passwordRef = useRef(null)

     
    const PasswordGen = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numAllowed) str += "0123456789"
        if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)

        }
        setPassword(pass);
    },
        [length, numAllowed, charAllowed, setPassword]);

    const cpPass = useCallback(() => {
        passwordRef.current?.select()
        window.navigator.clipboard.writeText(Password)
    }, [Password])

    

    useEffect(() => {
        PasswordGen();
    }, [length, numAllowed, charAllowed, PasswordGen])

  

    return (
        <>
            <h1 className="text-4xl text-center text-white">Password</h1>
            <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 text-orange-500 my-8
                shadow-md bg-gray">
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input value={Password}
                        type='text'
                        className='outline-none w-full py-1 px-3'
                        placeholder="password"
                        readOnly
                        ref={passwordRef}>
                    </input>
                    <button className="bg-blue-700 mx-2 rounded-lg pd-3" onClick={cpPass }>
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