import React from 'react';

export function BlackenedScreen(props) {
    let style = props.visible ? {display: 'block'} : {display: 'none'};

    return(
        <div className="blackened-screen"
            style={style}
            onClick={props.onCloseNavDrawer}>
        </div>
    );
}