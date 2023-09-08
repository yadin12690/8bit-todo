import React from 'react'
import { TextInput } from "@tremor/react";
import cardContent from '../assets/task-card.png';
import Image from 'next/image'
import { dotGothic16, press_start_2P } from '../../../fonts'




export default function Home() {

    return (
        <div className='flex justify-end flex-col w-full h-full py-20 px-20'>
            <h1 className={`${dotGothic16.className} text-white h-fit font-bold text-8xl text-center uppercase`}>Tasks dashboard</h1>
            <div className="card-container flex justify-end">
                <Image src={cardContent} alt="lofi-todo" width={500} height={500} />
                <div className="container">
                    <button className={`${press_start_2P.className} addNewTaskBtn text-black`}>Add new task</button>
                </div>
            </div>
        </div>
    )
}
