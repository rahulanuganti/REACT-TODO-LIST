
const Form = ({inputText, setInputText, setTodos, todos, setStatus}) =>{
    
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    //To stop the default behaviour.. use e.preventDefault();
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000}
        ]);
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return(
        <form>
            <div className="input-wrapper">
                <input value={inputText} onChange={inputTextHandler} type="text" name="" className="todo-input" />
                <button onClick={submitTodoHandler} type="submit" className="todo-button">
                    <i className="fas fa-plus-square"></i>
                </button>
            </div>
            
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;