import portfolio from "./images/portfolio.svg";

const MiniProjectsData = [
  {
    summary: "[Columbia] The MDW H𝞪 Sky Survey",
    imageSrc: portfolio,
    descriptionHeading: `Brief Description:`,
    description: `This project is a simple implementation of a dark mode toggle switch for a webpage. When the switch is toggled on, the background color of the webpage changes to a dark theme, and the switch circle changes color as well. The implementation is done using HTML, CSS, and JavaScript. The HTML contains the switch input element and label, while the CSS is used to style the switch elements and animate the switch circle. The JavaScript code handles the functionality of the switch, updating the webpage's background color and storing the user's preference using local storage. The result is a basic but effective way to add a dark mode toggle feature to a webpage.`,
    newHeading: `New things I learned:`,
    newDescription: `1. I learned about localStorage, which is a built-in web API that allows web developers to store data on a user's local machine. It provides a simple way to save data locally and retrieve it later.
    2. JSON.stringify(): I also learned about the JSON.stringify() method, which is a built-in JavaScript method that is used to convert a JavaScript object into a JSON string. JSON stands for JavaScript Object Notation and is a lightweight format for storing and transporting data.
    3. localStorage.setItem(): Another thing I learned was the localStorage.setItem() method, which is used to store a key-value pair in the browser's local storage. The setItem() method takes two arguments: the name of the key and the value you want to store.
    4. localStorage.getItem(): I learned about the localStorage.getItem() method, which is used to retrieve a value stored in the browser's local storage. The getItem() method takes the name of the key as an argument and returns the corresponding value.
    5. JSON.parse(): I also learned about the JSON.parse() method, which is a built-in JavaScript method that is used to convert a JSON string back into a JavaScript object. This method is the opposite of JSON.stringify().
    
    Overall, I learned about how to use localStorage to store and retrieve data on a user's local machine, as well as how to use JSON.stringify() and JSON.parse() to convert data between a JavaScript object and a JSON string. These skills can be useful for building web applications that need to store and retrieve user preferences or other data on the user's device.`,
    challengesHeading: `Challenges I faced:`,
    challengesDescription: `I've had some difficulty understanding some of the JavaScript methods used in the code of this project. Specifically, I had trouble understanding localStorage.setItem(), localStorage.getItem(), and JSON.parse(), and how to use them in the context of the project. `,
    linkSource: `https://github.com/paribhandarkar/dark-mode-toggle`,
    linkLive: `https://paribhandarkar.github.io/dark-mode-toggle/`,
  },
  {
    summary: "[Google] Performance Max Experiments",
    descriptionHeading: `Brief Description:`,
    description: `This project is a simple webpage that displays a grid of random images using the Picsum API. The images are displayed inside a container with a shadow effect, and there is a button that allows you to load more images to the container. Clicking the button will add 9 new images to the container, each with a unique random number assigned to it by the API. The webpage also includes some basic styling using CSS, such as setting the background color and adding some padding to the button. Overall, it's a simple but fun project for displaying a variety of random images on a webpage.`,
    linkSource: `https://github.com/paribhandarkar/random-photos`,
    linkLive: `https://paribhandarkar.github.io/random-photos/`,
  },
  {
    summary: "[Google] Internal Ads Experiments",
    descriptionHeading: `Brief Description:`,
    description: `This project is a feedback UI that allows users to give feedback on a website or application. It consists of three rating icons representing different levels of satisfaction, where users can click on the one that best represents their feedback. Once the user selects their level of satisfaction, they can click on the "Send Review" button, which will display a message thanking the user for their feedback and showing the level of satisfaction they selected. The UI is styled with a yellow background color and black borders for the elements inside. This project provides a simple and effective way for users to provide feedback on a website or application.`,
    newHeading: `New things I learned:`,
    newDescription: `1. Working with event listeners in JavaScript to trigger actions based on user interaction.
    2. The importance of understanding the event object in JavaScript and how it can be used to access information about the event that was triggered.
    3. Working with DOM manipulation in JavaScript, including selecting elements and modifying their properties or content.
    4. The concept of parent nodes and how they can be used to access other elements within the same HTML structure.
    5. Writing functions in JavaScript to perform specific tasks and how to call those functions based on user actions.
    6. Troubleshooting common issues that can arise when working with JavaScript and HTML, such as issues with event listeners or selecting the correct elements.`,
    challengesHeading: `Challenges I faced:`,
    challengesDescription: `So, when I was working on this project, I encountered a couple of challenges. Firstly, when I tried to select the rating by clicking on the emoji, I found that I was able to fetch the text, but not the emoji itself. To overcome this issue, I had to use the parentNode property to access the emoji element and retrieve the text.

    Secondly, I noticed that when I selected a rating, the currently selected emoji would remain active, in addition to the newly selected one. To fix this, I created a function called removeActive that would remove the active class from all rating elements before applying it to the newly selected element. This ensured that only one rating element would be active at any given time.`,
    linkSource: `https://github.com/paribhandarkar/feedback-ui`,
    linkLive: `https://paribhandarkar.github.io/feedback-ui/`,
  },
  {
    summary: "[Google] Metered AdBlock Detection Walls",
    descriptionHeading: `Brief Description:`,
    description: `So this project is a temperature converter application that allows users to easily convert temperatures between Celsius, Fahrenheit, and Kelvin. The user interface is simple and intuitive, with three input fields for each unit of temperature. Whenever the user changes the value in one of the input fields, the "computeTemp" function is triggered, which automatically calculates and updates the other input fields based on the selected temperature unit. The result is displayed with a maximum of two decimal places for accuracy.

    The code is written in HTML, CSS, and JavaScript, and uses the switch statement to handle different temperature units. The design is modern and aesthetically pleasing, with a gradient background and bold, readable fonts. Overall, this project is a great example of a practical and functional web application that can be used by anyone who needs to quickly convert temperatures.`,
    newHeading: `New things I learned:`,
    newDescription: `I learned about the onChange attribute. 

    onchange is an HTML attribute that can be used with input elements such as text boxes, drop-down lists, and radio buttons. It is an event handler that gets triggered whenever the user changes the value of the input field and then moves the focus away from that element.
    
    The onchange attribute can be used to specify a JavaScript function that will be executed when the user changes the value of the input field. This function can perform various actions, such as validating the input or updating other elements on the page based on the user's input.
    
    For example, in the temperature converter code, the onchange attribute is used with the Celsius, Fahrenheit, and Kelvin input fields to trigger the computeTemp function whenever the user changes the temperature value in any of those fields.`,
    linkSource: `https://github.com/paribhandarkar/temperature-converter`,
    linkLive: `https://paribhandarkar.github.io/temperature-converter/`,
  },
  {
    summary: "[Google] Earth Content Creation",
    descriptionHeading: `Brief Description:`,
    description: `This is a project that I created using HTML, CSS, and JavaScript. It demonstrates how to create a full-screen background video for a webpage, along with a preloader to show while the video is loading. The webpage features a video background with a low brightness filter to create a subtle and visually appealing effect. I also added a header element containing a title and a play/pause button that allows the user to control the playback of the video.

    In terms of the JavaScript code, I handled the user interaction by toggling the play/pause state of the video and updating the button icon accordingly. Furthermore, I made sure that the preloader is hidden once the video has finished loading using the window.load event. Overall, I think this project is a good example of some basic concepts of web development, including working with HTML video elements, styling with CSS, and adding interactivity using JavaScript.`,
    newHeading: `New things I learned:`,
    newDescription: `I recently learned two new things. The first is the JavaScript event listener "window.addEventListener('load', ...)", which waits for the page to finish loading before executing a specified function. This is useful for ensuring that all elements on a page are available for manipulation or interaction through JavaScript. 

    The second is the HTML attribute "aria-hidden", which is used to hide an element from assistive technologies such as screen readers. It's important to use this attribute correctly to ensure website accessibility for users who rely on assistive technologies.`,
    linkSource: `https://github.com/paribhandarkar/background-video`,
    linkLive: `https://paribhandarkar.github.io/background-video/`,
  },
];

export default MiniProjectsData;
