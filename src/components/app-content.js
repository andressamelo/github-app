import React from 'react'
import PropTypes from 'prop-types';
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ 
  userinfo, 
  repos, 
  starred, 
  isFetching,
  handleSearch, 
  getRepos, 
  getStarred 
}) => (
  <div className='app'>
      <Search isDisabled={isFetching} handleSearch={handleSearch} />
      {isFetching && <div>Carregando...</div>}
      
    <div className='app__container'>
      {!!userinfo && <UserInfo userinfo={userinfo}/>}
      {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}
      {!!repos.length &&
        <Repos
          className='app__repos'
          title='Repositórios'
          repos={repos}
        />
      }

      {!!starred.length &&
        <Repos
          className='app__starred'
          title='Favoritos'
          repos={starred}
        />
      }      
    </div>
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default AppContent
