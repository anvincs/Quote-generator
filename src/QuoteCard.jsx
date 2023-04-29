import Buttons from "./Buttons";
import Quote from "./Quote";

const QuoteCard = ({showNewQuote, text, author}) => {

    return(
        <div id="quote-box">
        <Quote 
        text = {text}
        author = {author}
        />
        <Buttons showNewQuote={showNewQuote} />
        </div>
    )
    
}

export default QuoteCard;