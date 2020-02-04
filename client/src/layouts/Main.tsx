import * as React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout(props) {
    return (
        <main>
            <Header />
            {props.children}
            <Footer />
        </main>
    )
}