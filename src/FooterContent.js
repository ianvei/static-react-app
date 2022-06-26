import React from "react";

export default class FooterContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="footer-content">
                <div className="twitter"></div>
                <div className="ffb"></div>
                <div className="instagram"></div>
                <div className="git"></div>
            </div>
        )
    }
}