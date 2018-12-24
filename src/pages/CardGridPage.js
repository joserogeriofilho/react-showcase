import React from 'react';
import { MediaCardGrid } from '../layout/MediaCardGrid';

export function CardGridPage(props) {
    return (
        <div className="content container-fluid">
            <div className="row">
                <div className="col-sm">
                    <h4>Card Grid</h4>
                    <p>This page shows a simple example of how to display a list of components using the map() array function.</p>
                </div>
            </div>

            <MediaCardGrid />
        </div>
    );
}