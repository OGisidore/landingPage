
var product = document.querySelector(".product")
var optproduct = document.querySelector("#products")
var company = document.querySelector(".company")
var optcompany = document.querySelector("#company")
var connect = document.querySelector(".connect")
var optconnect = document.querySelector("#connect")
const displayNav = {
    product:(event)=>{
        console.log('hello');
        optproduct.classList.toggle("active")
        let img = event.target.querySelector("img")
        console.log(img);
        img.classList.toggle("active")

    },
    company:(event)=>{
        console.log('hello');
        optcompany.classList.toggle("active")
        let img = event.target.querySelector("img")
        console.log(img);
        img.classList.toggle("active")

    },
    connect:(event)=>{
        console.log('hello');
        optconnect.classList.toggle("active")
        let img = event.target.querySelector("img")
        console.log(img);
        img.classList.toggle("active")

    }
}
product.onclick = displayNav.product
company.onclick = displayNav.company
connect.onclick = displayNav.connect