# Sushi Go! Score Tracker

## Project Description

This project is a simple score tracking website for the card game Sushi Go!. The website allows you to choose the number of players (2-5), input their names, their scores for each round, and the final scores for puddings. The calculate button will total each player's final score and the reset scores button will reset all player's scores.


## CSS Features List: 

* The score cards are in a flexbox. On smaller screens, the cards are in a column format and on a larger screen they are displayed side by side in a row or rows.

## JavaScript Features List: 

* The submitplayercount() function uses a javascript for loop to display or hide the correct number of player score cards based on the selection in the player count drop down box. This function is triggered when the submit button is clicked.

* Each calcPScore() function adds together a player's scores using the calculate button in their score card, and displays their total within their total box on the page. 

## Media Queries

* The first media query changes the score card layout from column on small screens to row on larger screens.
* The next media query shows all the footer images on larger screen sizes and adjusts the total input boxes to under the score labels within each score card for awkward screen sizes - this screen size appears on phones when rotated.
* The next media queries remove the images at the top and bottom based on screen size.

