// ToDo
//captions
//underlining on section heads larger for first letter in Ice weasel

////// init function to kick it all off //////////////////////
/////////////////////////////////////////////////////////
function mainInit(){
    ///// Declare variables /////
    window.home             = document.getElementById("home");
    window.mainContent      = document.getElementById("mainContent");
    window.thematicSection  = document.getElementById("thematicSection");
    window.iconicSection    = document.getElementById("iconicSection");
    window.whimsicalSection = document.getElementById("whimsicalSection");
    window.contactSection   = document.getElementById("contactSection");
    window.contactLinks     = document.getElementsByClassName("contactLink");
    window.scrollArrow      = document.getElementById("scrollArrow");
    window.thematicImgs     = document.getElementsByClassName("thematicImg");
    window.iconicImgs       = document.getElementsByClassName("iconicImg");
    window.whimsicalImgs    = document.getElementsByClassName("whimsicalImg");

    ///// Hide content sections ///////
   drawMainContent();


    ////// Add Event Listeners ////////
    home.addEventListener("click", drawMainContent);
    document.getElementById("thematicBlurb").addEventListener("click", drawThematicSection);
    document.getElementById("iconicBlurb").addEventListener("click", drawIconicSection);
    document.getElementById("whimsicalBlurb").addEventListener("click", drawWhimsicalSection);
    scrollArrow.addEventListener("click", scrollToTop);
    ////// Add Event Listener to contact links ////////
    for(var i= 0; i<contactLinks.length; i++){
        contactLinks[i].addEventListener("click", drawContactSection);
    }

}
document.addEventListener("DOMContentLoaded", mainInit);


///////// function to draw main content /////////
function drawMainContent(){
   thematicSection.style.display="none";
   iconicSection.style.display="none";
   whimsicalSection.style.display="none";
   contactSection.style.display="none";
   mainContent.style.display="block";
    if (screen.width >= 1200){
        scrollArrow.style.display="none";
    }
  scrollToTop();
}

///////// functions to draw sections ///////////
function drawThematicSection(){
    mainContent.style.display="none";
    thematicSection.style.display="block";
    if (screen.width >= 1200){
        scrollArrow.style.display="inline-block";
         ////// Add Event Listener to images ////////
         for(var m=0; m<thematicImgs.length; m++){
            thematicImgs[m].addEventListener("click", drawLightbox);
        }
    }
   scrollToTop();
}

function drawIconicSection(){
    mainContent.style.display="none";
    iconicSection.style.display="block";
    if (screen.width >= 1200){
        scrollArrow.style.display="inline-block";
         ////// Add Event Listener to images ////////
         for(var m=0; m<iconicImgs.length; m++){
            iconicImgs[m].addEventListener("click", drawLightbox);
        }
    }
    scrollToTop();
}

function drawWhimsicalSection(){
    mainContent.style.display="none";
    whimsicalSection.style.display="block";
    if (screen.width >= 1200){
        scrollArrow.style.display="inline-block";
         ////// Add Event Listener to images ////////
         for(var m=0; m<whimsicalImgs.length; m++){
            whimsicalImgs[m].addEventListener("click", drawLightbox);
        }
    }
    scrollToTop();
}

function drawContactSection(){
    mainContent.style.display="none";
    thematicSection.style.display="none";
    iconicSection.style.display="none";
    whimsicalSection.style.display="none";
    contactSection.style.display="block";
    scrollToTop();
}

function scrollToTop(){
    window.scrollTo(0,0);
}

function drawLightbox(e){
    var lightbox  = document.createElement("div"),
        imgCapDiv = document.createElement("div");
    var extraDiv = document.createElement("div");
    var extraExtraDiv = document.createElement("div");
    var capDiv = document.createElement("p");
    var imgDiv = document.createElement("img");
    var imgCaption =  e.target.parentElement.lastElementChild;


    lightbox.id="lightbox";
    imgCapDiv.id="imgCapDiv";
    extraDiv.id="extraDiv";
    extraExtraDiv.id="extraExtraDiv";
    imgDiv.id="imgDiv";
    capDiv.id="capDiv";
    imgDiv.className="imgSelf";


    imgDiv.setAttribute("src", e.target.getAttribute("src") );

    capDiv.innerHTML = imgCaption.innerHTML;
    extraExtraDiv.appendChild(imgDiv);
    extraExtraDiv.appendChild(capDiv);
    extraDiv.appendChild(extraExtraDiv);
    imgCapDiv.appendChild(extraDiv);
    lightbox.appendChild(imgCapDiv);

    document.body.appendChild(lightbox);

    lightbox.addEventListener("click", function(e){
        this.remove(this);
        //lightbox.parentNode.removeChild(lightbox);
    })
}
