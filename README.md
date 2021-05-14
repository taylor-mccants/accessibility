# accessibility

##Bonus

### High Contrast Mode

Introduced new color mode for enhanced visibility, 
Button next to the font size changing buttons to toggle high contrast mode
Highlights:
- If active, it's active on all the pages
- Nice animation from light to dark mode
- Chosen Black-Yellow (Non-Blue colors) as this has a decreased 
  scattering effect (physics) and therefore appears sharper/richer in contrast to the reader
  
### Magnifier Function

Magnifier lense on the index page
- Functionality to activate zoom window
- (Not perfect, but works)
- only available for Firefox

### Accessible Video
Inserted a video on the climate article, explaining topics about human made climate change. 
Highlights: 
- Using the AblePlayer (https://ableplayer.github.io/ableplayer/)
- AblePlayer is highly accessible
- Best performing in comparison to other web players (http://kensgists.github.io/apt/)



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
As informative images we have identified the following images: The "Lorem Ipsum Logo" on the top left on each page and 
the three pictures on the index.html page. For making theses images accessible to people using screen readers we used the alt
attribute of the image tag. Before adding the alt attribute the images where not accessible to people using screen readers.

In the article.html, we found a complex image which shows the average temperature over time. We added an alt attribute to make
it more accessible. Furthermore, there is a description to text which made accessible with the aria-describedby tag. We chose
the aria-describedby tag as most screen readers support aria labels whereas only few screen readers recognize the linkage
figcaption. Furthermore, older browser do not support the html 5 tags like the figcaption.
TODO: further extension with pros and cons

## Exercise 6 – Accessible tables

In the original code header cells and data cells did not have the correct html tags. So we changed the tags for header
cells to the th tag and for data cells to the td tag. As the table consist of row and column headers we added the scope
attribute to signify whether a header applies to a row or column. Furthermore, for headers which span multiple columns
resp. rows we set the scope attribute to colgroup resp. rowgroup.

## Additional features

- Contrast mode
- text magnifier
- increasing/ decreasing font size
- accessible video

## Exercise 7 – Accessibility test

For testing accessibility, we used a three steps testing approach. First, we started to look at webpages with the Wave plugin
in Chrome. We found that a button in the navigation bar did not have any value text. We also found that on the empty page
there was no h1 tag but a h6 tag which we replaced. 
After applying the changes to the code, we started with step two. We looked at the webpages with disabled CSS. We found, 
that we forgot to apply the changes in the navigation to index and article
page. We also discovered that the login link was not part of the navigation menu and that the link in the footer were not
represented as a navigation bar but as separate links. 
In the third step, we used JAWS and navigated first through the original website to get a feeling how the navigation 
works on an inaccessible website. Next, we navigated through website with our changes to the code. The first thing we
noticed was, that it is very difficult for a not impaired person to just use the keyboard and listen to screen reader 
for navigation, as we already have additional visual information and prior knowledge of the website. 

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
