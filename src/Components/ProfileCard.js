import React from 'react'


//Creating the profile card with the props from parent
const ProfileCard = ({fname, lname, imageURL, email}) => {
    return (
      <div className="col-md-6 col-lg-4">
        <div className="card bg-light text-dark">
          <div className="card-body text-center">
            <img className='rounded-circle mb-1 card-img-top image' src={imageURL} alt="profile"/>
            <h4 className="card-title mb-2 name">{fname} {lname}</h4>
            <h5 className="card-title mb-3 p-1  btn-role">Software Developer</h5>
            <p className='card-text'><strong>Employee ID: </strong>EMPP1231
            </p><hr />          
            <p className='card-text'><strong>Email: </strong>{email}</p><hr />
            <p className='card-text'><strong>Telephone: </strong>+1 444 1212 1234</p><hr />
            <p className='card-text'><strong >Department: </strong>DigiCollect</p>
          </div>
        </div>
      </div>  
    )
}

export default ProfileCard
