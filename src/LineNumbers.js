const LineNumbers = ({ count = 6 }) => {
    return (
        <div className="line_numbers">
            {Array.from({ length: count }, (_, i) => (
                <div key={i}>{i + 1}</div>
            ))}
        </div>
    );
};

export default LineNumbers