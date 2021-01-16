import React from "react";

class App extends React.Component {
   constructor() {
      super();

      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
   };

   forceUpdateHandler() {
      this.forceUpdate();
   };

   render() {
      return (
         <div>
            <button onClick={this.forceUpdateHandler}>force update</button>
            <h4>random number: {Math.random()}</h4>
         </div>
      );
   }
}

export default App;