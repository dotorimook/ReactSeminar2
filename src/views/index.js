import React, {Component} from 'react';
import {Segment, Header, Input, Button, List} from 'semantic-ui-react';
import { Todos } from '../models/todos';
import TodoItem from '../components/TodoItem';

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

    toggleDones = (item) => {
        const {todos} = this.state;
        item.done = !item.done;
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
                                <TodoItem
                                    item={item}
                                    toggle={this.toggleDones}
                                />
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