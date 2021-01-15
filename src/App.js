import React from 'react';
import { Component } from 'react';

class App extends Component {
   render() {
      return (
         <div>
            {/*
            <h1>Header</h1>
            <h2>Content</h2>
            <p style={myStyle}>This is the content!!!</p>
            <p>{1 + 1}</p>
            <p>{i == 1 ? 'true' : 'false'}</p>
            */}
            <Header />
            <Content />
         </div>
      );
   }
}

class Header extends Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

class Content extends Component {
   render() {
      var myStyle = {
         fontSize: 50,
         color: "#FF0000"
      }
      return (
         <div>
            <h2>Content</h2>
            <p style={myStyle}>the content</p>
         </div>
      );
   }
}

export default App;