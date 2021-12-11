import React from 'react'
//Footer section using bootstrap classes
const Footer = () => {
    return (
        <footer className='p-2 bg-primary text-white text-center position-relative'>
            <div className="container">
                <p className="lead">&copy; Copyright 2014 - 2021 DigiCollect - All Rights Reserved</p>
                <a href="" className="position-relative bottom-0 end-0">
                <i class="bi bi-linkedin h3 footer-icons"></i>
                <i class="bi bi-twitter h3 footer-icons"></i>
                <i class="bi bi-facebook h3 footer-icons"></i>
                {/* <i className="bi bi-house-door-fill h3 "></i>
                <i className="bi bi-search h3 "></i>
                <i className="bi bi-chat-square-fill h3 "></i> */}
                </a>
            </div>
        </footer>
    )
}

export default Footer
