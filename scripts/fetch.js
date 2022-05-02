let searchNewz = async (url) => {
    try {
        let query=document.getElementById("search_input").value ;
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log("Error:", err);
    }
}
let append = (data, container) => {

    data.forEach(({ title, url, urlToImage }) => {
        let tit = document.createElement("h3");
        let link = document.createElement("p");
        let img = document.createElement("img");
        tit.innerText = title;
        link.innerText = url;
        img.src = urlToImage;
        container.append(tit, link, img)

    })
}




export{searchNewz,append};



