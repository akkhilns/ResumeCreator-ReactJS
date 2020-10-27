import React, { Component } from 'react';

class Separator extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <h5 style={{ marginTop:'4vh'}}>{this.props.title}</h5>
                <hr style={{ marginTop: '0px' }}/>
            </>
        )
    }
}
export default Separator;