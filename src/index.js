var superContentContainer;   // #superContentContainer
var contentContainer;        // #contentContainer
var questionContainer;       // #question-container
var firstQuestion;           // .question (first one)

document.addEventListener('wheel', )
function replaceVerticalScrollByHorizontal(event) {
    superContentContainer = document.querySelector('#superContentContainer');
    if (event.deltaX != 0 && Math.abs(event.deltaY) < 1) {
      return; 
    } else if (Math.abs(event.deltaY) > 0) {
      superContentContainer.scroll(superContentContainer.scrollLeft + event.deltaY , 0);
    }
    event.preventDefault();
}

// window.addEventListener('wheel', replaceVerticalScrollByHorizontal, {passive: false});

// document.addEventListener("DOMContentLoaded", function(event) {
//     const titleRect = document.querySelector('#hacktxtitle').getBoundingClientRect();
//     superContentContainer = document.querySelector('#superContentContainer');
//     contentContainer = document.querySelector('#contentContainer');
//     const contentRect = superContentContainer.getBoundingClientRect();
//     if (titleRect.right > contentRect.right) {
//         const contentMid = (contentRect.width) / 2.0;
//         const titleMid = titleRect.left + (titleRect.width / 2.0);
//         superContentContainer.scrollLeft = (titleMid - contentMid);
//     }
//     questionContainer = document.querySelector('#questions-container');
//     const questions = document.querySelectorAll(".question");
//     firstQuestion = questions[0];
//     for (i = 0; i < questions.length; i++) {
//         questions[i].addEventListener("click", function() {
//           this.classList.toggle("active");
//           var content = this.nextElementSibling;
//           if (content.style.display === "block") {
//             content.style.display = "none";
//           } else {
//             content.style.display = "block";
//           }
//           resizeBackground(false);
//         });
//     }
//     window.onload = () => {resizeBackground(true)};
//     window.onresize = () => {resizeBackground(true)};
//     superContentContainer.onscroll = replaceVerticalScrollByHorizontal
// });

// function resizeBackground(shouldResizeParallax) {
//   // resize faqs container if necessary
//   questionContainer.style.columnWidth = (firstQuestion.offsetWidth + 64) + 'px';
//   questionContainer.style.width = 'auto';
//   questionContainer.style.width = (questionContainer.scrollWidth + 1) + "px";

//   // resize background layers if necessary
//   const els = document.querySelectorAll('.stretch-bg');
//   els[0].style.width = (contentContainer.offsetWidth + 200) + "px";
//   if (shouldResizeParallax) {
//     els[1].style.width = (contentContainer.offsetWidth + 200) + "px";
//   }
// }

function parallax() {
    if (window.innerWidth > 670) {
      window.addEventListener("scroll", function (e) {
        const target = document.querySelectorAll(".mountains");
        var index = 0,
          length = target.length;
        for (index; index < length; index++) {
          var pos = window.pageXOffset * target[index].dataset.scroll;
          target[index].style.transform = "translate3d(" + pos + "px, 0px, 0px)";
        }
      });
    }
  }
