'use client'

import React from 'react'
import { press_start_2P } from '../../../../fonts'
import { motion } from 'framer-motion'


export default function AddNewTaskButton() {

    return (
        <motion.div
            className={`${press_start_2P.className} text-black eightbit-btn flex justify-center m-auto w-fit items-center cursor-pointer`}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            whileTap={{ scale: 1.15 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }} >Start adding new task</motion.div>
    )
}
