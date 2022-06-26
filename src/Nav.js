import React from "react";

export default class Nav extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <nav className="parker">
                <h1>Parker's site</h1>
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }

}