import React, { Component } from 'react';
import { UserItem } from './UserItem';

const API = 'http://localhost:3001/';
const DEFAULT_QUERY = 'users';

export class UserList extends Component{
    render() {
        const users = this.props.users;
        const isLoading = this.props.isLoading;
        const error = this.props.error;

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