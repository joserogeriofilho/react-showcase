import React from 'react';
import { MediaCard } from './MediaCard';

import './MediaCardList.scss';

export function MediaCardList(props) {
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