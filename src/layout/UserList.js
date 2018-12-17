import React, { Component } from 'react';
import { UserItem } from './UserItem';

const API = 'http://localhost:3001/';
const DEFAULT_QUERY = 'users';

export class UserList extends Component{
    constructor(props){
        super(props);

        this.state = {
            users: [],
            isLoading: false,
            error: null
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(API + DEFAULT_QUERY)
            .then(response => {
                if(response.ok) {
                    return response.json()
                } else {
                    throw new Error('Something went wrong...')
                }
            })
            .then(data => this.setState({ users: data, isLoading: false}))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const users = this.state.users;
        const isLoading = this.state.isLoading;
        const error = this.state.error;

        if(isLoading){
            return <p>Loading...</p>
        }

        if(error){
            return <p>{error.toString()}</p>
        }

        return(
            <div>
                {users.map(u =>
                    <UserItem
                        key={u.id}
                        firstName={u.firstName}
                        lastName={u.lastName}
                        username={u.userName}
                        email={u.email} />
                )}
            </div>
        );
    }
}