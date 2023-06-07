import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useEffect, useState } from "react";
import MyContext from "./MyContext";
// import NorthIcon from "@mui/icons-material/North";


function DefaultLayout({ children }) {
    const [backToTopButton, setBackToTopButton] = useState(false);
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const [resultSearch, setResultSearch] = useState({});
    const handelChangeResultSearch = (newValue)=>{
        setResultSearch(newValue);
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY / (scrollHeight - clientHeight) >= 0.7) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div>
            <MyContext.Provider value={{resultSearch, handelChangeResultSearch}}>
                <Header />
                <div>{children}</div>
            </MyContext.Provider>
            <Footer />
            {/* {backToTopButton && (
                <button className={styles.btn} onClick={scrollUp}>
                    <NorthIcon className={styles.btnIcon} />
                </button>
            )} */}
        </div>
    );
}

export default DefaultLayout;