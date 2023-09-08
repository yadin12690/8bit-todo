'use client'

import React from 'react'
import AddNewTaskButton from './components/AddNewTaskButton';
import { dotGothic16 } from '../../../fonts'
import NewTask from './components/NewTask';

export default function Dashboard() {

    return (
        <>
            <div className='flex justify-end flex-col w-full h-full py-20 px-20'>
                <h1 className={`${dotGothic16.className} text-white h-fit font-bold text-8xl text-center uppercase`}>Tasks dashboard</h1>
            </div>
            <AddNewTaskButton />
            <NewTask></NewTask>
        </>
    )
}
