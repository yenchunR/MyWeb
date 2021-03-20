var NowIndex;// 儲存當下顯示圖片
var All;//儲存所有圖片
var Dots;

function initGallery() {
    NowIndex = 0;
  
    All = document.getElementsByClassName("imgHolder");
    All[NowIndex].style.opacity = 1;
    Dots = [];
    DotsContainer = document.getElementById("DotsContainer");
    for (var i = 0; i < All.length; i++) {
      var dot = document.createElement("span");
      dot.classList.add("Dots");
      dot.setAttribute("onclick", "moveSlide(" + i + ")");
      DotsContainer.appendChild(dot);
      Dots.push(dot);
    }
    Dots[NowIndex].classList.add("active");
  }
  initGallery();

  function moveSlide(n) {
    var moveSlideAnimClass = {
      forCurrent: "",
      forNext: ""
    };
  
    if (n > NowIndex) {
      //往前
      if (n >= All.length) {
        //6.7...=0
        n = 0;
      }
      moveSlideAnimClass.forCurrent = "moveLeftCurrentSlide";
      moveSlideAnimClass.forNext = "moveLeftNextSlide";
    } else if (n < NowIndex) {
      // 上一張
      if (n < 0) {
        //如果小於第一張
        n = All.length - 1; //n = 5-1 [0,1,2,3,4]
      }
      moveSlideAnimClass.forCurrent = "moveRightCurrentSlide";
      moveSlideAnimClass.forNext = "moveRightNextSlide";
    }
  }

  function initGallery() {
    for (var i = 0; i < All.length; i++) {
      dot.setAttribute("onclick", "moveSlide(" + i + ")");
    }
  }
  
  function moveSlide(n) {
    var i, current, next;
  
    if (n != NowIndex) {
      next = All[n];
      current = All[NowIndex];
      for (i = 0; i < All.length; i++) {
        All[i].className = "imgHolder";
        All[i].style.opacity = 0;
        Dots[i].classList.remove("active");
      }
      current.classList.add(moveSlideAnimClass.forCurrent);
      next.classList.add(moveSlideAnimClass.forNext);
      Dots[n].classList.add("active");
      NowIndex = n;
    }
  }

  rightArrow.addEventListener("click", function plusSlides(n) {
    moveSlide(NowIndex + 1);
  });
  
  leftArrow.addEventListener("click", function plusSlides(n) {
    moveSlide(NowIndex - 1);
  });