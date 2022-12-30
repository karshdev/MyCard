import React from "react"
import ReactDOM  from "react-dom"
function Info(){
    return (
       <div className="header">
        <img src="Aakarsh.jpeg" className="img" />
        <div className="info">
            <h2>Aakarsh Sharma</h2>
            <h4>Frontend Developer</h4>
           <span><img src="twitter-16.ico"/><a  href="https://twitter.com/Aakarshtwt">@Aakarshtwt</a></span>
        </div>
    <div className="buttons">
        <button className="mail"><img src="mail-16.ico"/><span>Email</span></button>
        <button className="linkedin"><img src="linkedin.ico"/><span>LinkedIn</span></button>
    </div>
    <About />
    <Interest />
        </div>
    )
}
function About(){
    return(
        <div className="about">
            <h2>About</h2>
            <p id="para1">Hey! My name is aakarsh sharma i am 20 years old and a keen learner of new tech technologies i know html css and js and still learning react .I am also good at solving dsa problems and has solved over 200+ problems on leetcode</p>

        </div>
    )
}

function Interest(){
    return(
        <div className="hobby">
            <h2>Interests</h2>
            <p id="para">My Interests include watcing Anime i am huge fan of anime specially Naruto it taught me a lesson to watch anime more-lmao</p>
        </div>
    )
}
function Page(){
    return (
        <div className="main">
        <Info />
        </div>
    )
}
ReactDOM.render(
    <Page />,document.getElementById("root")
)