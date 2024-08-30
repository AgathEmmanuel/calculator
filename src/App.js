import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow-md">
      <input 
        value={display} 
        readOnly 
        className="w-full mb-2 text-right text-lg p-2 border rounded"
      />
      <div className="grid grid-cols-4 gap-2">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
          <button
            key={btn}
            onClick={() => btn === '=' ? handleCalculate() : handleClick(btn)}
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {btn}
          </button>
        ))}
        <button onClick={handleClear} className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600 col-span-4">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
