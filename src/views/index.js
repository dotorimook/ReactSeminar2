import React, {Component} from 'react';
import {Segment, Header, Input, Button, List} from 'semantic-ui-react';
import { Todos } from '../models/todos';

const Style={
    done: {
        textDecoration:'line-through'
    }
}

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            input: ''
        }
    }

    addTodo = () => {
        const {todos, input} = this.state;
        if(input === '')
            return;
            
        todos.push(new Todos(input));
        this.setState({
            todos:todos,
            input:''
        });
    }

    toggleDones = (idx) => {
        const {todos} = this.state;
        todos[idx].done = !todos[idx].done;
        this.setState({
            todos:todos
        });
    }

    onInputChange = (evt)=> {
        this.setState({
            input: evt.target.value
        });
    }
    
    render() {
        const {todos, input} = this.state;
        return(
            <Segment.Group>
                <Segment>
                    <Header as='h4'>
                        Your Todos...
                    </Header>
                    <List divided selection size='huge'>
                        {todos.map((item, idx) => {
                            return (
                                <List.Item
                                    style={item.done? Style.done:{}}
                                >
                                    <Button
                                    floated='left'
                                    basic = {!item.done}
                                    color = {item.done && 'teal'}
                                    onClick={()=>{this.toggleDones(idx)}}
                                    size='big'
                                    >
                                    Done
                                    </Button>
                                    {item.todo}
                                </List.Item>
                                )
                        })}
                    </List>
                </Segment>
                <Segment>
                    <Input
                    size='big'
                    fluid
                    value={input}
                    onChange={this.onInputChange}
                    placeholder='new Todos...'
                    action={
                            <Button
                            onClick={()=>{this.addTodo();}}
                            primary
                            >send</Button>
                        }
                    />
                </Segment>
            </Segment.Group>
        );
    }
}