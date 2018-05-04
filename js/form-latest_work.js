(function() {
  

  var btnPhoto = document.querySelector(".Photo");
  var btnDesign = document.querySelector(".Design");
  var btnPrint = document.querySelector(".Print");
  var imagePhoto = document.getElementById("image-Photo");
  var imageDesing = document.getElementById("image-Desing");
  var imagePrint = document.getElementById("image-Print");
    

    function showImagePhoto() {  ///нажатие на кнопку "ФОТО"
          imagePhoto.style.display = "block";
          imageDesing.style.display = "none";
          imagePrint.display = "none";
  }

   function showImagePhoto(){  //нажатие на кнопку "ДИЗАЙН"
        imagePhoto.style.display = "none";
          imageDesing.style.display = "block";
          imagePrint.display = "none";
   }
    function showImagePhoto(){    //нажатие на кнопку "ПРИНТ"
        imagePhoto.style.display = "none";
          imageDesing.style.display = "none";
          imagePrint.display = "block";
   }


  btnPhoto.addEventListener('click', showImagePhoto);
  btnDesign.addEventListener('click', showImageDesing);
  btnPrint.addEventListener('click', showImagePrint);
 
  
})();