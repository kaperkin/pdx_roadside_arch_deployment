
////// init function to kick it all off //////////////////////
/////////////////////////////////////////////////////////
function contactInit() {
	// variable declarations
    window.firstName = document.getElementById("firstName");
    window.lastName = document.getElementById("lastName");
    window.emailAddress = document.getElementById("email");
    window.photo = document.getElementById("photo");
    window.link = document.getElementById("link");
    window.radioBtns = document.getElementsByClassName("radioBtns");
	window.otherBtn = document.getElementById("otherBtn");
	window.otherExplain = document.getElementById("otherExplain");
	window.caption = document.getElementById("caption");
	window.geoLocation = document.getElementById("geoLocation");
    window.photoCheckbox = document.getElementById("photoCheckbox");
    window.linkCheckbox = document.getElementById("linkCheckbox");
    window.photo = document.getElementById("photo");
    window.link = document.getElementById("link");

    // display styling
	otherExplain.style.display = "none";
	photo.style.display="none";
	link.style.display="none";

    // add Event Listeners
    document.getElementById("cancelBtn").addEventListener("click", cancelForm);
    document.getElementById("submitBtn").addEventListener("click", validateForm);
    photoCheckbox.addEventListener("change", showPhotoBox);
    linkCheckbox.addEventListener("change", showLinkBox);
	//adds event listener to each radio button
	for (var i = 0; i < radioBtns.length; i++) {
		console.log(radioBtns[i].value);
		radioBtns[i].addEventListener("change", showOtherExplain);
	}
}

//////// calls init function when DOM loads ////////////
document.addEventListener("DOMContentLoaded", contactInit);

//Checks if otherBtn is checked, then shows/hides input
function showOtherExplain() {
	if (otherBtn.checked) {
		otherExplain.style.display = "block";
	} else {
		otherExplain.style.display = "none";
	}
}

//////// Show photo input when checkbox is checked ////////
function showPhotoBox(){
	if (photoCheckbox.checked){
		photo.style.display="block";
	}else{
		photo.style.display="none";
	}
}

//////// Show link input when checkbox is checked////////
function showLinkBox(){
	if (linkCheckbox.checked){
		link.style.display="block";
	}else{
		link.style.display="none";
	}
}

//////// reset contact form////////
function cancelForm(){
    // resets form to original values unless changed with error messages //
    document.getElementById("contact").reset();
    // resets placeholder values //
    firstName.setAttribute("placeholder", "First Name");
    geoLocation.setAttribute("placeholder", "Location");
    // hides optional inputs //
    showPhotoBox();
    showLinkBox();
    showOtherExplain();
//    // remove error class from required fields //
    if (firstName.getAttribute("class", "error")){
        firstName.classList.remove("error");
    }
    if(geoLocation.getAttribute("class", "error")){
        geoLocation.classList.remove("error");
    }
}

//////// create Form Object function called when form is validated////////
function createFormItem(){
    category = "";
    for(var i=0; i<radioBtns.length; i++){
        if(radioBtns[i].checked){
            category = radioBtns[i].value;
            break
        }
    }

    item = {
        "action": "SAVE",
        "firstName": firstName.value,
        "lastName": lastName.value,
        "emailAddress": emailAddress.value,
        "category": category,
        "otherExplain": otherExplain.value,
        "caption": caption.value,
        "geoLocation": geoLocation.value,
        "photo": photo.files[0],
        "link": link.value
    };
    console.log(item);
    sendPost(item, '/make_submission/');
}


//////// validate fields on form when submit button pressed ////////
function validateForm(){
    //validate first name at least 2 letters long
    if(firstName.value.length < 2){
        firstName.classList.add("error");
        firstName.setAttribute("placeholder", "FIRST NAME IS REQUIRED");
    }else{
        firstName.classList.remove("error");
    }
     //validate geoLocation at least 10 letters long
    if(geoLocation.value.length < 8){
        geoLocation.classList.add("error");
        geoLocation.setAttribute("placeholder", "LOCATION IS REQUIRED");
    }else{
        geoLocation.classList.remove("error");
    }
    // if it passes both validations, send to createFormObject //
    if((firstName.value.length > 2) && (geoLocation.value.length > 8)){
        createFormItem();
    }
}

//////// send form item to post////////
function sendPost(item, url){
    var form_data = new FormData();

    for (var key in item){
        form_data.append(key, item[key]);
    }

    // Create new XMLHttpRequest
    var request = new XMLHttpRequest();
    request.onload = drawMainContent;
    request.open("POST", url);
    //request.setRequestHeader("Content-Type", "multipart/form-data");
    request.send(form_data);
}
