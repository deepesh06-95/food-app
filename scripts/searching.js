function search()
{  let inpt=document.getElementById("Search");
    
    if(localStorage.getItem("searchitem")===null)
    {
        localStorage.setItem("searchitem",JSON.stringify([]));
    }
    let add=JSON.parse(localStorage.getItem("searchitem"));
    console.log(inpt.value);
    if(inpt.value=="")
    {
        alert("PLEASE TYPE FOR SEARCH RESULTS");
    }
    else
    {
        add.push(inpt.value);
        localStorage.setItem("searchitem",JSON.stringify(add));
        window.location.href="searchresult.html"; 
    }
    
}

export default search