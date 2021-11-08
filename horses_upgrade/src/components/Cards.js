import React from 'react';
import CardItem from './CardItem';
import './Cards.css'


function Cards(props) {
    return (
        <div className='cards'>
            <h1>Check out this EPIC Horses</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src='/src/images/mares.jpg'
                        text='Check out this Horse'
                        label='Love Horses'
                        path='/mares'
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default Cards;