import "./Loading-Terminal.css"
import React from "react";
import {v4 as uuidv4} from "uuid"
const LoadingTerminal = () =>{
    const [text, setText] = React.useState([
        "FORCE: XX0022. ENCYPT://000.222.2345",
        "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
        "RETRY: REINDEER FLOTILLA",
        "Z:> /FALKEN/GAMES/TICTACTOE/ EXECUTE -PLAYERS 0",
        "================================================",
        "Priority 1 // local / scanning...",
        "scanning ports...",
        "BACKDOOR FOUND (23.45.23.12.00000000)",
        "BACKDOOR FOUND (13.66.23.12.00110000)",
        "BACKDOOR FOUND (13.66.23.12.00110044)",
        "...",
        "...",
        "BRUTE.EXE -r -z",
        "...locating vulnerabilities...",
        "...vulnerabilities found...",
        "MCP/> DEPLOY CLU",
        "SCAN:  0100.0000.0554.0080",
        "SCAN:  0020.0000.0553.0080",
        "SCAN:  0001.0000.0554.0550",
        "SCAN:  0012.0000.0553.0030",
        "SCAN:  0100.0000.0554.0080",
        "SCAN:  0020.0000.0553.0080"
    ]);

    React.useEffect(() => {
        const timerId = setInterval(() => {
            const updatedText = [...text];
            updatedText.push(updatedText.shift());
            setText(updatedText);
        }, 400);
        return () => clearInterval(timerId);
    }, [text]);
    return (
        <>
            <div className={"animation-scan-alert"}>
                <div id="console">
                    <div className={'backgroud-window'}></div>
                    <div className="msg">Scanning</div>
                    {text.map((el) => {
                        return (<p key={uuidv4()}>{el}</p>)
                    })}
                </div>
            </div>
        </>
    )
}
export default LoadingTerminal