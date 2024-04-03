let btn1 = document.querySelector("#hp-add");
let btn2 = document.querySelector("#mp-add");
let btn3 = document.querySelector("#lp-add");

let inp1 = document.querySelector("#hp-task");
let inp2 = document.querySelector("#mp-task");
let inp3 = document.querySelector("#lp-task");

let ul1 = document.querySelector("#hptd");
let ul2 = document.querySelector("#mptd");
let ul3 = document.querySelector("#lptd");
let ul4 = document.querySelector("#hpip");
let ul5 = document.querySelector("#mpip");
let ul6 = document.querySelector("#lpip");
let ul7 = document.querySelector("#hpd");
let ul8 = document.querySelector("#mpd");
let ul9 = document.querySelector("#lpd");

// function addTask (inp,ul,toUl,finalUl){
//     return function(){
//         let value = inp.value;
//         let task = document.createElement("li");
//         task.classList.add("todo-tasks");
//         let pro = document.createElement("button");
//         task.textContent = value;
//         pro.innerText = "move to progress";
//         pro.classList.add("movetopro");
//         pro.addEventListener("click", function () {
//             ToDotoProgress(value, ul, toUl,finalUl);  // Corrected the variable name
//         });
//         task.appendChild(pro);
//         ul.appendChild(task);
//         inp.value = "";
//     };
// };

// function ToDotoProgress(value, fromUl, toUl,finalUl) {
//     let task = findTask(value, fromUl);
//     if (task) {
//         task.remove();
//     }
//     let task2 = document.createElement("li");
//     task2.classList.add("progress-tasks");
//     let don = document.createElement("button");
//     task2.textContent = value;
//     don.innerText = "move to done";
//     don.classList.add("movetodone");
//     don.addEventListener("click", function () {
//         ProgresstoDone(value, toUl,finalUl);
//     });
//     task2.appendChild(don);
//     toUl.appendChild(task2);
// }

// function ProgresstoDone (value,toUl,finalUl){
//     let task = findTask(value,toUl);
//     if(task){
//         task.remove();
//     };
//     let task3 = document.createElement("li");
//     task3.classList.add("done-tasks");
//     task3.textContent = value;
//     finalUl.appendChild(task3);
// }

// function findTask (value,ul){
//     let tasks = ul.getElementsByTagName("li");
//     for(let i=0 ; i<tasks.length ; i++){
//         if(tasks[i].textContent.trim() === value){
//             return tasks[i];
//         }
//     };
//     return null;
// };

// btn1.addEventListener("click", addTask(inp1, ul1, ul4, ul7));
// btn2.addEventListener("click", addTask(inp2, ul2, ul5, ul8));
// btn3.addEventListener("click", addTask(inp3, ul3, ul6, ul9));

function addTask(inp, ul, toUl, finalUl) {
    return function () {
        let value = inp.value.trim();
        if (value !== "") {
            let task = document.createElement("li");
            task.textContent = value;
            
            let pro = document.createElement("button");
            pro.innerText = "move to progress";
            pro.classList.add("movetopro");
            pro.addEventListener("click", function () {
                task.remove(); // Remove the task from the "To Do" list
                ToDotoProgress(value, toUl, finalUl);
            });
            
            task.appendChild(pro);
            ul.appendChild(task);
            inp.value = "";
        }
    };
}

function ToDotoProgress(value, toUl, finalUl) {
    let task = document.createElement("li");
    task.textContent = value;
    
    let don = document.createElement("button");
    don.innerText = "move to done";
    don.classList.add("movetodone");
    don.addEventListener("click", function () {
        task.remove();
        ProgresstoDone(value, finalUl);
    });

    task.appendChild(don);
    toUl.appendChild(task);
}

function ProgresstoDone(value, finalUl) {
    let task = document.createElement("li");
    task.textContent = value;
    finalUl.appendChild(task);
}

btn1.addEventListener("click", addTask(inp1, ul1, ul4, ul7));
btn2.addEventListener("click", addTask(inp2, ul2, ul5, ul8));
btn3.addEventListener("click", addTask(inp3, ul3, ul6, ul9));
