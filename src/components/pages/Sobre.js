import React, { Component } from 'react';

export class Sobre extends Component {

    render(){
        return (
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-sm">
                        <h1 className="display-4">Sobre</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-4" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <p>Windows.width: {this.props.screenWidth}</p>
                        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </div>
                </div>
            </div>
        );
    }

}