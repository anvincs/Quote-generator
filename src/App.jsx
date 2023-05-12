import { useState, useEffect } from 'react'
import QuoteCard from './QuoteCard'
import Footer from './Footer'


function App() {

  const [quotes, setQuotes] = useState([]);
  const [text, setText] = useState("Believe you can and you're halfway there.");
  const [author, setAuthor] = useState("Theodore Roosevelt");

  useEffect(() =>{
    getQuotes();
  } , []);

  
  const getQuotes = async () => {
    const url = "https://type.fit/api/quotes";
    const response = await fetch(url);
    const data = await response.json();
    setQuotes(data);
  }

  const showNewQuote = () => {

    const len = quotes.length;
    let randnum = Math.floor(len * Math.random())
    setText(quotes[randnum].text)
    setAuthor(quotes[randnum].author)

  }

 return (
  <>
    <QuoteCard 
    showNewQuote = {showNewQuote}
    text = {text}
    author = {author}
     />
    <Footer />
  </>
 )
}

export default App
