import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <main style={{padding: "120px 0"}}>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default HomeLayout;
