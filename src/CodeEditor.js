import { useRef } from "react";

const CodeEditor = ({ code, setCode, highlightText }) => {
    const textareaRef = useRef(null);
    const highlightsRef = useRef(null);

    const handleScroll = () => {
        if (!textareaRef.current || !highlightsRef.current) return;

        highlightsRef.current.scrollTop = textareaRef.current.scrollTop;
        highlightsRef.current.scrollLeft = textareaRef.current.scrollLeft;
    };

    return (
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
                value={code}
                onChange={(e) => setCode(e.target.value)}
                ref={textareaRef}
                onScroll={handleScroll}
                placeholder="Type code here..."
            />
        </div>
    );
};

export default CodeEditor;