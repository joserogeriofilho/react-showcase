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
                <div className="col-xs-12 col-xl-8">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="mb-2">Lorem ipsum dolor sit amet</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum gravida leo, eu auctor velit. Sed cursus fermentum consequat. Sed magna quam, sollicitudin eu neque malesuada, tincidunt dignissim ipsum. Ut ut imperdiet magna, id semper massa. Aenean molestie nunc eget ultrices fermentum. Integer quis lorem ut nunc suscipit malesuada. Pellentesque non dolor nec erat molestie egestas laoreet eget nisi.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-md-center mb-4">
                <div className="col-xs-12 col-xl-8">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="mb-2">Vestibulum vel ultrices nisi</h5>
                            <p>Vestibulum vel ultrices nisi, ut lobortis lacus. Fusce pharetra ante sed quam cursus, in pulvinar est interdum. Proin pretium turpis quis vulputate viverra. Ut euismod vehicula ultricies. Fusce tempus quam nunc, ac hendrerit turpis blandit et. Duis imperdiet in arcu nec suscipit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}