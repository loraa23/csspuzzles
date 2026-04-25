const Instructions = () => (
    <article>
        <h3 className="instructions_title">How To Play</h3>
        <section>
            <br />
            <h4>Gameplay:</h4>
            <p>Match the style of the left board using the code editor to change the style of the right board labeled "Your Style".</p>
            <br />
            <h4>Editor:</h4>
            <p>
                Type your CSS rules into the editor.
                <span className="nowrap">(e.g. <code>background-color: red;</code>). </span>
                <br /><br />
                Matching rules will be highlighted <span className="highlight" style={{ color: "black" }}>green</span>.
                <br /><br />
                Do not use shorthand.
                <br />
                (e.g. use <code className="nowrap">flex-direction</code> and <code className="nowrap">flex-wrap</code> instead of <code className="nowrap">flex-flow</code>).
            </p>
            <br />
            <h4>Hints:</h4>
            <p>
                If you get stuck, you can click the <span className="nowrap" style={{ backgroundColor: "var(--HINT-BUTTON-COLOR)" }}>Reveal Hint</span> button to reveal a rule. Use as many as needed.
            </p>
            <br />
            <h4>Colors:</h4>
            <p>
                All colors used in the level are displayed below the editor along with their names. You can use these as a reference when styling backgrounds, borders, and other properties.
            </p>
            <br />
            <h4>Sizing:</h4>
            <p>
                Sizing range from 2px, 5px, 10px, 20px, 30px, and so on.
                Only these values will appear in the levels, so a border might be 2px thick, but never 6px.
            </p>
            <br />
        </section>
    </article>
);

export default Instructions;