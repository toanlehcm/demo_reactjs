import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './style.css';

function Item(pro) {
    return <div className="item">
        <b>Name:</b> {pro.name} <br />
        <b>Price:</b> ${pro.price}
    </div>;
}

function ItemList() {
    return <div>
        <Item name="Cheese" price="4.99" />
        <Item name="Bread" price="1.5" />
        <Item name="Ice cream" price="24" />
    </div>;
}

// const el = <ItemList />;

ReactDOM.render(<ItemList />, document.getElementById('app'));
