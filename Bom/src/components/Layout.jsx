import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}) {

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const main = document.querySelector('main');
    //         const footer = document.querySelector('footer');
    //         const scrollWatcher = document.querySelector('.scroll-watcher');
    //         const mainRect = main.getBoundingClientRect();
    //         const footerRect = footer.getBoundingClientRect();
    //         const mainHeight = main.scrollHeight;
    //         const scrollTop = window.scrollY - mainRect.top;
    //         const scrollPercent = Math.min(Math.max(scrollTop / (mainHeight - footerRect.height), 0), 1);
    
    //         scrollWatcher.style.transform = `scale(1, ${scrollPercent})`;
    //     };
    
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return(
        <>
            <Header />
                {children}
            <Footer />
            {/* <div className="scroll-watcher"></div> */}
        </>
    )
}