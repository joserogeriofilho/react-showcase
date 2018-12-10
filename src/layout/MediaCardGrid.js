import React from 'react';
import { MediaCard } from './MediaCard';

export function MediaCardGrid(props) {
    return (
        <div className="row">
            {props.cards.map(c =>
                <MediaCard
                    key={c.id}
                    image={c.image}
                    title={c.title}
                    description={c.description} />
            )}
        </div>
    );
}