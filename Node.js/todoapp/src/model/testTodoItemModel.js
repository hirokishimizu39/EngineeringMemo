import { TodoItemModel } from "./model/TodoItemModel.js";

const item = new TodoItemModel({
    title: "テスト",
    completed: false,
});

const completedItem = new TodoItemModel({
    title: "テスト",
    completed: true,
});

console.log(item);
console.log(completedItem);
console.log(item.id !== completedItem.id);