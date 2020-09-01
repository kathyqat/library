# library

This project is for creating a small library app, with added optional data persistence. From The Odin Project's (TOP) [Full Stack Development](https://www.theodinproject.com/courses/javascript/lessons/library) course. 

Codepen link: https://codepen.io/kathyqat/pen/jOqBNNP

This went more smoothly than expected, thanks to doing the secret project before this.

Attempts:  
1. I wanted to target the read status text line with data-index as a custom attribute of span, but it would send an error when set directly in the code. I had to settle with putting the data-index attribute on the div container for each book.
2. Praise JSON stringify() and parse(). I didn't have to create custom functions for saving objects to and retrieving from localStorage, which stores information only as strings.
3. Assigning an object's .prototype does not work in a for/in loop. Which I had written in my notes, but I had missed upon skimming. Object.__proto\__ will properly set up the prototype inheritance if the code is in a loop. 