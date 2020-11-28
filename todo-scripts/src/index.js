import { setFilters } from "./filters"
import { loadTodos, createTodo } from "./todos"
import { renderTodos } from "./views"

// render todos on initial load
renderTodos()

// Set up search text handler
document.querySelector("#filter").addEventListener("input", (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

// Set up checkbox handler
document.querySelector("#hide-completed").addEventListener("change", (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

// Set up form submission handler
document.querySelector("#new-todo").addEventListener("submit", (e) => {
    const text = e.target.elements.text.value.trim()
    e.preventDefault()

    if (text.length > 0) {
        createTodo(text)
        renderTodos()
        e.target.elements.text.value = ""
    }
})

// Add a watcher for local storage
window.addEventListener("storage", (e) => {
    if (e.key === "todos") {
        loadTodos()
        renderTodos()
    }
})

// Toggle the header on and off
document.querySelector(".hide-show-header").addEventListener("click", () => {
    console.log("clicked")
    document.querySelector(".header").classList.toggle("hide")
    document.querySelector(".hide-show-header").classList.toggle("rotate")
})
    
