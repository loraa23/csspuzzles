const LineNumbers = ({ code, lineNumbersRef }) => {
    const lineCount = code.split("\n").length;

    return (
        <div className="line_numbers" ref={lineNumbersRef}>
            {Array.from({ length: lineCount }, (_, i) => (
                <div key={i}>{i + 1}</div>
            ))}
        </div>
    );
};

export default LineNumbers