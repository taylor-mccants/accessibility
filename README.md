# Additional Features 

## High Contrast Mode 

To make the website more accessible to people who have a visual impairment, we introduced a high contrast mode. We placed the button for toggling the contrast mode on and off next to the increase/decrease font size buttons, so that all the accessibility features are in the same location. As soon as the user selects the “contrast mode” button, it activates a color change to enable all background and text to be significantly higher in contrast on all the pages. That means even when the user switches to a new page, the website will still be in the high contrast mode. When clicking the button, the page changes smoothly from “normal mode” to “high contrast mode” to not strain the eyes of the user too much. We choose the colors Black-and-Yellow for the high contrast mode as this has a decreased scattering effect (physics) and therefore appears sharper/richer in contrast to the reader.  

## Magnifier Function 

Another additional feature we introduced is the magnifier function on the homepage, which works similar to a magnifying glass. The users see everything enlarged within a certain rectangle. This feature can also be activated with a button at the top right corner of the page, chronologically after the contrast mode button. This feature helps visually impaired persons similar to the increase/decrease font size. Unfortunately, the magnifier only works in the Firefox browser, however we added an alert to inform users who try to activate it in another browser. Although there are still some imperfections in the functionality due to the code complexity, the tool successfully magnifies the website area where the mouse is hovering.  

## Accessible Video 

The last additional feature we explored is an accessible video. We inserted a video explaining topics about human made climate change on the climate article page. To embed the video into the website we chose to use the AblePlayer library as it is the best performing and the most accessible one compared to other web players according to the following website http://kensgists.github.io/apt/ . The website compared various web player libraries and their accessibility levels, structured by their level of importance of the accessibility requirement. The AblePlayer is accessible with the keyboard where the user can navigate through the control options. We also chose a YouTube video that already contains captions so that we can display subtitles for audio impaired people, which is not always the case for all video sources. 



# Exercise Tasks 

## Exercise 1 – Explore the sample website 

### Interaction with website 

When we were browsing through the webpage, we noticed that the increase/decrease font size buttons were not working as expected. Therefore, we thought it would be beneficial if the text increased in size and successfully implemented the increase/decrease feature.  

For the login form, only colors indicated which entries are possible and which are not. Therefore, additional text is needed to know which field has to be changed, especially for color blind people. Also, the reported error message does not precisely describe whether it is the email format or something else. The same problems can also be improved for the register form. Additionally, in the register form it mentions that the basic information is optional, but it should, instead, state that this information is required to register. Furthermore, Jaws always says "Invalid Entry" when accessing a text field on the login page. This only occurs until the user inputs a valid entry, then Jaws will not say this anymore. 

Another major issue we noticed with the website was the contrast of the text to the background. First, we noticed that the Lorem Ipsum Institute of Technology next to the logo is not sufficiently readable due to the contrast. The second hardly readable text was on the index.html page in the main section. Lastly, except for the title on the article page, the text seems to be grayed out due to  the bad contrast of the text against the background. 

### Website Without CSS 

The first thing we noticed when we turned off the CSS styling of the webpage was that the buttons for increase/decrease font size appear twice. After some browsing, we realized that the second versions of the buttons were for the mobile version of the page. Another issue with the pages was that the navigation was handled with simple individual links and it was not clear which links belong to a submenu. So, we knew we had to change the navigation to lists in order to make the webpage more accessible. The footer also consisted simply out of unspecified <div> tags with links which we wanted to put into a list for a better navigation. Another major issue, which became visible by turning of the CSS styling was that heading tags were not used correctly or not used at all. An example would be the headings for the different articles on the index.html page. 

In the login form, the email label for the email input field was after the actual input field making it very confusing and hard for a user who is visually impaired to fill in the form. The same applied to the password label.  

All these incorrect uses of html tags make it hard for a visually impaired person to navigate the webpage and that is why they had to be corrected. 

## Exercise 2 - Accessible Design 

### Contrast ratio for texts 

For all the website text including the navbar, we improved the contrast so that it complies with the WCAG-Standard. Unfortunately, when the dropdown component is created by the browser, there is a risk that the WCAG contrast standard would not be reached. However, on all of the browsers we checked the current dropdown select component was sufficient. 

### Page Regions 

For the Page Regions (ARIA roles) we determined some main sections to highlight. All of the pages of the website include the following regions: header or banner, navigation bar, main, and footer. These regions are used for skip links that will be explained later. 

In addition, the pages are separated into these main components as well as buttons, articles, complementary components, and contentinfo. These tags were provided to make the user experience more accessible. 

### Accessible font size  

