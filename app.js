const inputval=document.querySelector("#input-box");

const listele=document.querySelector("#list-container");

function addTask(){
    if(inputval.value==='')
    alert("you must write something");
   else
   {
      const Li=document.createElement("li");
      Li.innerHTML=inputval.value;
      listele.append(Li);
      let span=document.createElement("span");
      span.innerHTML="\u00d7";
      Li.append(span);
      showdata();
   }
   inputval.value="";
}

listele.addEventListener("click",(e)=>{
     if(e.target.tagName === "LI")
     {
       e.target.classList.toggle("checked");
       showdata();
     }
     else if(e.target.tagName === "SPAN")
     {
        e.target.parentElement.remove();
        showdata();
     }
});

function showdata()
{
    localStorage.setItem("data",listele.innerHTML);
}
function retdata()
{
    listele.innerHTML=localStorage.getItem("data");
}
retdata();
