const EditorControls = ({
    handleRevealHint,
    handleNextLevel,
    isCorrect,
    isLastLevel,
    currentHints
}) => {
    return (
        <form className="editor_controls" onSubmit={(e) => e.preventDefault()}>
            <label className="offscreen">code editor form</label>

            <button
                className="hint_button"
                type="submit"
                onClick={handleRevealHint}
                disabled={currentHints.length === 0}
            >
                {currentHints.length > 0 ? "Reveal Hint" : "No More Hints!"}
            </button>

            <button
                className="next_button"
                type="button"
                onClick={() => handleNextLevel(isLastLevel)}
                disabled={!isCorrect}
            >
                {isLastLevel ? "Back to Start" : "Next"}
            </button>
        </form>
    );
};

export default EditorControls;