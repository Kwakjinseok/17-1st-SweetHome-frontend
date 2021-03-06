/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import StarReadOnly from "./StarReadOnly";
import ReviewModal from "./ReviewModal";
import "./ProductReview.scss";

class ProductReview extends Component {
  constructor() {
    super();
    this.state = {
      reviewData: [],
      isModalOn: false,
    };
  }

  arrangeBest = () => {
    this.props.history.push(`order=best`);
    console.log(this.props.history.push(this.props.location.pathname));
  };
  arrangeRecent = () => {
    this.props.history.push(`order=recent`);
  };

  handleModal = () => {
    this.setState({
      isModalOn: !this.state.isModalOn,
    });
  };

  render() {
    const { reviewData } = this.state;
    const { reviews } = reviewData;
    return (
      <div className="ProductReview">
        {this.state.isModalOn && <ReviewModal handleModal={this.handleModal} />}
        <section>
          <header>
            <h1>
              리뷰<span>count</span>
            </h1>
            <button type="button" onClick={this.handleModal}>
              리뷰쓰기
            </button>
          </header>
          <div className="reviewAverage">
            <div className="starScore">
              <span>
                <StarReadOnly size={24} rate={4.5} />
              </span>
              <h1>4.5</h1>
            </div>
            <div className="scoreGraph">
              <ul>
                <li>
                  <span>5점</span>
                  <span>-</span>
                  <span>500</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="reviewFilter">
            <div className="filterByDate">
              <button onClick={this.arrangeBest}>베스트순</button>
              <button onClick={this.arrangeRecent}>최신순</button>
              <button>사진리뷰</button>
            </div>
            <div>드롭다운필터</div>
          </div>
          <div className="reviewComponent"></div>
        </section>
      </div>
    );
  }
}

export default withRouter(ProductReview);
