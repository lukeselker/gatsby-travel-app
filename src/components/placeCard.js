
import React from 'react';
import Img from 'gatsby-image';
import placeCardStyles from './placeCard.module.css';
import Card from 'react-bootstrap/Card';

const PlaceCard = (props) => (
    <Card className={placeCardStyles.cardStyles}>
        <div className={placeCardStyles.monthContainer}>
            <div className={placeCardStyles.month}>{props.postMonth}</div>
        </div>
        <div className={placeCardStyles.imgShading}>
            <Img style={{height: '12em'}} fluid={props.image} alt="Card image" />
        </div>
        <a href={props.postLink}>
            <Card.ImgOverlay>
                <div className="card-img-overlay d-flex">
                    <div className="my-auto mx-auto text-center">
                        <Card.Title className={placeCardStyles.cardName}>{props.name}</Card.Title>
                        <Card.Text className={placeCardStyles.cardSubname}>{props.subName}</Card.Text>
                    </div>
                </div>
            </Card.ImgOverlay>
        </a>
    </Card>
)

export default PlaceCard;



