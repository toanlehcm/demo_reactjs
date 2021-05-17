/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   selectedDishDetail: this.props.dishDetail,
    // };
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments(comments) {
    if (comments != null) {
      const commentsList = comments.map((commentItem) => {
        return (
          <li key={commentItem.id}>
            <p>{commentItem.comment}</p>
            <p>
              --{commentItem.author}, &nbsp;
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              }).format(new Date(commentItem.date))}
            </p>
          </li>
        );
      });

      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">{commentsList}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const dish = this.props.dish;

    if (dish != null) {
      const dishItem = this.renderDish(dish);
      const dishComment = this.renderComments(dish.comments);

      return (
        <div className="row">
          {dishItem}
          {dishComment}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
