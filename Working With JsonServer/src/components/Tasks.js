/*
 * @Author: Murphy
 * @Date: 2021-07-03 21:49:08
 * @LastEditTime: 2021-07-04 11:27:15
 */
import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {/* {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))} */}
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        );
      })}
    </>
  );
};

export default Tasks;
