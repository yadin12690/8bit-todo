'use client'


import React, { ChangeEvent, useRef, useState } from 'react'
import cardImage from '../assets/task-card.png';
import Image from 'next/image'
import { dotGothic16, press_start_2P } from '../../../fonts'




export default function Dashboard() {
    const [inputValue, setInputValue] = useState('');
    const userTask = useRef<HTMLInputElement | null>(null);

    const addNewTask = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
    };

    return (
        <div className='flex justify-end flex-col w-full h-full py-20 px-20'>
            <h1 className={`${dotGothic16.className} text-white h-fit font-bold text-8xl text-center uppercase`}>Tasks dashboard</h1>
            <div className="card-container flex justify-end">
                <Image src={cardImage} alt="lofi-todo" width={500} height={500} />
                <div className="content-container flex justify-center items-center flex-col relative gap-2 top-40 right-[26rem] h-fit">
                    <div className={`${press_start_2P.className} pixel-text-area text-xs lvl2 text-gray-500`}><input ref={userTask} placeholder="Enter task content..." /></div>
                    <div className="button-container">
                        <button className={`${press_start_2P.className} addNewTaskBtn text-black`}>Add new task</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