In order to implement this functionality, we added a JavaScript code for scaling the font size dynamically. The font size can not only be increased by one step but by as many steps that are necessary for the site to be readable for the user. In addition, we used aria-labels on the buttons themselves so that JAWS will announce the buttons as “increase font size” and “decrease font size”. 

### Reading order (screen reader) 

One of the most counter intuitive parts of the site was found in the Login page. Originally the labels for the fields “Email” and “Password” were placed after the actual input field. Furthermore, the statements “Please correct the error(s)” could be seen in the CSS disabled mode in the login and register form, which meant a screen reader would have mentioned a mistake even though the users had not tried to login yet. We solved the former issue by changing the order of the html tags. For the latter issue we introduced a JavaScript function which will only show the error statements when the login or registration fails. 

## Exercise 3 – Accessible navigation 

### Headings 

The original website was filled with <div> tags. There were very few identifying tags that could aid accessibility. Specifically, there were clear headers in the article based on font size and weight, so we replaced many of the <div> tags with proper header tags. On the homepage, the section titles “News & Events”, “Studies”, and “Researches” were the top titles and therefore given the <h1> tags. The next level, <h2> was given to the article titles and navigation headers. There were only a few other headers in the other pages, but much less hierarchy than in the homepage. 

### Articles and their titles 

The article tiles begin with an image and then show a title and description. We surrounded the tile with an <article> tag to make it more obvious what it represents. In addition, we added an attribute for “aria-labelledby” to connect the entire tile with the title of each article. This makes it clearer when using a screen reader what that tile represents before listening to the entire description. 

### Menu structure 

Originally, the navigation menu was not well organized. We adjusted this to give it a <nav> tag and put each of the menu options into a list of anchor tags. It is now made up of nav-items and nav-links with dropdown-menus and dropdown-items. The placement of the navigation bar is also important to be in a commonly expectation location such as horizontally along the top. 

In addition to the top navigation including Homepage, etc, the “Studies” and “Researches” sections, as well as the footer, were similar in a sense that they are comprised of links in a navigation manner. Therefore, we also structured them as a list of anchor tags. 

### Dropdown structure 

The dropdown menu options are particularly important because the list of submenu items is not immediately displayed and therefore not naturally read by a screen reader. As we were taught in the lecture slides, the key to informing a user that there is a submenu in a dropdown is to add the attributes “aria-haspopup” and “aria-expanded”. After adding the initial value for aria-expanded as ”false”, JavaScript is used to update the value to “true” when the dropdown menu is toggled on or off. The menu states are also conveyed with a change in color and underline styling in order to highlight a selected menu item. 

### Menu keyboard interaction 

Since keyboard users commonly use specific keys to navigate and activate various page elements, we implemented the important ones that are not included by default. This includes adding the functionality for the SPACE key to activate the menu options, the ESC key to close the submenu, and the TAB key to move to the next menu option while closing the unused dropdown menu. 

### Skip Links 

Skip links are intended to add short cuts for a user interacting with a screen reader. The main sections of the website are highlighted at the start of the screen reading to enable the user to jump to the “header”, “navbar”, “main”, and “footer” sections. The lecture slides instructed us to hide the visibility of the skip-links so that the screen reader could sense them but they would not be displayed on the page. However, when we tried it with this method the screen reader was not sensing the skip links. Therefore, we adjusted the CSS to display the skip links off the page, rather than hiding their visibility. This worked in our tests where JAWS could sense the skip links and they could be easily activated as well as being the first thing read. 

## Exercise 4 – Accessible forms 

### Form control labelling 

In order to improve the screen reader experience, we added label tags to all of the input controls. We also re-ordered some of the labels to ensure they are read before the input control. Although the lecture slides displayed an option to add hidden labels, we felt that each of the input controls in the Login and Register forms should be visible. Therefore, we mainly took the approach of labeling “for” the input field id.  

### Related control grouping 

In order to more easily understand the sections of the forms, we grouped some of them using <fieldset> and <legend> tags. Within the register form we grouped the basic information separately from the additional information. In addition, we grouped the forms themselves as Login and Register because it looked more obvious when CSS was disabled. 

### Form control instructions 

In order to help the users to understand how to complete the form correctly we added some helpers. For example, on the mandatory fields we added the attributes “required” and “aria-required”. Within the register form, the Basic Information section is all required, so therefore the title includes “(required)”, while the Additional Information section has “(optional)” in its title. There are also details about the structure of the password listed below the password field to aid the user in understanding what makes a password valid. 

### Form input validation 

