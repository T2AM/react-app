import React from 'react';

const Profile = props => (
  <div className="profile">
    <h3>Greetings, you've arrived at the profile page</h3>
    <p>{ props.match.params.id || '000000' }</p>
  </div>
)

export default Profile
