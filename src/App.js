import React from 'react';
import { Component } from 'react';

class App extends Component {
   constructor() {
      super();
      this.state = {
         data:
         [
            {
               "id": 1,
               "name": "Toan",
               "age": "28"
            },
            {
               "id": 2,
               "name": "Thanh Toan",
               "age": "28"
            }
         ]
      }
   }

   render() {
      return (
         <div>
            <Header />
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
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

class TableRow extends Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

export default App;