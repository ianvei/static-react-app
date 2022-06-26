import React from "react";

// eslint-disable-no-useless-constructor
function BodyTitles() {
    return(
        <div className="titles">
            <h1>Ian Veilleux</h1>
            <h3>Frontend Developer</h3>
            <p className="title-p">iansveilleux@gmail.com</p>
        </div>
    )
}

function BodyInfo() {
    return(
    <div className="info">
        <h2>About</h2>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h2>Interests</h2>
        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
    </div>
    )
}

function BodyButtons() {
    return(
        <div className="body-buttons">
            <div className="button-cont">
                <i className="fa-solid fa-envelope"></i>
                <button></button>
            </div>
            <div className="button-cont">
                <i className="fa-brands fa-linkedin"></i>
                <button></button>
            </div>
        </div>
    )
}

export default class BodyContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div className="body">
            <BodyTitles />
            <BodyButtons />
            <BodyInfo />
          </div>
        )
    }
}