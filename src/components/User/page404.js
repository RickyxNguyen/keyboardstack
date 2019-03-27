import React from 'react';
import {
   Container
 } from 'reactstrap';
import "./page404.css"

const Error = ({ location }) => (
   <Container className="Register" >
       <h2>Error 404</h2>
       <h2>No match found for <code>{location.pathname}</code></h2>
   </Container>
 );

 export default Error;