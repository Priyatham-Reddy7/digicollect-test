import React from 'react'
import logo from './logo.png';

//Navbar -- bootstrap
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
              <div className="container-fluid">
                <a className="navbar-brand" href="https://www.digicollect.com/"><img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/><strong> DigiCollect</strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                        <i className="bi bi-building p-2"></i>Company Info
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                        <i className="bi bi-person p-2"></i>Employee Info
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                        <i className="bi bi-briefcase p-2"></i>Job Portal
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                        <i className="bi bi-people-fill p-2"></i>Attendance
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                        <i className="bi bi-currency-dollar p-1"></i>Payroll
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                        <i className="bi bi-graph-up-arrow p-2"></i>Analytics
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                        <i className="bi bi-calendar2-check p-2"></i>Policies
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                        <i className="bi bi-gear p-2"></i>Settings
                        </a>
                      </li>
                    </ul>
                </div>
             </div>
           </nav>
         </div>
) }

export default Navbar
