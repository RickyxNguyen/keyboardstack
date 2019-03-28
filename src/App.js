import React, { Component } from 'react';
import './App.css';
import Login from "./components/User/Login"
import Register from "./components/User/Register"
import Keyboard from "./components/Keyboard/music"
import Home from "./components/Home"
import page404 from "./components/User/page404"
import Sky from 'react-sky';
import { firebaseAuth } from './components/config/constants';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/keyboard' />}
    />
  )
}

class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    
    return (
      <React.Fragment>
        <Sky
          images={{
            /* FORMAT AS FOLLOWS */
            0: "https://i.gifer.com/bfM.gif",  /* You can pass as many images as you want */
            1: "https://cdn.pixilart.com/photos/large/aae7d27392c15c0.gif",
            2: "https://media.giphy.com/media/wgQehGhgQLA9W/giphy.gif", /* you can pass images in any form: link, imported via webpack... */
            3: "https://media1.giphy.com/media/3o7WIN8l6SJw4iOdOw/giphy.gif"
            /* 4: your other image... */
            /* 5: your other image... */
            /* ... */
          }}
          how={240} /* Pass the number of images Sky will render chosing randomly */
          time={120} /* time of animation */
          size={'150px'} /* size of the rendered images */
          background={'white'} /* color of background */
        />
       <BrowserRouter>
       <Switch>
          <Route exact path="/" component={Home} />
          <PublicRoute exact path="/register" authed={this.state.authed} component={Register} />
          <PublicRoute exact path="/login" authed={this.state.authed} component={Login} />
          <PrivateRoute exact path ="/keyboard" authed={this.state.authed} component={Keyboard} />
          <Route component={page404} />
      </Switch>
      </BrowserRouter>

     </React.Fragment>    
    );
  }
}

export default App