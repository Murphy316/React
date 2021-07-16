/*
 * @Author: Murphy
 * @Date: 2021-06-27 23:53:12
 * @LastEditTime: 2021-07-04 15:49:19
 */
import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState([]);

  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  //fetch one task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  //delete task
  //id is the task id that u just clicked
  //task.id is the id from dummy list
  //when I click task2 the id is 2,
  //I want to keep all the id but not 2 (deleting)
  //so task.id !== id:
  //when task.id !== id, will save it, if task.id === id, will delete it

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    // setTasks([
    //   ...tasks,
    //   {
    //     id: Math.floor(Math.random() * 1000) + 1,
    //     // text: task.text,
    //     // day: task.day,
    //     // reminder: task.reminder,
    //     ...task,
    //   },
    // ]);
    // console.log(task);
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      //update
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
    console.log(id);
  };

  return (
    <Router>
      <div className="container">
        <Header onChangeShow={() => setShow(!show)} showAddBtnColor={show} />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {show && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                <p>There is no task</p>
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
