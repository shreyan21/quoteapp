import { useEffect, useState } from "react";

const Box = (props) => {
    const [res, setRes] = useState({})
    const quotes = async () => {
        const quote = await fetch('https://api.api-ninjas.com/v1/quotes', {
            method: 'GET', headers: {
                'X-API-KEY': 'l7i3BQSzyaR8RjfFwrvLDw==iLQt09eRKHddqqHP',

            }
        })
        const r = Math.random() * 256
        const g = Math.random() * 256
        const b = Math.random() * 256

        props.setColor(`rgb(${r},${g},${b})`)
        const result = await quote.json()
        setRes(result[0])
    }


    useEffect(() => {
        quotes()
    }, [])

    return (


        <div id="wrapper" className="d-flex justify-content-center align-items-center vh-100" style={{ color: props.color, backgroundColor: props.color }}>
            <div id="quote-box" className="bg-light p-4 rounded shadow text-center">
                <p className="quote-text">
                    <i className="fa fa-quote-left">
                    </i>
                    <span id="text">{res.quote}</span>
                    <a id="tweet-quote" href="https://twitter.com/intent/tweet"></a>
                </p>
                <p className="quote-author" >
                    <span id="author">-{res.author}</span>
                </p>
                <button id="new-quote" style={{ backgroundColor: props.color }} onClick={quotes}>New Quote</button>
            </div>
        </div>
    )

}

export default Box;