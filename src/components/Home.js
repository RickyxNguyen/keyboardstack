import React from 'react';
import "./Home.css";
import Button from '@material-ui/core/Button';
import { Route } from 'react-router-dom'

const Home = () => [

<div>

  <div className = "home">
  <strong>Noj</strong> 
  </div>

  <div className = "buttons" style={{display: 'flex', justifyContent: 'center'}} xs={12}>
  
  <Route render={({ history}) => (
    <Button variant="contained" className = "button" color="primary" onClick={() => { history.push('/login') }}>
      Login
    </Button>
  )} />
    <div className="divider"/>

  <Route render={({history}) => (
  <Button variant="contained" className = "button" color="primary" onClick={() => { history.push('/register') }}>
  Register
  </Button>
  )} />

  </div>

</div>
]

export default Home;
