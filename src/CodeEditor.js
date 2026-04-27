const CodeEditor = ({ code, setCode, highlightText, highlightsRef, textareaRef, handleScroll }) => {

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