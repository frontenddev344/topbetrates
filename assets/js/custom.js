

// $(document).ready(function() {

//   $(".toggle").click(function() {
//       $("header").addClass("menuToggle");
//   });
//   $(".close").click(function() {
//       $("header").removeClass("menuToggle");
//   });


  
// });


$(".toggle").click(function(){

  $("header").toggleClass("menuToggle");

});



let buttonToggle = () => {
  const button = document.getElementById("menu-button").classList,
  isopened = "is-opened";
  let isOpen = button.contains(isopened);
  if(isOpen) {
    button.remove(isopened);
  } 
  else {
    button.add(isopened);
  }
} 

// let menutoggle = () => {
//   const header = document.getElementById("toggle").classList,
//   menuToggle = "mobile-menu";
//   let siteHeader = header.contains(menuToggle);
//   if(siteHeader) {
//     header.remove(menuToggle);
//   } 
//   else {
//     header.add(menuToggle);
//   }
// } 