const accessKey = "SopNqUCVv9y8oHNsIcaH_xuBqNol6q_LX_ClGWbCN54";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages()
{
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    console.log(results);
    if(page===1)
    {
        searchResult.innerHTML = "";
    }
    // results.map((result)=>{
    //     const container = document.createElement("div");
    //     const image = document.createElement("img");
    //     const icon = document.createElement("img");
    //     icon.src = "download_icon.jpg";
    //     icon.style.width = "18px";
    //     icon.style.height = "18px";
    //     icon.style.background = "#434989";
    //     const downloadLink = document.createElement("a");
    //     downloadLink.href = result.links.download + '&force=true';
    //     downloadLink.appendChild(icon);
    //     image.src = result.urls.small;
    //     const imageLink = document.createElement("a");
    //     imageLink.href = result.links.html;
    //     imageLink.target = "_blank";
    //     imageLink.appendChild(image);
    //     // imageLink.appendChild(icon);
    //     container.appendChild(imageLink);
    //     container.appendChild(downloadLink);
    //     searchResult.appendChild(container);
    //     // result.links.download + '&force=true'
    // })
    results.map((result) => {
        const container = document.createElement("div");
        const image = document.createElement("img");
        const icon = document.createElement("img");
    
        container.style.position = "relative"; // Ensuring the container is relatively positioned
        container.style.width = "100%";
        container.style.height = "300px";
        container.style.borderRadius = "5px";
        
    
        image.src = result.urls.small;
        image.style.width = "100%";
        image.style.height = "100%";
        image.style.objectFit = "cover";
        image.style.borderRadius = "5px";
        image.style.cursor = "pointer";
        image.style.position = "relative"; // Ensuring the image is relatively positioned
    
        icon.src = "download_icon.jpg";
        icon.style.width = "20px";
        icon.style.height = "20px";
        icon.style.position = "absolute"; // Positioning the icon absolutely
        icon.style.bottom = "5px";
        icon.style.right = "5px";
        icon.style.background = "#c0c4ec"; // Transparent background color
        icon.style.borderRadius = "50%"; // Making it round
    
        const downloadLink = document.createElement("a");
        downloadLink.href = result.links.download + '&force=true';
        downloadLink.appendChild(icon);
    
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
    
        container.appendChild(imageLink);
        container.appendChild(downloadLink);
    
        searchResult.appendChild(container);
    })
    
    showMoreBtn.style.display = 'block';
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})