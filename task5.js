    function addTask(){
        let input=document.getElementById("taskinput");
        let text=input.value.trim();
        if(text===""){
            alert("please anter a task");
            return;
        }
        let li=document.createElement("li");
        li.innerHTML=`<span>${text}</span>
        <button class="delete-btn">&#128465;</button>`;
        li.querySelector("span").onclick=function(){
            li.classList.toggle("completed");
        };

        li.querySelector(".delete-btn").onclick=function(){
            li.remove();
        };
        document.getElementById("tasklist").appendChild(li);
        input.value="";
    }
    // let dark_mode_toggle=document.querySelector("dark-mode-toggle");
    // let dark_mode=document.querySelector("dark-mode");
    // dark_mode_toggle.onclick=function{
    //     dark_mode.classList.toggle("")
        
    // }

document.addEventListener('DOMContentLoaded', function(){
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.querySelector(".container");

  darkModeToggle.addEventListener( 'click', () => {
    body.classList.toggle('dark-mode');
    const currentMode = body.classList.contains('dark-mode') ? 'Dark' : 'Light';
    darkModeToggle.querySelector('i').classList.toggle('bx-sun');//change icon
    darkModeToggle.querySelector('i').classList.toggle('bxs-moon');//change icon
    darkModeToggle.querySelector('i').classList.toggle('light-mode');//change icon color
  });
});
