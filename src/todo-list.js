import { Component, Fragment } from "react";

class TodoList extends Component {
    render() {
        return (
            <Fragment>
                <input placeholder="输入待办事项" />
                <button>提交</button>
                <ul>
                    <li>a</li>
                    <li>b</li>
                </ul>
            </Fragment>
        );
    }
}

export default TodoList;
