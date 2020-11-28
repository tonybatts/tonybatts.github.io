import { getTodos, removeTodo, toggleTodo } from "./todos"
import { getFilters } from "./filters"

// renderTodos
const renderTodos = () => {
    const filters = getFilters()
    const todosEl = document.querySelector("#todos")
    let filteredTodos = getTodos().filter((todo) => {
        const searchTextMatch = todo.todoText.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    todosEl.innerHTML = ""
    todosEl.appendChild(generateSummaryDOM(incompleteTodos))

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todosEl.appendChild(generateTodoDOM(todo))
        })
    } else {
        const messageEl = document.createElement("p")
        messageEl.classList.add("empty-message")
        messageEl.textContent = "No to-dos to show"
        todosEl.appendChild(messageEl)
    }
}

// generateTodoDOM
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement("label")
    const containerEl = document.createElement("div")
    const checkbox = document.createElement("input")
    const todoText = document.createElement("span")
    const removeButton = document.createElement("button")

    // Setup todo checkbox
    checkbox.setAttribute("type", "checkbox")
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener("change", () => {
        toggleTodo(todo.id)
        renderTodos()
    })

    // Setup todo text
    todoText.textContent = todo.todoText
    containerEl.appendChild(todoText)

    // Setup container
    todoEl.classList.add("list-item")
    containerEl.classList.add("list-item__container")
    todoEl.appendChild(containerEl)

    // Setup todo remove button
    removeButton.textContent = "remove"
    removeButton.classList.add("button", "button--text")
    todoEl.appendChild(removeButton)
    removeButton.addEventListener("click", () => {
        removeTodo(todo.id)
        renderTodos()
    })

    return todoEl
}

// generateSummaryDOM
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement("h2")
    const plural = incompleteTodos.length === 1 ? "" : "s"
    summary.classList.add("list-title")
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`
    return summary
}

export { renderTodos, generateTodoDOM, generateSummaryDOM } 