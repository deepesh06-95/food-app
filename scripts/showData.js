//getData()
//append()


async function getData(url){

let res=await fetch(url)
let data=await res.json()

return data

}


function append(data,container,container1){

    let {strMeal,strMealThumb,strArea,strCategory,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strInstructions,strYoutube}=data.meals[0];


    
        let div=document.createElement("div");
        let div1=document.createElement("div");
        let img=document.createElement("img");
        // div1.style.marginTop="20%";
        // div1.style.marginBottom="20%";
        img.style.paddingTop="10%";
        img.style.paddingBottom="10%";
        let p=document.createElement("h2");
        let p1=document.createElement("h4");
        let p2=document.createElement("h4");
        let p3=document.createElement("p");
        let p4=document.createElement("h2");
        p4.style.textAlign="center";
        let p5=document.createElement("p");
        p5.style.fontSize="25px";

        p.innerText="Recipe Name --"+strMeal;
        p1.innerText=strArea+" Food";
        p2.innerText="Category --"+strCategory;
        p3.innerText="INGREDIENTS--"+strIngredient1+","+strIngredient2+","+strIngredient3+","+strIngredient4+","+strIngredient5+","+strIngredient6+","+strIngredient7;
        p4.innerText="---------------------------------------------INSTRUCTIONS------------------------------------------------------"
        p5.innerText=strInstructions;
        let s=strYoutube.substring(32);

        div1.innerHTML = `<iframe width="700" height="400" src="https://www.youtube.com/embed/${s}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

        
        img.src=strMealThumb;

        div.append(p,div1,p1,p2,p3);
        
        container.append(div,img);

        container1.append(p4,p5);
        
}

export { getData , append }