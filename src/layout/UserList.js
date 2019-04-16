import React, { Component } from 'react';
import { UserItem } from './UserItem';

export class UserList extends Component{
    render() {
        let users = this.props.users;
        let isLoading = this.props.isLoading;
        let error = this.props.error;

        let onDeleteUser = this.props.onDeleteUser;
        let getUsers = this.props.getUsers;

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
                        id={u.id}
                        firstName={u.firstName}
                        lastName={u.lastName}
                        username={u.userName}
                        email={u.email} 
                        onDeleteUser={ onDeleteUser }
                        getUsers = { getUsers } />
                )}
            </div>
        );
    }
}