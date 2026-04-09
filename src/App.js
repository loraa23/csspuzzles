import './App.css';
import _ from 'lodash';
import { useState, useEffect } from 'react';
import Header from './Header';
import Editor from './Editor';
import Board from './Board';
import Footer from './Footer';

function App() {
  const [code, setCode] = useState('');
  const [userStyle, setUserStyle] = useState({});
  const [levelStyle, setLevelStyle] = useState({ backgroundColor: "red" });
  const [isCorrect, setIsCorrect] = useState(false);

  const handleStyleSet = () => {
    const style = {};
    const rules = code.split(";");

    for (let rule of rules) {
      if (!rule.trim()) continue;

      const [property, value] = rule.split(":");

      if (!property || !value) continue;

      const trimmedProp = property.trim();
      const trimmedValue = value.trim();

      style[trimmedProp] = trimmedValue;
    }

    setUserStyle(style);
  }

  useEffect(() => {
    const result = _.isEqual(levelStyle, userStyle);
    setIsCorrect(result);
  }, [userStyle, levelStyle])

  return (
    <div className="App">
      <Header />
      <main className="view">
        <Board
          userStyle={userStyle}
          levelStyle={levelStyle}
        />
        <Editor
          code={code}
          setCode={setCode}
          userStyle={userStyle}
          handleStyleSet={handleStyleSet}
          isCorrect={isCorrect}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
