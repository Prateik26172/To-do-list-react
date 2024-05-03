import { FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import React from "react";
function Mynav() {
  return (
    <div className="Logo border shadow-sm">
      <img
        className=" pl-5 w-[155px] flex"
        src="pmlogo/pmsquare.png"
        alt="image"
      ></img>
    </div>
  );
}

function Myapp() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);

  const [newTitle, setNewTitle] = useState("");
  const [newTask, setNewTask] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      task: newTask,
      id: Date.now(),
    };
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
  };
  const handleDeleteTodo = (id) => {
    let newTodos = allTodos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    let newCompletedTodos = completedTodos.filter((todo) => todo.id !== id);
    setCompletedTodos(newCompletedTodos);
  };
  const handleComplete = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn =
      dd + "-" + mm + "-" + yyyy + " at " + h + " : " + m + " : " + s;

    let completedItem = {
      ...allTodos[index],
      completedOn: completedOn,
    };

    // Remove the completed task from the to-do list
    let updatedTodoArr = allTodos.filter((_, i) => i !== index);
    setTodos(updatedTodoArr);

    // Add the completed task to the completed list
    let updatedCompletedArr = [...completedTodos, completedItem];
    setCompletedTodos(updatedCompletedArr);
  };

  return (
    <div className="flex justify-center items-center  bg-anotherblue h-screen ">
      <div className="App flex  justify-center items-center flex-col  w-[50%] p-6 gap-5 border shadow-md bg-white rounded">
        <h1 className="flex text-[50px] ">To Do Task</h1>
        <div className="flex Todo-wrapper gap-5  pl-9 pr-9 flex-col">
          <div className="flex gap-5">
            <div className="Todo-input ">
              <div className=" Todo-Name flex gap-3">
                <label htmlFor="Title">
                  <strong>Title:</strong>
                </label>
                <input
                  className="border flex text-center border-black rounded"
                  type="text"
                  placeholder="Fill the title here!"
                  id="Title"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="Todo-Name flex gap-3">
              <label>
                <strong>Task:</strong>
              </label>
              <input
                className="border flex text-center  border-black rounded"
                type="text"
                placeholder="Fill task here!"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
            </div>
            <div className="Todo-Name">
              <button
                className="bg-red border-black border rounded bg-anotherblue text-white w-[40px]"
                type="button"
                placeholder="Click the button"
                onClick={handleAddTodo}
              >
                Add
              </button>
            </div>
          </div>
          <hr className="border-1 border-black" />
          <div className="flex rounded gap-5">
            <button
              className={`isCompleteScreen ${
                isCompleteScreen === false && "active"
              } border border-black rounded-full text-white bg-anotherblue w-[90px] hover:bg-sky-700`}
              onClick={() => setIsCompleteScreen(false)}
            >
              To do
            </button>
            <button
              className={`isCompleteScreen ${
                isCompleteScreen === true && "active"
              } border border-black rounded-full text-white bg-black  w-[100px] hover:bg-lime-700`}
              onClick={() => setIsCompleteScreen(true)}
            >
              Completed
            </button>
          </div>
          <div className="To-do-list">
            <div className="items flex rounded pl-[20px] gap-3 flex-col">
              {isCompleteScreen === false &&
                allTodos.map((item, index) => {
                  return (
                    <div
                      className="todo-list-item flex justify-between w-full border shadow-xl pl-[20px]"
                      key={index}
                    >
                      <div className="flex flex-col">
                        <h1 className="text-[25px] ">
                          {/* title */}
                          <strong>{item.title}</strong>
                        </h1>
                        {/* task */}
                        <p>{item.task}</p>
                      </div>

                      <div className="flex gap-5 pr-[20px] flex-row">
                        <button
                          className="hover:text-red-700"
                          onClick={() => handleDeleteTodo(item.id)}
                        >
                          <FaTrash className="h-[50px] " />
                        </button>
                        <button
                          className="text-lime-700"
                          onClick={() => handleComplete(index)}
                        >
                          <FaCheck className="h-[50px]" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              {isCompleteScreen === true &&
                completedTodos.map((item, index) => (
                  <div
                    className="todo-list-item flex justify-between w-full border shadow-xl pl-[20px]"
                    key={index}
                  >
                    <div className="flex flex-col">
                      <h1 className="text-[25px] ">
                        {/* title */}
                        <strong>{item.title}</strong>
                      </h1>
                      {/* task */}
                      <p>{item.task}</p>
                      <p>
                        <small>Completed on: {item.completedOn}</small>
                      </p>
                    </div>
                    <div className="flex gap-5 pr-[20px] flex-row">
                      <button
                        className="hover:text-red-700"
                        onClick={() => handleDeleteTodo(item.id)}
                      >
                        <FaTrash className="h-[50px] " />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Myprofile() {
  return (
    <div>
      <Mynav />
      <Myapp />
    </div>
  );
}
