import React from 'react';

import './MediaCard.scss';

export function MediaCard(props) {
    return (
        <div key={props.id} className="col-sm">
            <div className="media-card">
                <p>{props.image}</p>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}