import {
    ADD_TODO_LIST_ITEM,
    INPUT_VALUE_CHANGED,
    REMOVE_TODO_LIST_ITEM,
} from "./action";

const initialState = {
    inputValue: "",
    todoList: ["a", "xx"],
};

const reducer = (state = initialState, action) => {
    console.log("reducer running" + JSON.stringify(action));
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case INPUT_VALUE_CHANGED: {
            newState.inputValue = action.text;
            return newState;
        }
        case ADD_TODO_LIST_ITEM: {
            newState.todoList.push(newState.inputValue);
            return newState;
        }
        case REMOVE_TODO_LIST_ITEM: {
            newState.todoList.splice(action.index, 1);
            return newState;
        }
        default:
            return newState;
    }
};

export default reducer;
export { initialState };
