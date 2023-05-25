# Feedback UI

This project is a feedback UI that allows users to give feedback on a website or application. It consists of three rating icons representing different levels of satisfaction, where users can click on the one that best represents their feedback. Once the user selects their level of satisfaction, they can click on the "Send Review" button, which will display a message thanking the user for their feedback and showing the level of satisfaction they selected. The UI is styled with a yellow background color and black borders for the elements inside. This project provides a simple and effective way for users to provide feedback on a website or application.

## Demo

You can try out the application by visiting [this link](https://paribhandarkar.github.io/feedback-ui/).

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

To get started with this project, clone the repository and open the `index.html` file in your preferred web browser.

## New Things I Learned

1. Working with event listeners in JavaScript to trigger actions based on user interaction.
2. The importance of understanding the event object in JavaScript and how it can be used to access information about the event that was triggered.
3. Working with DOM manipulation in JavaScript, including selecting elements and modifying their properties or content.
4. The concept of parent nodes and how they can be used to access other elements within the same HTML structure.
5. Writing functions in JavaScript to perform specific tasks and how to call those functions based on user actions.
6. Troubleshooting common issues that can arise when working with JavaScript and HTML, such as issues with event listeners or selecting the correct elements.

## Challenges I faced

So, when I was working on this project, I encountered a couple of challenges. Firstly, when I tried to select the rating by clicking on the emoji, I found that I was able to fetch the text, but not the emoji itself. To overcome this issue, I had to use the **`parentNode`** property to access the emoji element and retrieve the text.

Secondly, I noticed that when I selected a rating, the currently selected emoji would remain active, in addition to the newly selected one. To fix this, I created a function called **`removeActive`** that would remove the active class from all rating elements before applying it to the newly selected element. This ensured that only one rating element would be active at any given time.

![Untitled video - Made with Clipchamp](https://github.com/paribhandarkar/feedback-ui/assets/76446574/494c17f3-f8b2-4f41-b049-f123d2fa5805)
