/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import Card from "./Card";
import "./CardList.scss";

class CommunityMain extends Component {
  render() {
    const { cards } = this.props;
    return (
      <div className="CardList">
        {cards?.map(card => {
          return (
            <Card
              id={card.id}
              cardUserName={card.card_user_name}
              cardUserIntro={card.card_user_introduction}
              cardUserImage={card.card_user_image}
              cardImage={card.card_image}
              cardContent={card.card_content}
              commentUserImage={card.comment_user_image}
              commentUserName={card.comment_user_name}
              commentContent={card.comment_content}
              likeNum={card.like_num}
              scrapNum={card.scrap_num}
              commentNum={card.comment_num}
              likeStatus={card.like_status}
            />
          );
        })}
      </div>
    );
  }
}

export default CommunityMain;
