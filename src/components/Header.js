import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div class="header-strip row justify-content-center align-items-center">
                <h5>{this.props.title}</h5>
                <div style={{position:"absolute", paddingRight:10, right:0, top:11}}>
                    {
                        window.location.pathname == '/' ? 
                        <Link to='/list' > <Button className="black-btn" onClick={this.addEvent} >List Resumes</Button> </Link>
                        :
                        <Link to='/' > <Button className="black-btn" onClick={this.addEvent} >Create Resume</Button> </Link>
                    }
                </div>

            </div>
        )
    }
}
export default Header;