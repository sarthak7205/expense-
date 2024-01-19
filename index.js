
// const form = document.getElementById('fe');

// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//         console.log("hello")
       
// });

const form = document.getElementById('fe');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const obj = {
        expense: event.target.exp.value,
        description: event.target.des.value,
        category: event.target.cat.value,
    };

    const uniqueKey = Date.now().toString();
    localStorage.setItem(uniqueKey, JSON.stringify(obj));

    const listItem = document.createElement('li');
    const text = document.createTextNode(`${obj.expense}\t${obj.description}\t${obj.category}`);
    listItem.appendChild(text);
      const ed=document.createElement('button')
      const del=document.createElement('button')
       ed.innerText='edit'
       ed.className="btn btn-primary btn-sm"
       
       del.innerText='delete'
       del.className="btn btn-danger btn-sm"
    const rec = document.getElementById('rec');
    listItem.appendChild(ed);
    listItem.appendChild(del);
    rec.appendChild(listItem);
   

    del.onclick = function () {
        handledelete( listItem,uniqueKey);
    };
    ed.onclick= function(){
        handledit(listItem,obj,uniqueKey);
    }
    form.reset();
    
});
function handledelete( li,uk)
{
     li.remove()
      localStorage.removeItem(uk)
}
function handledit(li,obj,uk){
    document.getElementById('exp').value = obj.expense;
    document.getElementById('des').value = obj.description;
    document.getElementById('cat').value = obj.category;
    localStorage.removeItem(uk)
li.remove();
}