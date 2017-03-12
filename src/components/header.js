/**
 * Created by I330971 on 3/9/2017.
 */
import React, { Component } from 'react';


class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {name: 'John'};
    }
    
    
    
    render() {
        return(
            <div className="jumbotron">
                <h3>Hello, {this.state.name}</h3>
                <h1 className="display-3">Jambo Tickets</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Edit User Settings</a>
                </p>
            </div>
        );
    }

}


export default Header;