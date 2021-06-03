import React, { useEffect, useState } from 'react'
import { fadeIn } from 'react-animations'
import {slideInDown} from 'react-animations'
import styled, { keyframes } from 'styled-components'
import { data } from '../data'
import { colors } from '../colors'

const randomQuote = () => {
    return data.quotes[Math.floor(Math.random() * data.quotes.length)]
}

const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}


//------------------STYLED COMPONENTS----------------------
const bounceAnimation = keyframes`${fadeIn}`;
const Wrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 100vh;

animation-name: ${bounceAnimation};
animation-duration: 3s;
backGround:${(props) => props.color ? props.color : ''};
`

const hingeAnimation = keyframes`${slideInDown}`
const BouncyDiv = styled.div`
display:flex;
margin:15px;

animation-name: ${hingeAnimation};
animation-duration: 1s;
backGround:#f8f8f8f8;
color:${(props) => props.color ? props.color : ''};
`

//--------------------------------------------------------

function QuoteBox() {
    const [quote, setQuote] = useState({})
    const [color, setColor] = useState('')



    const handleNewQuote = () => {
        setQuote(randomQuote())
        setColor(randomColor())
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

        <Wrapper key={quote.quote} color={color}>
            <BouncyDiv key={quote.quote} color={color}  >
                <div id="quote-box" >
                    <div id="text">
                    
                        <p><i className="fa fa-quote-left"> </i> {quote.quote}</p>

                    </div>
                    <div id="author">
                        <p>-{quote.author}</p>
                    </div>
                    <div className="quote-footer">
                       <div id="share-quote" >                  
                       <a
                            id="Tumblr-quote"
                            className="btn btn-primary"
                            title="Tumblr this quote!"
                            target="_top"
                            href='https://www.tumblr.com/widgets/share/tool'>
                            <i className="fa fa-tumblr"></i>
                        </a>

                        <a
                            id="tweet-quote"
                            className="btn btn-primary"
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
                        >New quote
                        </button>
                  
                       
                    </div>
                    
                </div>
            </BouncyDiv>
        </Wrapper>


    )
}
export default QuoteBox

