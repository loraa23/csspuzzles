const Editor = ({ code, setCode, handleStyleSet, isCorrect }) => {

    return (
        <>
            <div className="editor">
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
                    required
                    spellCheck="false"
                    form="editorForm"
                    id='edit'
                    placeholder="Add code here"
                    value={code}
                    onChange={(e) => { setCode(e.target.value) }}
                />
                <form className="editorForm" id="editorForm" onSubmit={(e) => e.preventDefault()}>
                    <label>code editor form</label>
                    <button type="submit" onClick={() => handleStyleSet()}>Submit</button>
                </form>
            </div>
            {isCorrect ? <p>Correct!</p> : <p>Not quite...</p>}
        </>
    )
}

export default Editor;