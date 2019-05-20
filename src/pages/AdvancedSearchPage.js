import React from 'react';

export function AdvancedSearchPage(props) {
    return (
        <div className="content container-fluid">
            <div className="row justify-content-md-center mb-5 hero-section">
                <div className="col-xs-12 col-xl-8 text-center">
                    <h5 className="mb-2">A Simple Yet Complete ReactJS Application</h5>
                    <p>This application provides a user registration screen with insertion and deletion of entries plus a screen with a grid of media cards. All the data is obtained by HTTP requests to a mocked REST API using the json-server library. The routing was made with the react-route library.</p>
                    <img src="./img/devices-mockup.png" className="img-fluid" alt="Mockup image of the showcase application in multiple devices."></img>
                </div>
            </div>

            <div className="row justify-content-md-center mb-4">
                <div className="col-xs-12 col-xl-6 mb-4">
                    <div className="card card-100-height">
                        <div className="card-body">
                            <h5 className="mb-2">Components, Functionalities and Patterns</h5>
                            <ul>
                                <li>Responsive design using Bootstrap 4;</li>
                                <li>Presents a navigation drawer and an app bar component;</li>
                                <li>Use of the Fetch API to get and write data to a mocked REST API;</li>
                                <li>Use of <code>react-router-dom</code> for routing;</li>
                                <li>Stateful parents and stateless children;</li>
                            </ul>                            
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-xl-6 mb-4">
                    <div className="card card-100-height">
                        <div className="card-body">
                            <h5 className="mb-2">Installing and Running</h5>
                            <ol>
                                <li>Install (if you haven't already) JSON Server, a fake REST API tool, by running <code>> npm install -g json-server</code>;</li>
                                <li>Install the project's dependencies by executing the <code>> npm install</code> command in the root directory;</li>
                                <li>Enter the <code>/json-server</code> directory and start the mock REST API by running <code>> json-server db.json</code>;</li>
                                <li>Back into the root directory of the project, run <code>> npm start</code>;</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}