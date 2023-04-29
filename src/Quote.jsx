
const Quote = ({text, author}) => {
    
    return (
        <>
        <div id="text"><span id="quotation" >"</span>{text}</div>
        <div id="author">- {author}</div>
        </>
    )
    

}

export default Quote;