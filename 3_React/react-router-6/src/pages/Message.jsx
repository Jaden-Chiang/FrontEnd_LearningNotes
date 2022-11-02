import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Message() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/message1">message001</NavLink>&nbsp;&nbsp;
                </li>
                <li>
                    <NavLink to="/message2">message002</NavLink>&nbsp;&nbsp;
                </li>
                <li>
                    <NavLink to="/message3">message003</NavLink>&nbsp;&nbsp;
                </li>
            </ul>
        </div>
    )
}
