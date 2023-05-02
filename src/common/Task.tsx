import { TaskModel } from "@bryntum/gantt";

export default class Task extends TaskModel {
  static get fields() {
    return [
      "status", // For status column
    ];
  }

  get isLate() {
    return (
      !this.isCompleted && this.deadlineDate && new Date() > this.deadlineDate
    );
  }

  get status() {
    let status = "Not started";

    if (this.isCompleted) {
      status = "Completed";
    } else if (this.isLate) {
      status = "Late";
    } else if (this.isStarted) {
      status = "Started";
    }

    return status;
  }
}
