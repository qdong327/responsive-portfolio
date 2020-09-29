// Global Variables

// Global Functions
function clickMain() {
    unhideIcons();
    moveLeft();
}

function unhideIcons() {
    $(".nav-bar").removeClass("hide", 1000, "swing");
    $(".below").removeClass("hide", 1000, "swing");
}

function moveLeft() {
    $(".top").removeClass("main-fixed");
    $(".top").addClass("main-fixed-left", 1000, "swing");
    $(".end-letter").hide();
    $("#quinn").text("QUINN");
    $("#dong").text("DONG");
    $("#kilkenny").text("KILKENNY");
}

function openNewTab() {
    if (this.id === "github") {
        window.open(
            'https://github.com/qudoki',
            '_blank'
        )
    } else if (this.id === "linkedin") {
        window.open(
            'https://www.linkedin.com/in/dong-qian/',
            '_blank'
        )
    } else if (this.id === "issuu") {
        window.open(
            'https://issuu.com/qiado/docs/20200106-qd.portfolio',
            '_blank'
        )
    } else if (this.id === "resume") {
        window.open(
            './assets/cv.pdf',
            '_blank'
        )
    }
};
// Function to show About Me and hide everything else
function unhideAbout() {
    $(".info").removeClass("hide");
    $(".projects").addClass("hide");
    $(".contact").addClass("hide");
}

// Function to show Projects and hide everything else
function unhideProjects() {
    $(".info").addClass("hide");
    $(".projects").removeClass("hide");
    $(".contact").addClass("hide");
}

// Function to show Contact and hide everything else
function unhideContact() {
    $(".info").addClass("hide");
    $(".projects").addClass("hide");
    $(".contact").removeClass("hide");
}

// Calls
// On clicking main button
$(document).on("click", "#qudoki", clickMain);

// On clicking links to other profiles
$(document).on("click", "#github", openNewTab);
$(document).on("click", "#linkedin", openNewTab);
$(document).on("click", "#issuu", openNewTab);
$(document).on("click", "#resume", openNewTab);

//On clicking nav bar icons
$(document).on("click", "#about", unhideAbout);
$(document).on("click", "#projects", unhideProjects);
$(document).on("click", "#contact", unhideContact);
