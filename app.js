var apiRequest = new XMLHttpRequest();

const title = document.querySelector('#title')
const landingIMG = document.querySelector('#landingImage')
const hdimage = document.querySelector('#hdImage')
var thisIsTheHDImage;
var thisIsTheNORMALImage;

apiRequest.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=H3LLqaHsYFliawvkIED0tmeqfMxcR6ISjTw79is1')

apiRequest.onload = function () {
    var data = JSON.parse(this.response)

    if (apiRequest.status >= 200 && apiRequest.status < 400) {
         
          console.log(data.title)
          title.innerHTML = data.title;
          landingIMG.src = data.url;
          thisIsTheNORMALImage = data.url;
          console.log(landingIMG)
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