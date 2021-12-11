import React from 'react'
//Footer section using bootstrap classes
const Footer = () => {
    return (
        <>
        {/* <button className='btn help-desk btn-primary mb-0'>HelpDesk</button> */}
        <footer className='p-2 bg-primary text-white text-center position-relative'>
            <div className="container">
                <p className="lead">&copy; Copyright 2014 - 2021 DigiCollect - All Rights Reserved</p>
                <a href="" className="position-relative bottom-0 end-0">
                <i className="bi bi-linkedin h4 footer-icons"></i>
                <i className="bi bi-twitter h4 footer-icons"></i>
                <i className="bi bi-facebook h4 footer-icons"></i>
                {/* <i className="bi bi-house-door-fill h3 "></i>
                <i className="bi bi-search h3 "></i>
                <i className="bi bi-chat-square-fill h3 "></i> */}
                </a>
            </div>
        </footer>
      </>
    )
}

export default Footer
