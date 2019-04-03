import React from 'react';

export function MediaCard(props) {
    return (
        <div key={props.id} className="col-sm">
            <div className="card card-100-height">
                <div className="card-rich-media">
                    <img src={props.image} />
                </div>

                <div className="card-primary-title">
                    <h6>{props.title}</h6>
                </div>

                <div className="card-supporting-text">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}