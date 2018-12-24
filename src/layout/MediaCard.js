import React from 'react';

export function MediaCard(props) {
    return (
        <div key={props.id} className="col-sm">
            <div className="media-card">
                <span className="overline">{props.image}</span>
                <h5>{props.title}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    );
}