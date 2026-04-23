const Instructions = () => (
    <article>
        <h3 className="instructions__title">How To Play</h3>
        <hr />
        <section>
            <br />
            <h4>Gameplay:</h4>
            <p>Match the style of the left board by using the code editor to change the style of the right board labeled "Your Style".</p>
            <br />
            <h4>Editor:</h4>
            <p>
                Type your CSS rules into the editor.
                <span className="nowrap">(e.g. <code>background-color: red;</code>). </span>
                If it's correct, the rule will be highlighted green.
            </p>
            <br />
            <h4>Hints:</h4>
            <p>
                If you get stuck, you can click the Hint button to reveal a rule. You can use as many as needed.
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