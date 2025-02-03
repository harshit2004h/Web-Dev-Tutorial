import "./App.css";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [Finished, setFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const saveToLS = (e) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = (e) => {
    setFinished(!Finished);
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodo = todos.filter((item) => {
      return item.id != id;
    });
    setTodos(newTodo);
    saveToLS();
  };

  const handleDelete = (e, id) => {
    let newTodo = todos.filter((item) => {
      return item.id != id;
    });
    setTodos(newTodo);
    saveToLS();
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodo = [...todos];
    newTodo[index].isCompleted = !newTodo[index].isCompleted;
    setTodos(newTodo);
    saveToLS();
  };

  return (
    <>
      <Navbar />
      <div className="md:container md:mx-auto md:w-2/4 mt-5 mb-5 mx-1 rounded-xl bg-violet-100 flex-row items-center p-5 min-h-[85vh] border-2 border-black">
        <div className="text-center">
          <h1 className="font-bold text-2xl">
            iTask - Manage your todos at one place
          </h1>
        </div>
        <div className="addTodo">
          <div className="font-bold text-l mt-4 mb-2">Add a Todo</div>
          <div className="addBox flex gap-3">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              placeholder="Write Here"
              className="rounded-full px-3 py-1 h-7 md:w-11/12 w-10/12 border-none "
            />
            <button
              disabled={todo.length <= 3}
              onClick={handleAdd}
              className="disabled:bg-gray-700 disabled:cursor-not-allowed bg-violet-800 hover:bg-violet-900 px-2 py-1 rounded-md md:w-1/12 w-2/12 text-white font-bold text-sm"
            >
              Save
            </button>
          </div>
          <div className="flex gap-2 items-center mt-5">
            <input
              type="checkbox"
              onChange={toggleFinished}
              checked={Finished}
              className="h-4 w-4 rounded-full"
            />
            <label for="show">Show Finished</label>
          </div>
        </div>
        <div className="Separator bg-gray-300 h-0.5 mx-4 mt-4"></div>
        <div className="mt-4">
          <h1 className="font-bold text-l">Your Todos</h1>
          <div className="allTodos mt-2">
            {todos.length === 0 && <div>No Todos to display</div>}
            {todos.map((item) => {
              return (
                (Finished || !item.isCompleted) && (
                  <div
                    className="todo1 flex items-center gap-2 justify-between mb-1.5"
                    key={item.id}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        name={item.id}
                        onChange={handleCheckbox}
                        type="checkbox"
                        id={item.id}
                        checked={item.isCompleted}
                        className="h-3.5 w-3.5"
                      />
                      <label
                        className={item.isCompleted ? "line-through" : ""}
                        for="todo"
                      >
                        {item.todo}
                      </label>
                    </div>
                    <div className="buttons flex gap-2">
                      <button
                        onClick={(e) => {
                          handleEdit(e, item.id);
                        }}
                        className="rounded-md bg-violet-800 hover:bg-violet-900 px-2 py-1 w-11/12 text-white font-semibold text-xs"
                      >
                        Edit
                      </button>
                      <button
                        onClick={(e) => {
                          handleDelete(e, item.id);
                        }}
                        className="rounded-md bg-violet-800 hover:bg-violet-900 px-2 py-1 w-11/12 text-white font-semibold text-xs"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
