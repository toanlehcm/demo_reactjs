import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './style.css';

function Item(props) {
    return <div className="item">
        <b>Name:</b> {props.name} <br />
        <b>Price:</b> ${props.price}
    </div>;
}

function ItemList() {
    return <div>
        <Item name="Cheese" price="4.99" />
        <Item name="Bread" price="1.5" />
        <Item name="Ice cream" price="24" />
    </div>;
}

const el = <ItemList />;

ReactDOM.render(el, document.getElementById('app'));
