import { useState, useEffect } from 'react';

const Editor = ({ code, setCode, isCorrect, handleNextLevel, isLastLevel, hints, setHints, setUserStyle }) => {
    const [shake, setShake] = useState(false);

    const toCamelCase = (str) => str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    const handleRevealHint = () => {
        if (hints.length > 0) {
            const nextHint = hints[0] + ";";
            setCode(prev => prev ? prev + "\n" + nextHint : nextHint)
        }
        else { console.log("No more hints!") }
    }

    useEffect(() => { // filter out hints when code is updated
        const rules = code.split(";").map(r => r.trim()).filter(Boolean);
        setHints(prevHints =>
            prevHints.filter(hint => !rules.some(rule => toCamelCase(rule) === toCamelCase(hint)))
        );
    }, [code, setHints]);

    useEffect(() => {
        const parseStyle = () => {
            const style = {};
            const rules = code.split(";");

            for (let rule of rules) {
                if (!rule.trim()) continue;

                const [property, value] = rule.split(":");

                if (!property || !value) continue;

                const trimmedProp = property.trim();
                const trimmedValue = value.trim();

                const camelCaseProp = toCamelCase(trimmedProp);

                style[camelCaseProp] = trimmedValue;
            }
            setUserStyle(style);
        }
        parseStyle();
    }, [code, setUserStyle])

    return (
        <>
            <div className={`editor ${shake ? "shake" : ""}`} onAnimationEnd={() => setShake(false)}>
                <div className="lineNumbers">
                    1
                    <br />
                    2
                    <br />
                    3
                    <br />
                    4
                    <br />
                    5
                    <br />
                    6
                </div>
                <textarea
                    autoFocus
                    spellCheck="false"
                    form="editorForm"
                    id='edit'
                    placeholder="Add code here"
                    value={code}
                    onChange={(e) => { setCode(e.target.value) }}
                />
                <form className="editorForm" id="editorForm" onSubmit={(e) => e.preventDefault()}>
                    <label>code editor form</label>
                    <button id="hint" type="submit" onClick={handleRevealHint} disabled={!hints.length > 0}>{hints.length > 0 ? "Reveal Hint" : "No More Hints!"}</button>
                    <button id="next" type="button" onClick={() => isLastLevel ? handleNextLevel(true) : handleNextLevel(false)} disabled={!isCorrect}>
                        {isLastLevel ? "Back to Start" : "Next"}
                    </button>
                </form>
            </div>
        </>
    )
}

export default Editor;