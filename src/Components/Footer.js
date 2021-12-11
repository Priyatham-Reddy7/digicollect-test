import React from 'react'
//Footer section using bootstrap classes
const Footer = () => {
    return (
        <>
        <footer className='p-2 bg-primary text-white text-center position-relative'>
            <div className="container">
                <p className="lead">&copy; Copyright 2014 - 2021 DigiCollect - All Rights Reserved</p>
                <a href="" className="position-relative bottom-0 end-0">
                <i className="bi bi-linkedin h4 footer-icons"></i>
                <i className="bi bi-twitter h4 footer-icons"></i>
                <i className="bi bi-facebook h4 footer-icons"></i>
                </a>
            </div>
        </footer>
      </>
    )
}

export default Footer
