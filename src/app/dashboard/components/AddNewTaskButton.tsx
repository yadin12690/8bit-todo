'use client'

import React from 'react'
import { press_start_2P } from '../../../../fonts'


export default function AddNewTaskButton() {

    return (
        <a href="javascript:void(0)" className={`${press_start_2P.className} text-black eightbit-btn flex justify-center m-auto w-fit items-center`}>Start adding new task</a>
    )
}
