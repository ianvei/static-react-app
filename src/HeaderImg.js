import React from "react";
import ian from "./images/ian.jpeg"


export default class HeaderImg extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <img src={ian} alt="profile of me" />
            // <div className="fa-brands fa-facebook-square" />
        )
    }
}