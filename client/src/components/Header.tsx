import * as React from "react";
import { NavLink } from "react-router-dom";

const MainLogo = require("../assets/main-logo.png");

export default function Header() {
    const itemClassname = "mr-8";
    const itemActiveClassname = "underline font-normal";
    return (
        <header className="bg-primary-darkest text-white font-light">
            <div className="mx-auto flex items-center justify-between wrapper">
                <img src={MainLogo} className="h-24" alt="main logo" />
                <ul className="flex uppercase">
                    <li className={itemClassname}><NavLink exact to="/" activeClassName={itemActiveClassname}>Home</NavLink></li>
                    <li className={itemClassname}><NavLink exact to="/order" activeClassName={itemActiveClassname}>Order</NavLink></li>
                    <li className={itemClassname}>Warehouse</li>
                    <li className={itemClassname}>Customer</li>
                    <li className={itemClassname}>System</li>
                    <li className={itemClassname}>Notification</li>
                </ul>
                <span className="py-1 px-3 rounded flex items-center bg-primary-darker capitalize text-sm cursor-pointer">
                    <img className="h-8 rounded-full mr-3" src="https://randomuser.me/api/portraits/women/17.jpg" alt="user profile photo" />
                    john doe
                </span>
            </div>
        </header>
    )
}