


function changeFontSize(increase) {

    var body = document.body;
    size = 100;
    if (body.style.fontSize !=='')
        var size = parseFloat(body.style.fontSize);

    window.console.log("fun " +size)

    if(increase){
        body.style.fontSize = (size+10)+"%";
    }else{
        body.style.fontSize = (size-10)+"%";
    }
}

/**
 * Open the current clicked menu and close the other menus
 * @param {object} event - The DOM event
 */
function openMenu(event) {
    event.stopPropagation();
    event.preventDefault();

    var currentDropDownButton = event.target;
    var currentDropDownMenu =
        currentDropDownButton.parentNode.querySelector('.dropdown-menu');
    var isOpen = currentDropDownMenu.classList.contains('show');
    var dropDownMenus =
        document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
    for (var j = 0; j < dropDownMenus.length; j++) {
        dropDownMenus[j].classList.remove('show');
    }
    currentDropDownButton.ariaExpanded = false;

    if (!isOpen) {
        currentDropDownMenu.classList.add('show');
        currentDropDownButton.ariaExpanded = true;
    }
}

/**
 * Toggle the navigation content
 * @param {object} event - The DOM event
 */
function toggleNavigation(event) {
    event.stopPropagation();
    event.preventDefault();

    var navbarToggler = event.target;

    var content = document.getElementById('nav-bar-content');
    if (content.classList.contains('collapse')) {
        content.classList.remove('collapse');
        navbarToggler.ariaExpanded = true;
    } else {
        content.classList.add('collapse');
        navbarToggler.ariaExpanded = false;
    }
}

document.addEventListener('DOMContentLoaded', function() {

    accessibilityButtons()

    var dropDownToggles =
        document.querySelectorAll('#nav-bar-content .dropdown-toggle');

        for (var i = 0; i < dropDownToggles.length; i++) {
        dropDownToggles[i].addEventListener('click', openMenu, false);
    }

    document.querySelector('.navbar-toggler')
        .addEventListener('click', toggleNavigation, false);
}, false);
