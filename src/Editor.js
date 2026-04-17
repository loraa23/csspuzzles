import { useState, useEffect, useRef } from 'react';

const Editor = ({ code, setCode, isCorrect, handleNextLevel, isLastLevel, hints, setUserStyle, currentHints, setCurrentHints }) => {
    const [shake, setShake] = useState(false);
    const textareaRef = useRef(null);
    const highlightsRef = useRef(null);

    const toCamelCase = (str) => str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    const handleRevealHint = () => {
        if (currentHints.length > 0) {
            const nextHint = currentHints[0];
            setCode(prev => prev ? prev + "\n" + nextHint : nextHint)
        }
        else { console.log("No more hints!") }
    }

    useEffect(() => { // filter out hints when code is updated
        const rules = code.match(/[^:;\n]+:\s*[^;\n]+;/g) || [];
        setCurrentHints(prevHints =>
            prevHints.filter(hint =>
                !rules.some(rule => toCamelCase(rule) === toCamelCase(hint)))
        );
    }, [code, setCurrentHints]);

    useEffect(() => {
        const parseStyle = () => {
            const style = {};
            const rules = code.match(/[^:;\n]+:\s*[^;\n]+;/g);

            if (!rules) return;

            for (let rule of rules) {
                rule = rule.slice(0, -1);

                const [property, value] = rule.split(":");
                const trimmedProp = property?.trim();
                const trimmedValue = value?.trim();

                const camelCaseProp = toCamelCase(trimmedProp);

                style[camelCaseProp] = trimmedValue;
            }
            setUserStyle(style);
        }
        parseStyle();
    }, [code, setUserStyle])

    const highlightText = (text) => {
        const usedHints = hints.filter(hint => !currentHints.some(currentHint => currentHint === hint));
        if (!usedHints.length) return text;

        const escapeRegex = (str) => str
            .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(`(${usedHints.map(escapeRegex).join("|")})`, "g");
        const parts = text.split(regex);

        return parts.map((part, index) => {
            const isMatch = usedHints.some(hint => toCamelCase(part) === toCamelCase(hint));

            return isMatch ? (
                <span key={index} className="highlight">
                    {part}
                </span>
            ) : (
                part
            );
        });
    };

    const handleScroll = () => {
        if (!textareaRef.current || !highlightsRef.current) return;

        highlightsRef.current.scrollTop = textareaRef.current.scrollTop;
        highlightsRef.current.scrollLeft = textareaRef.current.scrollLeft;
    };


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
                <div className="textarea_container">
                    <div className="backdrop" ref={highlightsRef}>
                        <div className="editor_highlights">
                            {highlightText(code)}
                        </div>
                    </div>
                    <textarea
                        autoFocus
                        spellCheck="false"
                        rows="6"
                        cols="49"
                        form="editorForm"
                        id='edit'
                        placeholder="Type code here..."
                        value={code}
                        onChange={(e) => { setCode(e.target.value) }}
                        ref={textareaRef}
                        onScroll={handleScroll}
                    />
                </div>

                <form className="editorForm" id="editorForm" onSubmit={(e) => e.preventDefault()}>
                    <label className="offscreen">code editor form</label>
                    <button id="hint" type="submit" onClick={handleRevealHint} disabled={!currentHints.length > 0}>{currentHints.length > 0 ? "Reveal Hint" : "No More Hints!"}</button>
                    <button id="next" type="button" onClick={() => isLastLevel ? handleNextLevel(true) : handleNextLevel(false)} disabled={!isCorrect}>
                        {isLastLevel ? "Back to Start" : "Next"}
                    </button>
                </form>
            </div>
        </>
    )
}

export default Editor;