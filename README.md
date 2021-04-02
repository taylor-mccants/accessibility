# accessibility


## Exercise 2 - Accessible Design

### Contrast ratio for texts

Improved contrast for all the website text including the navbar
so that it complies with the WCAG-Standard

Unsolved issue: For the select options such as visible on the
registration page, the WCAG-Standard is not reached. But since
this is dependent on the webbrowser and type of device the website
is accessed by, it's hard to change.

### Page Regions

Identified Page Regions (ARIA roles) for index.html:
- banner
- navigation
- button  
- main
- article
- complementary
- contentinfo

ToDo: for all the other pages

### Font size 

The font size is dynamically changeable on index.html

ToDo: Aria Support for these buttons

## Exercise 4 – Accessible forms

### Form control labelling

Added label tags for all input controls. Reordered some labels to ensure they are read before the input control.

TODO: Check with screen reader for fluidity and usability.

### Related control grouping

Grouped basic information and additional information in Create New Account section using fieldset and legend. Also grouped login and register forms (may not be necessary)

### Form input validation

Added a function to update error messages according to the specific error. These error messages are clickable and will focus on the corresponding input field. In addition, when any error is present, the general error message will appear. Otherwise, it will be removed.

ToDo: Set up aria-live on all error messages? Change small tag to indicate it is clickable to focus the corresponding input field. Test with screen reader.

