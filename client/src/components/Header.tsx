import * as React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <span>Fossil</span>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/order">Order</NavLink></li>
                <li>Warehouse</li>
                <li>Customer</li>
                <li>System</li>
                <li>Notification</li>
            </ul>
            <span>Me</span>
        </header>
    )
}