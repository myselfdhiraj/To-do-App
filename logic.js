// variables 
const btn = document.querySelector('button');
let li = document.querySelector('ul');
const list = document.querySelector('ul');
// const cross = document.querySelector('span');
// console.log(cross) 

function listTask(text){
    const newli = document.createElement('li');
    // newli.innerText = text;
    newli.innerHTML = `${text}<span>\u274C<span>`;
    li.appendChild(newli);
    document.querySelector('input').value = '';

}

btn.addEventListener('click',(text)=>{
    const input = document.querySelector('input').value;
    if(input !=''){
        listTask(input)
    }
})

list.addEventListener('click',(e)=>{
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
    else if(e.target.tagName === "LI"){
        e.target.classList.toggle('tick');
    }
})