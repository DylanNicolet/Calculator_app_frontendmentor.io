import React from "react";
import "./sass/App.css";

export default function App(){
    const [theme, setTheme] = React.useState("--1")
    const [display, setDisplay] = React.useState(0)

    function handleThemeSwitch(){
        if(theme === "--1"){
            setTheme("--2")
        }
        else if(theme === "--2"){
            setTheme("--3")
        }
        else if(theme === "--3"){
            setTheme("--1")
        }
    }

    return(
        <main className={"app app" + theme}>
            <section className={"header header" + theme}>
                <h1>calc</h1>
                <section className="header__right-container">
                    <p className="theme-text">THEME</p>
                    <section className="toggler">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <section className={"toggler-container toggler-container" + theme} onClick={handleThemeSwitch}>
                            <section className={"toggle toggle" + theme}></section>
                        </section>
                    </section>
                </section>
            </section>

            <section className={"display display" + theme}>
                <p>{display}</p>
            </section>

            <section className={"keyboard keyboard" + theme}>
                <button type="button" className={"btn-num btn-num" + theme}>7</button>
                <button type="button" className={"btn-num btn-num" + theme}>8</button>
                <button type="button" className={"btn-num btn-num" + theme}>9</button>
                <button type="button" className={"btn-del btn-del" + theme}>DEL</button>

                <button type="button" className={"btn-num btn-num" + theme}>4</button>
                <button type="button" className={"btn-num btn-num" + theme}>5</button>
                <button type="button" className={"btn-num btn-num" + theme}>6</button>
                <button type="button" className={"btn-num btn-num" + theme}>+</button>

                <button type="button" className={"btn-num btn-num" + theme}>1</button>
                <button type="button" className={"btn-num btn-num" + theme}>2</button>
                <button type="button" className={"btn-num btn-num" + theme}>3</button>
                <button type="button" className={"btn-math btn-math" + theme}>-</button>

                <button type="button" className={"btn-math btn-math" + theme}>.</button>
                <button type="button" className={"btn-num btn-num" + theme}>0</button>
                <button type="button" className={"btn-math btn-math" + theme}>/</button>
                <button type="button" className={"btn-math btn-math" + theme}>x</button>

                <button type="button" className={"btn-reset btn-reset" + theme}>RESET</button>
                <button type="button" className={"btn-equal btn-equal" + theme}>=</button>
            </section>
        </main>
    )
}