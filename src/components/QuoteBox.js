import React, { useEffect, useState } from 'react'
import { data } from '../data'

const randomQuote = () => {
    return data.quotes[Math.floor(Math.random() * data.quotes.length)]
}
const randomColor = () => {
    return data.colors[Math.floor(Math.random() * data.colors.length)]
}

//--------------------------------------------------------

function QuoteBox() {
    const [quote, setQuote] = useState({})
    const [color, setColor] = useState('')
    const [fadeIn, setFadeIn] = useState("")

    const handleNewQuote = () => {
        setQuote(randomQuote())
        setColor(randomColor())
        setFadeIn("quote-box-fadeIn 3s")
        //document.body.style.backgroundColor = color
    }

    useEffect(() => {
        handleNewQuote()
        
        return () => {
            //
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (

                <div id="quote-box" 

                style={{backgroundColor:color,animation:fadeIn}}
                onAnimationEnd={() => setFadeIn("")}
                >
                    <div id="quote">
                    
                        <p><i className="fa fa-quote-left"> </i> {quote.quote}</p>

                    </div>
                    <div id="author">
                        <p>-{quote.author}</p>
                    </div>
                    <div className="quote-footer">
                       <div id="share-quote" >                  
                       <a
                            id="Tumblr-quote"
                            className="btn btn-primary social-media-button"
                            title="Tumblr this quote!"
                            target="_top"
                            href='https://www.tumblr.com/widgets/share/tool'>
                            <i className="fa fa-tumblr"></i>
                        </a>

                        <a
                            id="tweet-quote"
                            className="btn btn-primary social-media-button"
                            title="Tweet this quote!"
                            target="_top"
                            href='https://twitter.com/intent/tweet'>
                            <i className="fa fa-twitter"></i>
                        </a>
                        </div>   
                     
                      <button
                            id="new-quote"
                            className="btn btn-primary"
                            onClick={handleNewQuote}
                            
                            
                        >New
                        </button>
                  
                       
                    </div>
                    
                </div>
     


    )
}
export default QuoteBox

