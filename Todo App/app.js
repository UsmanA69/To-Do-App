var list = document.getElementById("list");

function addto(){
    var To_Do = document.getElementById("TO_DO");
    
    //    LI 
    var li = document.createElement("li");
    var Text = document.createTextNode(To_Do.value);
    li.appendChild(Text);




    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.appendChild(editText);
    li.appendChild(editBtn);
    editBtn.setAttribute("onclick","EditItems(this)");

     
    

    var delBtn = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    delBtn.setAttribute("onclick","deleteItems(this)");
    delBtn.appendChild(delText);
    li.appendChild(delBtn);
    
    To_Do.value = "";
    list.appendChild(li);

  
}

function deleteItems(e){
    e.parentNode.remove();
    
    
 
}


function deleteAll(){
    list.innerHTML = "";
}



function EditItems(x){
    var value = x.parentNode.firstChild.nodeValue;
    var editTODO = prompt("Enter edit todo",value);
    value = editTODO;
    x.parentNode.firstChild.nodeValue = editTODO;


}
