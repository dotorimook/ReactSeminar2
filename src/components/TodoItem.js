import React, {Component} from 'react';
import {Button, List} from 'semantic-ui-react';

const Style={
    done: {
        textDecoration:'line-through'
    }
}

export default class TodoItem extends Component {
    render() {
        const {item, toggle} = this.props;
        return (
            <List.Item
                style={item.done? Style.done:{}}
            >
                <Button
                floated='left'
                basic = {!item.done}
                color = {item.done && 'teal'}
                onClick={()=>{toggle(item)}}
                size='big'
                >
                Done
                </Button>
                {item.todo}
            </List.Item>
        )
    }
}

TodoItem.defaultProps = {
    item: {},
    toggle: (item) => {}
}