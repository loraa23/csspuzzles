import { useEffect } from 'react';
import LineNumbers from './LineNumbers';
import CodeEditor from './CodeEditor';
import EditorControls from './EditorControls';

const Editor = ({ code, setCode, isCorrect, handleNextLevel, isLastLevel, hints, setUserStyle, currentHints, setCurrentHints }) => {
    const toCamelCase = (str) => str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    const handleRevealHint = () => {
        if (currentHints.length > 0) {
            const nextHint = currentHints[0];
            setCode(prev => prev ? prev + "\n" + nextHint : nextHint)
        }
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
            .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

        const regex = new RegExp(`(${usedHints.map(escapeRegex).join("|")})`, "g");
        const parts = text
            .replace(/\n$/g, '\n\n')
            .split(regex);

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

    return (
        <div className="editor">
            <LineNumbers />
            <CodeEditor
                code={code}
                setCode={setCode}
                highlightText={highlightText}
            />
            <EditorControls
                handleRevealHint={handleRevealHint}
                handleNextLevel={handleNextLevel}
                isCorrect={isCorrect}
                isLastLevel={isLastLevel}
                currentHints={currentHints}
            />
        </div>
    )
}

export default Editor;