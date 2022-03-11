import React from "react";
import "../Css/Body.css"

const Footer = () => {

    return(
        <>
            <div className="df-js footer">
                <strong>
                    <span>
                        &copy; Copyright
                        {' '}
                        {(new Date().getFullYear())}
                        {' '}
                        Company Name
                    </span>
                </strong>
                <div className="float-right d-none d-sm-block">
                <b>
                    Version
                </b>
                {' '}
                    0.0.1
                </div>
            </div>
        </>
    )
}
export default Footer