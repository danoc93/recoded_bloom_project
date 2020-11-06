import { getCheckedTasks } from "../../services/taskService";

export default (req, res) => {
  res.statusCode = 200;
  res.json({ checkedTasks: getCheckedTasks() });
};
