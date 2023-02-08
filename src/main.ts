import { v4 } from "uuid";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { Task } from "./interfaces/task";
import { renderTasks } from "./functions/renderTasks";

let tasks: Task[] = [];

const taskForm = document.querySelector<HTMLFormElement>("#taskForm");

taskForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = taskForm["title"] as unknown as HTMLInputElement;
  const description = taskForm["description"] as unknown as HTMLTextAreaElement;

  tasks.unshift({
    title: title.value,
    description: description.value,
    id: v4(),
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks(tasks);

  taskForm.reset();
  title.focus();

  Toastify({
    text: "Task Saved",
  }).showToast();
});

document.addEventListener("DOMContentLoaded", () => {
  tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  renderTasks(tasks);
});
