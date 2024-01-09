import React from 'react'
import Angle from '../assets/group-2.png'


export default function Footer (){

    return (
        <footer>
            <div>
            <button className='btn back-btn'>Back</button>
            </div>
            <div>
            <button className='btn next-btn'><span>Next</span> <img src={Angle}/></button>
            </div>
        </footer>
    )
}