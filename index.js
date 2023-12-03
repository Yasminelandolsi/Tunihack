let myBtn = document.getElementsByClassName("button")[0];
let firstpage = document.getElementsByClassName("firstpage")[0];
let secondpage = document.getElementsByClassName("secondpage")[0];
let thirdpage = document.getElementsByClassName("thirdpage")[0];
let fourthpage =  document.getElementsByClassName("fourthpage")[0];


myBtn.onclick = function (event) {
    event.preventDefault();
    firstpage.style.display="none";
    
};

console.log(myBtn)


let scan = document.getElementsByClassName("scan")[0];
scan.onclick = function (event) {
    event.preventDefault();
    secondpage.style.display="none";
        // Get video element and QR result element
        const videoPreview = document.getElementById('video-preview');
        const qrResult = document.getElementById('qr-result');
        const congarts = document.getElementsByClassName('win')[0];
      
        // Initialize the camera and QR code scanner
        function stopCamera() {
            if (scanner) {
              scanner.stop();
              console.log('Camera stopped.');
            }
        }
          
        const scanner = new Instascan.Scanner({ video: videoPreview });
      
        // Event handler for when a QR code is detected
        scanner.addListener('scan', function (content) {
          qrResult.textContent = 'Add points';
          stopCamera();
          videoPreview.style.display='none';
          congarts.style.display='block'

        });
      
        // Start the camera stream
        Instascan.Camera.getCameras().then(function (cameras) {
          if (cameras.length > 0) {
            scanner.start(cameras[0]); // Use the first available camera
          } else {
            console.error('No cameras found.');
          }
        }).catch(function (error) {
          console.error('Error accessing camera:', error);
        });
};
let show = document.getElementsByClassName("scan")[2];
show.onclick = function (event) {
    event.preventDefault();
    firstpage.style.display="none";
    secondpage.style.display="none";
    thirdpage.style.display="none";
    fourthpage.style.display="block";
    
    

};

