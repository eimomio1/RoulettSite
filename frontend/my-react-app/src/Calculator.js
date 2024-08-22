import axios from 'axios';
import React, { useState } from 'react'; 

function Calculator() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const calculationData = {
      number1: parseFloat(number1),
      number2: parseFloat(number2),
      operation: operation
    };

    axios.post('http://127.0.0.1:8000/api/calculate/', calculationData)
      .then(response => {
        setResult(response.data.result);
        setError(''); 
      })
      .catch(error => {
        setResult(null);
        if (error.response) {
          setError(error.response.data.error || 'An error occurred');
        } else {
          setError('An error occurred');
        }
      });
  };

  return (
    <section id="calculator" className="calculator">
      <h2>Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Number 1:</label>
          <input 
            type="number" 
            value={number1} 
            onChange={(e) => setNumber1(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Number 2:</label>
          <input 
            type="number" 
            value={number2} 
            onChange={(e) => setNumber2(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Operation:</label>
          <select 
            value={operation} 
            onChange={(e) => setOperation(e.target.value)} 
          >
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
          </select>
        </div>
        <button type="submit">Calculate</button>
      </form>

      {result !== null && (
        <p>Result: {result}</p>
      )}
      {error && (
        <p style={{ color: 'red' }}>{error}</p>
      )}
    </section>
  );
}

export default Calculator;
