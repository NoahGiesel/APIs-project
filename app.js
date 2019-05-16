var apiRequest = new XMLHttpRequest();

const title = document.querySelector('#title')
const landingIMG = document.querySelector('#landingImage')

apiRequest.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=H3LLqaHsYFliawvkIED0tmeqfMxcR6ISjTw79is1')

apiRequest.onload = function () {
    var data = JSON.parse(this.response)

    if (apiRequest.status >= 200 && apiRequest.status < 400) {
         
          console.log(data.title)
          title.innerHTML = data.title;
          landingIMG.src = data.hdurl;
          console.log(landingIMG)
         
      } else {
        console.log('error')
      }
     

}


apiRequest.send();