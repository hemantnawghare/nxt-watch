import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Trending from './components/Trending'
import ProtectedRoute from './components/ProtectedRoute'
import Gaming from './components/Gaming'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import AppContext from './context/AppContext'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    savedVideoList: [],
    isDarkTheme: false,
  }

  // changeTab = tab => {
  //   this.setState({activeTab: tab})
  // }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addVideo = video => {
    const {savedVideoList} = this.state
    this.setState(prevState => ({
      savedVideoList: [...prevState.savedVideoList, video],
    }))
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const updatedSavedVideo = savedVideos.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({savedVideos: updatedSavedVideo})
  }

  render() {
    const {savedVideoList, isDarkTheme} = this.state

    return (
      <AppContext.Provider
        value={{
          savedVideoList,
          isDarkTheme,
          addVideoToList: this.addVideo,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
