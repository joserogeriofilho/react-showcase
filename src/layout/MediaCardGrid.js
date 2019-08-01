import React, { Component }  from 'react';
import { MediaCard } from './MediaCard';

const API_URL = process.env.REACT_APP_API_URL;
const DEFAULT_QUERY = 'cards';

export class MediaCardGrid extends Component{
    constructor(props){
        super(props);

        this.state = {
            cards: [],
            isLoading: false,
            error: null
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(API_URL + DEFAULT_QUERY)
            .then(response => {
                if(response.ok) {
                    return response.json()
                } else {
                    throw new Error('Something went wrong...')
                }
            })
            .then(data => this.setState({ cards: data, isLoading: false}))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const cards = this.state.cards;
        const isLoading = this.state.isLoading;
        const error = this.state.error;

        if(isLoading){
            return <p>Loading...</p>
        }

        if(error){
            return <p>{error.toString()}</p>
        }

        return (
            <div className="row">
                {cards.map(c =>
                    <MediaCard
                        key={c.id}
                        image={c.image}
                        title={c.title}
                        description={c.description} />
                )}
            </div>
        );
    }
}