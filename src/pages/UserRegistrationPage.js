import React from 'react';
import { UserList } from '../layout/UserList';

var users = [
    {id: 0, name: 'White Dove', username: 'White Dove', email: 'Lorem ipsum dolor sit amet, consectetur'},
    {id: 1, name: 'Red Cougar', username: 'Red Cougar', email: 'Aliquam mattis nisi sit amet ante dictum'},
    {id: 2, name: 'Black Duck', username: 'Black Duck', email: 'Vivamus pharetra ipsum cursus porttitor'},
]

export function UserRegistrationPage(props) {
    return (
        <div className="content container-fluid">
            <div className="row mb-4">
                <div className="col-sm">
                    <h1 className="display-4">User Registration</h1>
                    <p>Windows.width: {props.screenWidth}</p>
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

                            <button type="submit" className="btn btn-primary float-right">Register</button>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">List of Users</div>

                        <div className="card-body">
                            <UserList users={users} />
                        </div>
                    </div>

        </div>
    );
}