var apiRequest = new XMLHttpRequest();
var apiRequest2 = new XMLHttpRequest();

const title = document.querySelector('#title')
const landingIMG = document.querySelector('#landingImage')
const hdimage = document.querySelector('#hdImage')
const description = document.querySelector('#description')
var thisIsTheHDImage;
var thisIsTheNORMALImage;

apiRequest.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=H3LLqaHsYFliawvkIED0tmeqfMxcR6ISjTw79is1')

apiRequest.onload = function () {
    var data = JSON.parse(this.response)

    if (apiRequest.status >= 200 && apiRequest.status < 400) {
         
        title.innerHTML = "Image name : " +data.title;
        description.innerHTML =data.explanation;
        landingIMG.src = data.url;
        thisIsTheNORMALImage = data.url;
        thisIsTheHDImage = data.hdurl;
         
      } else {
        console.log('error')
      }
     

}


apiRequest.send();


function hdImageOnHover() {
    landingIMG.src = thisIsTheHDImage;
}
 
function normalImageOnLeave() { 
    landingIMG.src = thisIsTheNORMALImage;
}





//carousel iniz

$(function() {
    $('#myCarousel').carousel();
});


//carousel selector 

const carousel_img0 = document.querySelector('#carousel_img0')
const carousel_img1 = document.querySelector('#carousel_img1')
const carousel_img2 = document.querySelector('#carousel_img2')
const carousel_img3 = document.querySelector('#carousel_img3')
const carousel_img4 = document.querySelector('#carousel_img4')

 
 var array = [];

apiRequest2.open('GET', 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=H3LLqaHsYFliawvkIED0tmeqfMxcR6ISjTw79is1')

apiRequest2.onload = function () {
    
    var data = JSON.parse(this.response)

    if (apiRequest2.status >= 200 && apiRequest2.status < 400) {
        for ( var i = 0 ; i< 500 ; i += 100) 
        var variabile = array[i] 
        console.log(variabile)
        variabile.src = data.photos[i].img_src; 
         
      } else {
        console.log('error')
      }
     

}

apiRequest2.send();
