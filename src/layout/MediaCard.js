import React from 'react';

export function MediaCard(props) {
    return (
        <div key={props.id} className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
            <div className="card card-100-height">
                <div className="card-rich-media">
                    <img src={props.image} />
                </div>

                <div className="card-primary-title">
                    <h6>{props.title}</h6>
                    <span className="secondary-text">Lorem ipsum et dolorem</span>
                </div>

                <div className="card-supporting-text">
                    <p>{props.description}</p>
                </div>

                <div className="card-actions">
                    <a className="btn btn-flat btn-primary">ACTION 1</a>
                    <a className="btn btn-flat btn-primary">ACTION 2</a>
                </div>
            </div>
        </div>
    );
}