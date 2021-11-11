import React from 'react';
import CardItem from './CardItem';
import './Cards.css'


function Cards() {
    return (
        <div className='cards'>
            <h1>Check out this EPIC Horses</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src='https://weauction.blob.core.windows.net/images/78e3e479-bbf7-4343-9392-4ab81f29fa1c.jpg'
                        text='Extravagant mare out of the family to the Olympic siblings CHACNA and CHADINO '
                        label='Come Nina PS'
                        path='/products'
                        />
                        <CardItem
                        src='https://weauction.blob.core.windows.net/images/45c484d5-99a4-4c2f-858d-6b75707244c6.jpg'
                        text='Scope, blood and power - out of the family to the Olympic finalist CHILENSKY and the future leading sire CHACOON BLUE'
                        label='Baretino PS'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src='https://weauction.blob.core.windows.net/images/1d984547-cd48-46f2-9312-7490c5070e61.jpg'
                        text="Internationally experienced quality mare out of the halfsister to Ian Millar's 1m60-star BARANUS "
                        label='Cocothaura PS'
                        path='/services'
                        />
                        <CardItem
                        src='https://weauction.blob.core.windows.net/images/e71f93f9-6579-4c60-9f2d-6cf9afd88396.jpg'
                        text='What a jumper and what a mixture: Kannan meets the family of the Olympic finalist CHILENSKY and of the future leading sire CHACOON BLUE'
                        label='Kanlait Girl PS'
                        path='/products'
                        />
                        <CardItem
                        src='https://weauction.blob.core.windows.net/images/6d1669df-6874-48a4-a0a0-cd25af4febda.jpg'
                        text='The sister to the 1m60 jumper and FOS-reference MISS BUBBLES is just a powerhouse. Out of the family to the legendary ROCHET M'
                        label='Dianistria Blue PS'
                        path='/products'
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default Cards;