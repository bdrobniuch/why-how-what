// get the element to animate
var elements = document.getElementsByClassName('fadeScreen');

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView(element) {
  
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY + element.clientHeight/3;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    element.classList.add('animate');
  }
}

// animate element when it is in view
function animate() {
  // is element in view?
  
  for (var i = 0; i < elements.length; i++) {
   inView(elements[i]);
 }
      // element is i view, add class to element
     

}
