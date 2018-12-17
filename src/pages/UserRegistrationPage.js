import React, { Component }   from 'react';
import { UserList } from '../layout/UserList';

const API = 'http://localhost:3001/';
const DEFAULT_QUERY = 'users';

export class UserRegistrationPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            users: [],
            isLoading: false,
            error: null
        };

        this.getUsers = this.getUsers.bind(this);
    }

    postNewUser(){
        fetch(API + DEFAULT_QUERY,
            {
                method: 'POST',
                headers: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify({firstName:"x", lastName:"x", userName:"x", email:"x"})
            }
        ).then(response => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong...')
            }
        }).then((data) => console.log(data))
        .catch((err) => console.log(err));
    }

    getUsers() {
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

    componentDidMount() {
        this.getUsers();
    }

    render(){
        const users = this.state.users;
        const isLoading = this.state.isLoading;
        const error = this.state.error;

        return (
            <div className="content container-fluid">
                <div className="row mb-4">
                    <div className="col-sm">
                        <h1 className="display-4">User Registration</h1>
                        <p className="lead">This page shows an example of a simple user registration and listing.</p>
                    </div>
                </div>
    
                <div className="card mb-4">
                    <div className="card-header">Register Here</div>
    
                    <div className="card-body">     
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="inputName">Name</label>
                                    <input type="text" className="form-control" id="inputName" placeholder="Enter your name" />
                                </div>       
                            </div>
    
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                            </div>
                        </div>
    
                        <button type="submit" className="btn btn-primary float-right" onClick={this.postNewUser}>Register</button>
                    </div>
                </div>
    
                <div className="card mb-4">
                    <div className="card-header">List of Users</div>
    
                    <div className="card-body">
                        <UserList users={users} isLoading={isLoading} error={error} />
                    </div>
                </div>
    
            </div>
        );
    }
}