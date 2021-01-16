import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
   constructor() {
      super();

      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
   };

   findDomNodeHandler() {
      var myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = 'red';
   };

   render() {
      return (
         <div>
            <button onClick={this.findDomNodeHandler}>find dom node</button>
            <div id='myDiv'>node</div>
         </div>
      );
   }
}

export default App;