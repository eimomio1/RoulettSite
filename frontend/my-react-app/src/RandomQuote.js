import React, { useState } from 'react';
import axios from 'axios';

function RandomQuote() {
  const [quote, setQuote] = useState({
    quote: "Click the button to get a random quote!",
    author: ""
  });

  const fetchQuote = () => {
    axios.get('http://127.0.0.1:8000/api/quote/')
      .then(response => {
        setQuote(response.data);
      })
      .catch(error => {
        console.error('Error fetching the quote:', error);
      });
  };

  return (
    <quote className="quote">
      <h2>Random Quote</h2>
      <p>"{quote.quote}"</p>
      {quote.author && <footer>- {quote.author}</footer>}
      <button onClick={fetchQuote} className="quote-button">Get New Quote</button>
    </quote>
  );
}

export default RandomQuote;
