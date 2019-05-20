var apiRequest = new XMLHttpRequest();
var apiRequest2 = new XMLHttpRequest();
var apiRequest3 = new XMLHttpRequest();

const mars_first = document.querySelector('#mars_first')
const mars_first_h5 = document.querySelector('#mars_first_h5')
const mars_first_p = document.querySelector('#mars_first_p')
const mars_first_p2 = document.querySelector('#mars_first_p2')
const mars_first_status = document.querySelector('#mars_first_status')
const mars_second = document.querySelector('#mars_second')
const mars_second_h5 = document.querySelector('#mars_second_h5')
const mars_second_p = document.querySelector('#mars_second_p')
const mars_second_p2= document.querySelector('#mars_second_p2')
const mars_second_status= document.querySelector('#mars_second_status')



const cloud_percentage= document.querySelector('#cloud_percentage')
const longitude= document.querySelector('#longitude')
const latitude= document.querySelector('#latitude')
const cloud= document.querySelector('#cloud')
const earth__image= document.querySelector('#earth__image')
const date__earth= document.querySelector('#date__earth')
const planet__earth= document.querySelector('#planet__earth')






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
        console.log('error mars image request problem')
      }
     

}


apiRequest.send();


function hdImageOnHover() {
    landingIMG.src = thisIsTheHDImage;
}
 
function normalImageOnLeave() { 
    landingIMG.src = thisIsTheNORMALImage;
}



   
apiRequest2.open('GET', 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=H3LLqaHsYFliawvkIED0tmeqfMxcR6ISjTw79is1')

apiRequest2.onload = function () {
    var data = JSON.parse(this.response)

    if (apiRequest2.status >= 200 && apiRequest2.status < 400) {
         
      mars_first.src = data.photos[0].img_src;
      mars_first_p.innerHTML =   "launch date : "+data.photos[0].rover.launch_date;
      mars_first_p2.innerHTML =   "landing date : " + data.photos[0].rover.landing_date; 
      mars_first_status.innerHTML =   "status : " + data.photos[0].rover.status;
      
      
      mars_second.src = data.photos[785].img_src;
      mars_second_p.innerHTML =   "launch date : "+data.photos[785].rover.launch_date;
      mars_second_p2.innerHTML =   "landing date : " + data.photos[785].rover.landing_date; 
      mars_second_status.innerHTML =   "status : " + data.photos[785].rover.status; 
             
      } else {
        console.log('error second mars image request')
      }
     

} 

apiRequest2.send();




//form section (earth) 
 

function checked() { 
   apiRequest3.open('GET', "https://api.nasa.gov/planetary/earth/imagery?lon="+longitude.value+"&lat="+latitude.value+"&cloud_score="+cloud.checked+"&api_key=H3LLqaHsYFliawvkIED0tmeqfMxcR6ISjTw79is1")


  apiRequest3.onload = function () {
    var data = JSON.parse(this.response)

    if (apiRequest3.status >= 200 && apiRequest3.status < 400) {
        cloud.checked === true   ? cloud_percentage.innerHTML =  "Cloud : " + data.cloud_score + " %.":  cloud_percentage.innerHTML = "Cloud : Cloud wasn't checked!";
        earth__image.src = data.url;
        date__earth.innerHTML = "Date : "+  data.date;
        planet__earth.innerHTML = "Planet : "+ data.resource.planet;
             
      } else {
        console.log('error earth api request') 
        date__earth.innerHTML = "API server error";

         
      }
     

} 

apiRequest3.send();

}

