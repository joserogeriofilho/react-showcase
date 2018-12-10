import React from 'react';

export function UserItem(props) {
    return (
        <div className="row user-item" key={props.id}>
            <div className="col-sm">
                name={props.name}
            </div>
            <div className="col-sm">
                username={props.username}
            </div>
            <div className="col-sm">
                email={props.email}
            </div>
        </div>
    );
}