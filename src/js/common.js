


function changeFontSize(increase) {

    var body = document.body;
    size = 100;
    if (body.style.fontSize !=='')
        var size = parseFloat(body.style.fontSize);

    window.console.log("fun " +size)

    var fontIncreaseBtn = document.getElementById("font-increase-button");
    var fontDecreaseBtn = document.getElementById("font-decrease-button");
    if(increase){
        body.style.fontSize = (size+10)+"%";
        fontIncreaseBtn.style.fontSize = (size+10)+"%";
        fontDecreaseBtn.style.fontSize = (size+10)+"%";
    }else{
        body.style.fontSize = (size-10)+"%";
        fontIncreaseBtn.style.fontSize = (size-10)+"%";
        fontDecreaseBtn.style.fontSize = (size-10)+"%";


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
 * Handle Escape and Tab press
 */
function keyPressMenu(e) {

    console.log('key pressed is: ', e.key, ' or ', e.keyCode);

    var dropDowns = document.querySelectorAll('#nav-bar-content .dropdown');
    var dropDownMenus = document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
    // ESCAPE PRESS
    if (e.key === 'Escape' || e.key==='Esc' || e.keyCode === 27) {
        // Closes all menu dropdowns
        for (var j = 0; j < dropDownMenus.length; j++) {
            dropDownMenus[j].classList.remove('show');
            dropDowns[j].ariaExpanded = false;
        }
    }
    // TAB PRESS
    else if (e.keyCode === 9 || e.key === 'Tab') {
        // Finds open menu and checks if it is the same as the event
        for (var k = 0; k < dropDownMenus.length; k++) {
            if (dropDownMenus[k].classList.contains('show')) {
                //if target was the last dropdown item, then collapse menu
                var dropDownItems = dropDownMenus[k].querySelectorAll('.dropdown-item')
                if (e.target === dropDownItems[dropDownItems.length -1]) {
                    dropDownMenus[k].classList.remove('show');
                    dropDowns[k].ariaExpanded = false;
                }
            }
        }
    }
    // SPACEBAR PRESS
    else if (e.keyCode === 32) {
        console.log(e.target)
        e.target.click()
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
        dropDownToggles[i].addEventListener('keydown', keyPressMenu, false);
        }

    var dropDowns = document.querySelectorAll('#nav-bar-content .dropdown');
    var dropDownMenus = document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
    for (var j = 0; j < dropDowns.length; j++) {
        dropDowns[j].addEventListener('keydown', keyPressMenu, false);
        dropDownMenus[j].addEventListener('keydown', keyPressMenu, false);
    }

    document.querySelector('.navbar-toggler')
        .addEventListener('click', toggleNavigation, false);
}, false);
