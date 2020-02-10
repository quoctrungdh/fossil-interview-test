import * as React from "react";

export default function Footer() {
    return (
        <footer className="mt-auto bg-primary-darkest text-white text-center font-light text-sm">
            <ul className="flex justify-center pb-4 pt-8">
                <li className="flex items-center" ><i className="inline-block mr-3 icon ion-md-pin text-xl"/>384 Hoang Dieu</li>
                <li className="flex items-center mx-3 px-3 border border-white border-t-0 border-b-0"><i className="inline-block mr-3 icon ion-md-call text-xl"/><a href="tel:+028 3826 8160">028 3826 8160</a></li>
                <li className="flex items-center" ><i className="inline-block mr-3 icon ion-md-mail text-xl"/><a href="mailto:phuong@fossil.com">phuong@fossil.com</a></li>
            </ul>
            <p className="border border-gray-800 py-4">&copy; Cong TY TNHH Fossil Viet Nam</p>
        </footer>
    )
}