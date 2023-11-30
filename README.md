# Pig-Game

The-complete-javascript-course by Jonas Schmedtmann => 'Section 7: JavaScript in the Browser: DOM and Events Fundamentals'
Play here https://kareem-aez.github.io/Pig-Game


> ## Objective:

The goal is to reach a certain score (e.g., 100 points) before your opponent.
>## Gameplay:

Players take turns rolling a six-sided die.
On a player's turn, they can roll the die as many times as they want, accumulating points with each roll.
### If a player rolls a 1:
They lose all points accumulated during that turn.
Their turn ends, and it's the other player's turn.
### If a player rolls a number other than 1:
They can choose to roll again (risking losing points on a 1) or end their turn, banking the accumulated points.
The accumulated points for each turn are added to the player's total score.
> ## Scoring:

Rolling a 1 ends the turn, and the player scores 0 for that turn.
Rolling other numbers accumulates points (e.g., rolling a 3 adds 3 points to the turn score).
> ## Winning:

The first player to reach or exceed the target score (e.g., 100 points) wins.
