import { Component, Fragment } from "react";
import {
    ADD_TODO_LIST_ITEM,
    INPUT_VALUE_CHANGED,
    REMOVE_TODO_LIST_ITEM,
} from "./store/action";
import store from "./store/store";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.submitTodoListItem = this.submitTodoListItem.bind(this);
        this.handleInputChanged = this.handleInputChanged.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);

        // init state
        this.state = store.getState();

        store.subscribe(() => {
            console.log(
                "store state changed, current state should be: " +
                    JSON.stringify(store.getState())
            );
            this.setState(() => store.getState());
        });
    }

    render() {
        return (
            <Fragment>
                <input
                    placeholder="输入待办事项"
                    onChange={this.handleInputChanged}
                />
                <button onClick={this.submitTodoListItem}>提交</button>
                <ul>
                    {this.state.todoList.map((todoListItem, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => this.handleRemoveItem(index)}
                            >
                                {todoListItem}
                            </li>
                        );
                    })}
                </ul>
            </Fragment>
        );
    }

    submitTodoListItem() {
        const action = {
            type: ADD_TODO_LIST_ITEM,
        };
        store.dispatch(action);
    }

    handleInputChanged(event) {
        const action = {
            type: INPUT_VALUE_CHANGED,
            text: event.target.value,
        };
        store.dispatch(action);
    }

    handleRemoveItem(index) {
        const action = {
            type: REMOVE_TODO_LIST_ITEM,
            index,
        };

        store.dispatch(action);
    }
}

export default TodoList;
