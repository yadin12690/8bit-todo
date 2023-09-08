'use client'

import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import cardImage from '../assets/task-card.png';
import Image from 'next/image'
import { dotGothic16, press_start_2P } from '../../../fonts'

export default function Dashboard() {

    const [newTask, setNewTask] = useState('Enter task content...');

    const divRef = useRef<HTMLDivElement | null>(null);

    // const addNewTask = (e: ChangeEvent<HTMLInputElement>) => {
    //     const newValue = e.target.value;
    //     setInputValue(newValue);
    // };

    const handleBlur = () => {
        if (divRef.current) {
            divRef.current.innerText = ""
            setNewTask(divRef.current.innerText);
        }
    }

    const handleClick = () => {
        if (divRef.current && divRef.current.innerText === 'Enter task content...') {
            // Clear the content when clicked if it's the default text
            divRef.current.innerText = '';
        }
    };




    return (
        <div className='flex justify-end flex-col w-full h-full py-20 px-20'>
            <h1 className={`${dotGothic16.className} text-white h-fit font-bold text-8xl text-center uppercase`}>Tasks dashboard</h1>
            <div className="card-container flex justify-end">
                <Image src={cardImage} alt="lofi-todo" width={500} height={500} />
                <div className="content-container flex justify-center items-center flex-col relative gap-2 top-40 right-[26rem] h-fit">
                    <div
                        ref={divRef}
                        onClick={handleClick}
                        suppressContentEditableWarning={true}
                        onBlur={handleBlur}
                        contentEditable={true}
                        className={`${press_start_2P.className} pixel-text-area text-xs lvl2 text-gray-500 overflow-auto min-w-[19rem] max-w-[19rem] min-h-[7rem] max-h-[7rem]`}>{newTask}</div>
                    <button className={`${press_start_2P.className} addNewTaskBtn text-black`} onClick={() => console.log(newTask)
                    }>Add new task</button>
                </div>
            </div>
        </div>
    )
}
