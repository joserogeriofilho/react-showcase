import React from 'react';

export function UserItem(props) {
    return (
        <div className="row user-item" key={props.id}>
            <div className="col-sm">
                {props.lastName}
            </div>
            <div className="col-sm">
                {props.firstName}
            </div>
            <div className="col-sm">
                {props.username}
            </div>
            <div className="col-sm">
                {props.email}
            </div>
        </div>
    );
}