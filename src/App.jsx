import React from "react";
import "./sass/App.css";

export default function App(){
    //State management
    const [theme, setTheme] = React.useState("--1")
    const [display, setDisplay] = React.useState("0")

    //Theme switch logic
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

    //User Interaction
    function handleInputPress(input){
        if(display === "0" || display === "Error"){
            setDisplay(input)
        }
        else{
            setDisplay((prev) => prev + input)
        }
    }

    function handleResetPress(){
        setDisplay("0")
    }

    function handleDelPress(){
        if(display !== "0"){
            let del = display.slice(0,-1)
            if(del === "" || del === "Erro"){
                setDisplay("0")
            }
            else{
                setDisplay(del)
            }
        }
    }

    //Math calculation logic
    function handleEqualPress(){
        if(display != "Error"){
            try{
                let calc = eval(display)
                setDisplay(calc.toString())
            }
            catch(error){
                setDisplay("Error")
                console.log(error)
            }
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
                <button type="button" className={"btn-input btn-input" + theme} onClick={e => handleInputPress("7")}>7</button>
                <button type="button" className={"btn-input btn-input" + theme} onClick={e => handleInputPress("8")}>8</button>
                <button type="button" className={"btn-input btn-input" + theme} onClick={e => handleInputPress("9")}>9</button>
                <button type="button" className={"btn-del btn-del" + theme} onClick={handleDelPress}>DEL</button>

                <button type="button" className={"btn-input btn-input" + theme} onClick={e => handleInputPress("4")}>4</button>
                <button type="button" className={"btn-input btn-input" + theme} onClick={e => handleInputPress("5")}>5</button>
                <button type="button" className={"btn-input btn-input" + theme} onClick={e => handleInputPress("6")}>6</button>
                <button type="button" className={"btn-input btn-input" + theme} onClick={e => handleInputPress("+")}>+</button>

                <button type="button" className={"btn-input btn-input" + theme} onClick={e => handleInputPress("1")}>1</button>
                <button type="button" className={"btn-input btn-input" + theme} onClick={e => handleInputPress("2")}>2</button>
                <button type="button" className={"btn-input btn-input" + theme} onClick={e => handleInputPress("3")}>3</button>
                <button type="button" className={"btn-input btn-input" + theme} onClick={e => handleInputPress("-")}>-</button>

                <button type="button" className={"btn-input btn-input" + theme} onClick={e => handleInputPress(".")}>.</button>
                <button type="button" className={"btn-input btn-input" + theme} onClick={e => handleInputPress("0")}>0</button>
                <button type="button" className={"btn-input btn-input" + theme} onClick={e => handleInputPress("/")}>/</button>
                <button type="button" className={"btn-input btn-input" + theme} onClick={e => handleInputPress("*")}>x</button>

                <button type="button" className={"btn-reset btn-reset" + theme} onClick={handleResetPress}>RESET</button>
                <button type="button" className={"btn-equal btn-equal" + theme} onClick={handleEqualPress}>=</button>
            </section>
        </main>
    )
}