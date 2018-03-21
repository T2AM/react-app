import React from 'react';

// this component receives its id from the `match` prop
// so then what--does the component use `id` to qry the db for user's deets?
// I guess that means Profile manages its own state. yech
const Profile = props => (
  <div className="profile">
    <img
      className="maintainer-avatar"
      src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Ada_Lovelace_Chalon_portrait.jpg"
    />
    <h3 className="maintainer-name">Ada Lovelace</h3>
    <h4>{ props.match.params.id }</h4>
    <p className="maintainer-blurb">blurb I maintain The Internet lorem ipsum consecutur</p>
    <div className="badges">
      <img className="badge" src="path/to/server/webpack_badge.png"/>
      <img className="badge" src="path/to/server/css_badge.png"/>
      <img className="badge" src="path/to/server/django_badge.png"/>
    </div>
  </div>
)

export default Profile
