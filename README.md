# accessibility

##Bonus

###High Contrast Mode

Introduced new color mode for enhanced visibility, 
Button next to the font size changing buttons to toggle high contrast mode
Highlights:
- If active, it's active on all the pages
- Nice animation from light to dark mode
- Chosen Black-Yellow (Non-Blue colors) as this has a decreased 
  scattering effect (physics) and therefore appears sharper/richer in contrast to the reader

## Exercise 2 - Accessible Design

### Contrast ratio for texts

Improved contrast for all the website text including the navbar
so that it complies with the WCAG-Standard

Unsolved issue: For the select options such as visible on the
registration page, the WCAG-Standard is not reached. But since
this is dependent on the webbrowser and type of device the website
is accessed by, it's hard to change.

### Page Regions

Identified Page Regions (ARIA roles) for index.html, empty.html, article.html, login.html:
- banner
- navigation
- button  
- main
- article
- complementary
- contentinfo



### Font size 

The font size is dynamically changeable on index.html

- use aria-label for aria support

### Reading  order (screen reader)

Counter intuitive: 
- The legend of "Basic Information" has an (Optional) in it although
it should be the required information part.
  
- Jaws always says "Ungültige Eingabe" when accessing a text field on the login page.

ToDo: not sure if this section is already done?

## Exercise 4 – Accessible forms

### Form control labelling

Added label tags for all input controls. Reordered some labels to ensure they are read before the input control.

TODO: Check with screen reader for fluidity and usability.

### Related control grouping

Grouped basic information and additional information in Create New Account section using fieldset and legend. Also grouped login and register forms (may not be necessary)

### Form input validation

Added a function to update error messages according to the specific error. These error messages are clickable and will focus on the corresponding input field. In addition, when any error is present, the general error message will appear. Otherwise, it will be removed.

ToDo: Set up aria-live on all error messages? Change small tag to indicate it is clickable to focus the corresponding input field. Test with screen reader.

## Exercise 5 – Accessible images


## Exercise 6 – Accessible tables



## Exercise 7 – Accessibility test

### Wave:
article.html: 
- Homepage button in the navigation bar has no value text. (ok)
- the page has no headings (ok)

empty.html:
- Homepage button in the navigation bar has no value text. (ok)
- missing first level heading <h1> (ok)

### CSS disabled:
article.html:
- inaccessible design menu (ok)
- twice the button increase font size and decrease font size as well as twice add contrast button (ok)
- about contact us help etc. all on one line what does that mean?
- no headings (ok)

index.html:
- about contact us help etc. all on one line what does that mean?
- twice the button increase font size and decrease font size as well as twice add contrast button (ok)
- are the studies and researches marked as complentary aria label? (ok)
- Login is not correctly integrated in the navigation?
- heading sizes? can there be several h1 on the same page in different sections? 

empty.html:
- missing headings (not found lowercase, or faculty also in lowercase letters) (ok)
- twice the button increase font size and decrease font size as well as twice add contrast button (ok)
- inaccessible design menu (ok)

login.html:
- twice the button increase font size and decrease font size as well as twice add contrast button (ok)
- Login is not correctly integrated in the navigation

### JAWS:
increase/ decrease font size button come before navigation: should we change that?
skip links for directly go to footer etc? cant hear them

### Open points:
how is login handled in navigation?
how are the additional buttons handled (twice increase/decrease font size and add contrast)? (ok)

navigation, coloring inverting, underlining items?
login.html: Login and create new account on the line and not in the box?

what about the contact us, help etc.? also make a list out of it, (ok)
skip links for directly go to footer etc? should be done now ?????????