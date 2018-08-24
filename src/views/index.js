import React, {Component} from 'react';
import {Segment, Header, Input, Button, List} from 'semantic-ui-react';
import TodoItem from '../components/TodoItem';
import {connect} from 'react-redux';
import {ActionCreators as TodoAction} from '../reducer/todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    onInputChange = (evt)=> {
        this.setState({
            input: evt.target.value
        });
    }
    
    render() {
        const {input} = this.state;
        const {todos, addTodo, toggleTodo} = this.props;
        console.log(todos);
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
                                    // toggle={this.toggleDones}
                                    toggle={()=>{toggleTodo(idx)}}
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
                            onClick={()=>{addTodo(input);}}
                            primary
                            >send</Button>
                        }
                    />
                </Segment>
            </Segment.Group>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('mapstatetopropscalled');
    return {
        todos: state.todos
    }
}

const mapDispatchToParam = (dispatch) => ({
    addTodo: (msg) => {dispatch(TodoAction.addTodo(msg))},
    toggleTodo: (idx) => {dispatch(TodoAction.toggleTodo(idx))}
});

export default connect(mapStateToProps, mapDispatchToParam)(TodoList);