import React from "react"
import Logo from "assets/images/logo-main.svg"

function Preloader() {
  return (
    <div className="cs-preloader">
        <div className="cs-preloader_bg">
            <div className="cs-preloader_in">
                <img src={Logo} alt="Logo" />
            </div>
        </div>
    </div>
  )
}

export default Preloader
