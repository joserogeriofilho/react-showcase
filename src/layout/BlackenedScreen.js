import React, { Component } from 'react';
import './BlackenedScreen.scss';

export class BlackenedScreen extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let style = this.props.visible ? {display: 'block'} : {display: 'none'};

        return(
            <div className="blackened-screen"
                style={style}
                onClick={this.props.onCloseNavDrawer}>
            </div>
        );
    }

}