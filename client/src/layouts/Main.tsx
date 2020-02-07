import * as React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

interface MainLayoutInterface {
    children: React.ReactNode
}

export default function MainLayout(props: MainLayoutInterface) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    )
}