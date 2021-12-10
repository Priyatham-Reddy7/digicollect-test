import React from 'react'

const ProfileCard = ({fname, lname, imageURL, email}) => {
    return (
      <div className="col-md-6 col-lg-4">
        <div className="card bg-light text-dark">
          <div className="card-body text-center">
            <img className='rounded-circle mb-3' src={imageURL} alt="profile"/>
            <h3 className="card-title mb-3">{fname}{lname}</h3>
            <p className='card-text'><strong>Employee ID: </strong> EMPP1231
            </p><hr />          
            <p className='card-text'><strong>Email: </strong>{email}</p><hr />
            <p className='card-text'><strong>Telephone: </strong>+1 444 1212 1234</p><hr />
            <p className='card-text'><strong>Department: </strong>DigiCollect</p>
          </div>
        </div>
      </div>  
    )
}

export default ProfileCard
