const date = new Date();
const time = date.getHours();
const header = document.querySelector(".headerColourToggle");
const btn = document.querySelector(".theme-button");
const modalBG = document.querySelector(".modal-card");
const MainTextContent = document.querySelectorAll(".details-title, .details-list, .img-date, .img-description");
const imgTitleColour = document.querySelectorAll(".img-title");
const catalogueID = document.querySelectorAll(".catalogue-id");



//Button click to change theme
document.querySelector(".theme-button").addEventListener("click", lightMode);


function lightMode() {
    document.body.classList.toggle("bodyLightMode");
    header.classList.toggle("headerLightMode");
    modalBG.classList.toggle("modal-light-mode");
    imgTitleColour.forEach(titleColour => {
        titleColour.classList.toggle("text-body-light-mode");
    })

    catalogueID.forEach(catID => {
        catID.classList.toggle("title-light-mode");
    })

    MainTextContent.forEach(textColour => {
        textColour.classList.toggle("catalogue-light-mode");
    })

    if (btn.textContent === "Light Mode") {
        btn.textContent = "Dark Mode";
    }
    else {
        btn.textContent = "Light Mode";
    }
}




//Time of day change theme
// if (time >= 7 && time < 20) {

// }
// else {
//     lightMode();
// }

//System preferences to change theme
const systemColourSetting = window.matchMedia("(prefers-color-scheme: dark)");

if (systemColourSetting.matches == false) {
    lightMode()
}

const searchBar = document.querySelector(".searchbar");
const images = document.querySelectorAll(".img-card");

//--------------------------------------------------------------

// GRAB ALL MODAL & GALLERY ELEMENTS
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");

const modalDesc = document.querySelectorAll(".modal-description-div");
const modalTitle = document.querySelector("#modal-title");
const modalCatalogue = document.querySelector("#modal-catalogue");
const modalContent = document.querySelector("#modal-card");
const modalList = document.querySelector("#modal-list");
const imageContent = document.querySelector(".image-content");
const imageList = document.querySelector(".image-details");

const imgTitle = document.querySelectorAll(".gallery h4");
const imgCatalogue = document.querySelectorAll(".catalogue-id");


// ADDS FOREACH ON THE IMAGES (PREVIEWS VARIABLE) TO LOOP THROUGH EACH IMAGE ON CLICK
previews.forEach(preview => {
    preview.addEventListener("click", () => {

        //OPENS THE MODAL AND PULLS THE FULL RES IMAGE
        modal.classList.add("open");
        original.classList.add("open");
        const originalSrc = preview.getAttribute("data-original");
        original.src = `./Images/full/${originalSrc}`;

        //VARIABLE imgID PULLS THE ID NUMBER MANUALLY ASSIGNED TO EACH IMG ELEMENT

        /* modalTitle.textContent LOADS THE MODAL TITLE, and imgTitle.textContent INPUTS THE TITLE OF THE IMAGE AS SPECIFIED IN THE H4.
           [imgID] PULLS THE ID NUMBER OF THE IMG, WHICH TELLS imgTitle WHICH ONE TO USE */

        let imgID = preview.id;
        /* - NO LONGER NEEDED -------------------------------------------------
        // console.log(imgID)
        // modalTitle.textContent = imgTitle[imgID].textContent;
        // modalCatalogue.textContent = imgCatalogue[imgID].textContent;
        ---------------------------------------------------------------------*/


        //modalDesc LOADS EVERY ELEMENT WITH A .modal-description-div CLASS.
        //THE IF STATEMENT STATES THAT IF THE modal-desc-'number' CLASS IS EQUAL TO THE STRING "modal-desc-'number'", ADD THE CLASS .open TO THAT PARTICULAR ELEMENT.

        if (modalDesc[imgID].classList[0] === `modal-desc-${[imgID]}`) {
            modalDesc[imgID].classList.add("open");
        }
    });
});

// ADDS FOREACH ON THE IMAGES (PREVIEWS VARIABLE) TO LOOP THROUGH EACH IMAGE ON CLICK
previews.forEach(preview => {

    // WHEN CLICKED ON THE OUTSIDE OF THE MODAL POPUP (THE BLACK BACKGROUND, THAT HAS THE .modal CLASS), REMOVE THE .open TAGS FROM THE ELEMENTS.
    modal.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal")) {
            modal.classList.remove("open");
            original.classList.remove("open");

            // let ID2 IS THE SAME AS THE FUNCTION ABOVE, REPEATED AS IN A NEW FUNCTION.
            let imgID2 = preview.id;
            modalDesc[imgID2].classList.remove("open");
        }
    });
})








