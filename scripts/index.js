// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from"../components/navbar.js"
let n=document.getElementById("navbar");
console.log(n);
n.innerHTML=navbar();

import { searchNewz } from "./fetch.js";


let cat=document.getElementById("sidebar").children;
console.log(cat);
function catSearch(){
    console.log(this.id);
    let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`
    searchNewz(url,this.id).then((data)=>{
        append1(data.articles);
        
console.log(data);

    })
}
let append1=(data)=>{
    detailed_news.innerHTML=null;
    data.forEach(({description,title,urlToImage})=>{
        
        let des = document.createElement("h3");
        let tit = document.createElement("p");
        let img = document.createElement("img");
        des.innerText = description;
        tit.innerText =title;
        img.src = urlToImage;
        let container=document.getElementById("detailed_news");
        container.append(des, tit, img);
    })
}

for(let el of cat){
    el.addEventListener("click",catSearch);
}


