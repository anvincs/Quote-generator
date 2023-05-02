

const Buttons = ({showNewQuote}) => {
    return (
        
        <div id="buttons">
        <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank" className="button" title="Tweet this quote!" >
            Tweet
        </a>
        <button id="new-quote" className="button" onClick={showNewQuote} >New Quote</button>
        </div>
    )
}

export default Buttons;
