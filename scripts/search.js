// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js"
let n = document.getElementById("navbar");
console.log(n);
n.innerHTML = navbar();

import { searchNewz, append } from "./fetch.js";

let search = (e) => {
    if (e.key == "Enter") {
       let query = document.getElementById("search_input").value
       let url=`https://masai-mock-api.herokuapp.com/news?q=${query}`
       console.log(query);
        searchNewz(url,query).then((data) => {
            let con=document.getElementById("results");
            append(data.articles,con)

        })
    }
};
document.getElementById("search_input").addEventListener("keydown",search);











