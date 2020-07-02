import React from 'react'
import PropTypes from 'prop-types';

const UserInfo = ({ userinfo }) => (
  <div className='app__userInfo'>
    <div className='app__userInfo--photo'>
      <img src={userinfo.photo} alt={userinfo.username} />  
    </div>
    
    <div className='app__userInfo--info'>
      <h2 className='username'>
        <a href={`https://github.com/${userinfo.login}`}>
          {userinfo.username}
        </a>
      </h2>

      <ul>
        <li><span>{userinfo.repos}</span> Repositórios</li>
        <li><span>{userinfo.followers}</span> Seguidores </li>
        <li>Seguindo <span>{userinfo.following}</span> usuários</li>
      </ul>
    </div>
  </div>
)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired    
  })

}

export default UserInfo
