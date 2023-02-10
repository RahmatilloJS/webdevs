const btn = document.querySelector('.fa-bars')
const closer = document.querySelector('.btn')
const body = document.querySelector('html')
const body2 = document.querySelector('body')
const img = document.querySelector('.img-nav')
const img1 = document.querySelector('.img-navs')
const mobile = document.querySelector('.mobile-nav')

img.addEventListener('click', (e)=>{
    e.preventDefault()
    body.classList += (' black')
    body2.classList += (' black')
    img.classList.add('none')
    img1.classList.remove('none')
})
img1.onclick = function(e){
    img1.classList.add('none')
    body.classList.remove('black')
    body2.classList.remove('black')
    img.classList.remove('none')
    e.preventDefault()
}
btn.onclick = function(e){
    mobile.classList.remove('none')
    e.preventDefault()
}

closer.onclick = function(e){
    mobile.classList.add('none')
    e.preventDefault()
}














//bot token
// alert("salom")
let telegram_bot_id = "5856404888:AAGpizb1r-dTmjZgQ0uWsSTdD2e22kh9m1c"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
let chat_id = 1120480340; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
let u_name, email, message;
let ready = function() {
    u_name = document.getElementById("name").value;
    // console.log(u_name);
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    // telNumber = document.getElementById("tel_number").value;
    message = "Ismi: " + u_name + "\nEmail: " + email + "\nIzoh: " + message ;

};
let sendtelegram = function() {
    ready();
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
   
    document.getElementById("message").value = "";
   
    return false;
};

// const productContainer = [...document.querySelectorAll(".box2")]
// const nextBtn = [...document.querySelectorAll(".strel-left")]
// const preBtn = [...document.querySelectorAll(".strel-left")]

// productContainer.forEach(function(item, i){
//     let container = item.getBoundingClientRect();
//     let container_width = container.width;
//     nextBtn[i].addEventListener ('click', ()=>{
//         item.scrollLeft+=container_width
//     })
//     preBtn[i].addEventListener ('click', ()=>{
//         item.scrollLeft+=container_width
//     })
    
// })















// //bot token
// // alert("salom")
// let telegram_bot_id = "5856404888:AAGpizb1r-dTmjZgQ0uWsSTdD2e22kh9m1c"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
// //chat id
// let chat_id = 1120480340; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
// let u_name, email, message;
// let ready = function() {
//     u_name = document.getElementById("name").value;
//     // console.log(u_name);
//     email = document.getElementById("email").value;
//     message = document.getElementById("message").value;
//     // telNumber = document.getElementById("tel_number").value;
//     message = "Ismi: " + u_name + "\nEmail: " + email + "\nIzoh: " + message ;

// };
// let sendtelegram = function() {
//     ready();
//     let settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
//         "method": "POST",
//         "headers": {
//             "Content-Type": "application/json",
//             "cache-control": "no-cache"
//         },
//         "data": JSON.stringify({
//             "chat_id": chat_id,
//             "text": message
//         })
//     };
//     $.ajax(settings).done(function(response) {
//         console.log(response);
//     });
//     document.getElementById("name").value = "";
//     document.getElementById("email").value = "";
   
//     document.getElementById("message").value = "";
   
//     return false;
// };



