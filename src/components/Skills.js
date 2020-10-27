import React, { Component } from 'react';
import 
{
    Container,
    Row,
    Col,
    Form,
    Button
}
from 'react-bootstrap';
import ReactTags from 'react-tag-autocomplete';
import Separator from './Separator';

class Skills extends Component{
    constructor(props){
        super(props);
        this.state={
            tags: [

            ],
            suggestions: [
                { id: 1, name: "HTML" },
                { id: 2, name: "CSS" },
                { id: 3, name: "PHP" },
                { id: 4, name: "Javascript" },
                { id: 5, name: "Jquery" },
                { id: 6, name: "OOPS" },
                { id: 7, name: "JAVA" },
                { id: 8, name: "Android" },
                { id: 9, name: "iOS" },
                { id: 10, name: "React" },
            ]
        }

        this.reactTags = React.createRef()
    }

    onDelete (i) {
        const tags = this.state.tags.slice(0)
        tags.splice(i, 1)
        this.setState({ tags })
        this.props.getSkills(tags);
    }
     
    onAddition (tag) {
        const tags = [].concat(this.state.tags, tag)
        this.setState({ tags })
        this.props.getSkills(tags);
    }

    render(){
        return(
            <>
            <Separator title="Skills"/>

            <Form.Group>
                <ReactTags
                    ref={this.reactTags}
                    tags={this.state.tags}
                    suggestions={this.state.suggestions}
                    onDelete={this.onDelete.bind(this)}
                    onAddition={this.onAddition.bind(this)} />
            </Form.Group>
            </>
        )
    }
}
export default Skills;