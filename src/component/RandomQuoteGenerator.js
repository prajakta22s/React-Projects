import React from "react";

const RandomQuoteGenerator = () => {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Be the change that you wish to see in the world. - Mahatma Gandhi",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only limit to our realization of tomorrow will be our doubts of today.- Franklin D. Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
  ];
  
  const randomIndex = Math.floor(Math.random()*quotes.length);
  const quote = quotes[randomIndex];

  return (
    <div>
        {quote}
    </div>
  )
};

export default RandomQuoteGenerator;
