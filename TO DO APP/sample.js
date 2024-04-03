//To Do app
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(event) {
    let value = inp.value;
    let task = document.createElement("li");
    task.textContent = value;
    let del = document.createElement("button");
    del.innerText = "delete";
    del.classList.add("delete");
    task.appendChild(del);
    ul.appendChild(task);
    inp.value = "";
});

ul.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        let par = event.target.parentElement;
        par.remove();
    }
});