It is important to have input validation in forms to keep the data input clean and functional. The given website already had validation of each of the form controls, however these errors were not properly displayed or organized well for screen readers. The improvements we made include adding a header error message with an assertive aria-live attribute in order to alert users that their form submission was not successful due to errors. Another thing we implemented was adding a list of specific error messages such as “invalid email” or “password must be at least 8 characters” that is hidden from display and can be read by a screen reader and have direct anchor tags to the field causing the error. Upon error caused alert, the error message element takes focus away from the submit button in order to allow the user to tab through the specific errors. These field-specific error messages are also printed below each field in red color to indicate the invalid areas that needs to be addressed. These small messages will also redirect focus to the field they represent when clicked on. These error messages are automatically removed when the user enters a valid input and presses the submit button in the respective form. 

### Tab Ordering 

As with the rest of the design for the website, the user’s ability to tab through the options on the site in the proper order is critical. Therefore, we ensured the order in html was the same order we intended the user to encounter each component. There are no elements with CSS floating them to different parts of the page that go against the html order. 

## Exercise 5 – Accessible images 

We have identified the following informative images on the website: The "Lorem Ipsum Logo" on the top left on each page and the three pictures on the index.html page. For making these images accessible to people using screen readers, we used the alt attribute of the image tag. Before adding the alt attribute, the images where not accessible to people using screen readers.  

In the article.html, we found a complex image which shows the average temperature over time. We added an alt attribute to make it more accessible. Furthermore, there is a description to the image which we first tried to make accessible with the aria-describedby attribute but it seemed not to work as JAWS only mentioned the alt attribute text. We also tested the figcaption version on its own which seemed to bundle description to the picture as it mentioned at the end “end of figure”. In the end we chose a combination of the aria-describedby attribute and the figcaption tag as different screen readers in different browsers do not always mention the figcaption or the describedby the same way and sometimes they do not mention one or the other1. Furthermore, older browsers do not support the html 5 tags like the figcaption. 

## Exercise 6 – Accessible tables 

In the original code, header cells and data cells did not have the correct html tags. So, we changed the tags for header cells to the <th> tag and for data cells to the <td> tag. As the table consist of row and column headers, we added the scope attribute to signify whether a header applies to a row or column. Furthermore, for headers which span multiple columns resp. rows, we set the scope attribute to colgroup resp. rowgroup. 

## Exercise 7 – Accessibility test 

For testing accessibility, we used a three-step testing approach. First, we started to look at webpages with the Wave plugin in Chrome. We found that a button in the navigation bar did not have any value text. We also found that on the empty page there was no h1 tag but a h6 tag which we replaced.  

After applying the changes to the code, we started with step two. We looked at the webpages with disabled CSS. We found that we had only applied navigation improvements to one of the pages and needed to make the same update on the remaining pages. Another finding was a button, which is only used in a mobile version of the page. We also discovered that the login link was not part of the navigation menu and that the link in the footer were not represented as a navigation bar but as separate links. We checked that the login button was inside of the <nav> tag, however we chose not to move it inside the existing navigation link because we wanted to leave it styled to the right side. We changed the footer to a navigation bar since it serves a similar purpose as the main navigation bar, and this makes the footer more accessible.  

In the third step, we used JAWS and navigated first through the original website to get a feeling of how the navigation works on an inaccessible website. Next, we navigated through website with our changes to the code. The first thing we noticed was that it is very difficult for us, having full sight abilities, to just use the keyboard and listen to screen reader for navigation, as we already have additional visual information and prior knowledge of the website. Another challenge was to figure out what JAWS should read out loud and what was normal for it to ignore. These conditions made it challenging for us to test the website with JAWS. However, with practice we improved our tabbing and understanding and were able to judge our website to the best of our abilities. 

When going through input forms on the login.html, we found that the error alert was not working when clicking on the login button in case there was a mistake in the input form. So, we corrected this issue by adding the “alert” attribute alongside the “aria-live” attribute. We also redirected the element focus to a list of input form mistakes which are directly linked to the input fields. After listening to the mistake, the user can directly move to the input field by clicking. Another thing we found was that the skip links were not announced with a visibility hidden, so we changed the links to be displayed outside of the page so they will not be visible but could be mentioned by the screen reader and could be accessed with the tab key. 

# Conclusion 

Working on this project was a great experience and eye opening. We learned a lot about accessibility and all the different kind of aspects which must be considered to make a website accessible to impaired people. Particularly interesting was the strict structure which we had to follow for navigation to make it accessible as normally for styling purposes you might add additional containers which would be confusing for the screen reader. It also made you think about using the proper html tags for each element. Furthermore, we also got to know JAWS and how it feels to navigate a page with it. We acknowledge that it was difficult for us to fully evaluate the accessibility of the website because we often used the senses, we had without even noticing it. Nonetheless, we are confident that we improved the accessibility of the website thanks to the tools such as WAVE and removing CSS. We hope to put our new accessibility knowledge into practice in any future development of websites. 