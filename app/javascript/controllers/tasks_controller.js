import ApplicationController from "./application_controller";

/* This is the custom StimulusReflex controller for TasksReflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {
  sort(event) {
    let element = document.getElementById("tasks-list"); // ul
    let task_elements = document.getElementsByClassName("task-item"); // li
    let tasks = Array.from(task_elements).map((task, index) => {
      return { id: task.dataset.taskId, position: index + 1 };
      // [{id: "8", position: 1}, {id: "7", position: 2}, {id: "6", position: 3}]
    });

    element.dataset.tasks = JSON.stringify(tasks);
    this.stimulate("TasksReflex#sort", element);
  }
}
