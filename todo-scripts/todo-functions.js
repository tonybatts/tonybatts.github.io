"use strict"

// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem("todos")

    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

// Modify the completed value on checkbox change
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }
}

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos))  
}

// Render application todos base on filters
const renderTodos = (todos, filters) => {
    const todosEl = document.querySelector("#todos")
    let filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
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

// Remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }  
}

// Get the DOM elements for an individual note 
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
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup todo text
    todoText.textContent = todo.text
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
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl 
}

//Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement("h2")
    const plural = incompleteTodos.length === 1 ? "" : "s"
    summary.classList.add("list-title", "disable-scrollbars")
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`
    return summary
}

