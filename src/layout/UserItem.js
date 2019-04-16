import React, { Component }   from 'react';

export class UserItem extends Component {
    constructor(props){
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(){
        this.props.onDeleteUser(this.props.id);
        //this.props.getUsers();
    }

    render(){
        return (
            <div className="row user-item" key={this.props.id}>
                <div className="col-12 col-md-3">
                    {this.props.lastName + ", " + this.props.firstName}
                </div>
                <div className="col-12 col-md-2 text-left text-md-center">
                    {this.props.username}
                </div>
                <div className="col-12 col-md-5 text-left text-md-center">
                    {this.props.email}
                </div>
                <div className="col-12 col-md-2 text-left text-md-center">
                    <button type="submit" className="btn btn-flat btn-default float-left" onClick={ this.handleDelete }>DELETE</button>
                </div>
            </div>
        );
    }
}