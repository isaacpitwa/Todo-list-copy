import './style.css';
import {
  addTodo, displayTodos, getData, getIsEditing, saveEdit,
} from './functions.js';

window.onload = () => {
  getData();
  displayTodos();
};
const desc = document.querySelector('#add-todo');
desc.addEventListener('keyup', (event) => {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    event.preventDefault();
    if (!getIsEditing())addTodo();
    else saveEdit();
  }
});
