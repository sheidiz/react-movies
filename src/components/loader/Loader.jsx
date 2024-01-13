import React from 'react'
import style from "./loader.module.css";

function Loader() {
    return (
        <div className="my-5 flex justify-center">
            <div className={style.dotSpinner}>
                <div className={style.dotSpinner__dot}></div>
                <div className={style.dotSpinner__dot}></div>
                <div className={style.dotSpinner__dot}></div>
                <div className={style.dotSpinner__dot}></div>
                <div className={style.dotSpinner__dot}></div>
                <div className={style.dotSpinner__dot}></div>
                <div className={style.dotSpinner__dot}></div>
                <div className={style.dotSpinner__dot}></div>
            </div>
        </div>
    )
}

export default Loader