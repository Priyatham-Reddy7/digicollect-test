import React from 'react'

const ProfileCard = ({fname, lname, imageURL, email}) => {
    return (
        <div>
            <img src={imageURL} alt="profile_img" />
            <h3>{fname} {lname}</h3>
            <h5>Email: {email}</h5>
        </div>
    )
}

export default ProfileCard
