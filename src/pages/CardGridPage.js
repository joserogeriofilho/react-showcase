import React from 'react';
import { MediaCardList } from '../layout/MediaCardList';

var cards = [
    {id: 0, image: 'White Dove', title: 'White Dove', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at magna eros. Praesent et egestas diam. Praesent ultrices in nisi non euismod.'},
    {id: 1, image: 'Red Cougar', title: 'Red Cougar', description: 'Aliquam mattis nisi sit amet ante dictum, nec commodo turpis feugiat. Nunc vitae dui nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'},
    {id: 2, image: 'Black Duck', title: 'Black Duck', description: 'Vivamus pharetra ipsum cursus porttitor lobortis.'},
    {id: 3, image: 'Gold Monkey', title: 'Gold Monkey', description: 'Curabitur dolor orci, interdum eget consectetur ac, hendrerit sit amet nisi.'},
]

export function CardGridPage(props) {
    return (
        <div className="content container-fluid">
            <div className="row">
                <div className="col-sm">
                    <h1 className="display-4">Card Grid</h1>
                    <p className="lead">This page shows a simple example of how to display a list of components using the map() array function.</p>
                </div>
            </div>

            <MediaCardList cards={cards} />
        </div>
    );
}