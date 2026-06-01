
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import React from "react";

interface CommonLayoutProps {
    children: React.ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
    return (
        <main className="MainWrap">
            <Header />
            {/* <PageTransition duration="0.8s" easing="cubic-bezier(0.25, 0.1, 0.25, 1)"> */}
            {children}
            {/* </PageTransition> */}
            <Footer />
        </main>
    );
};

export default CommonLayout;
