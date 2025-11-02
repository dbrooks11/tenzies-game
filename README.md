# Tenzies Game

A browser-based implementation of the Tenzies dice game built with React. Players roll ten dice and attempt to get all dice to display the same number by selectively holding dice between rolls.

## Description

Tenzies is a fast-paced dice game where the objective is to roll ten dice until all of them show the same number. Players can hold individual dice between rolls to freeze their values while re-rolling the remaining dice. This project demonstrates state management, conditional rendering, and game logic implementation using React hooks.

## How to Play

1. Click the Roll button to roll all ten dice
2. Click on individual dice to hold them at their current value
3. Click Roll again to re-roll only the unheld dice
4. Continue rolling and holding until all ten dice show the same number
5. Once all dice match, you win the game
6. Click New Game to start over

## Features

- Interactive dice rolling mechanics
- Click to hold and unhold individual dice
- Automatic win condition detection
- Roll counter to track attempts
- New game functionality to reset the board
- Visual feedback for held dice

## Technologies Used

- React
- JavaScript (ES6+)
- HTML5
- CSS3

## Installation

1. Clone the repository
```
git clone https://github.com/dbrooks11/tenzies-game.git
```

2. Navigate to the project directory
```
cd tenzies-game
```

3. Install dependencies
```
npm install
```

4. Start the development server
```
npm start
```

5. Open your browser and visit `http://localhost:3000`

## Learning Objectives

This project was built to practice and understand:

- Managing complex state with useState
- Using useEffect to detect game win conditions
- Handling user interactions and click events
- Implementing game logic in React
- Conditional rendering based on game state
- Working with arrays and array methods in React state

## Game Rules

- Roll all ten dice to start
- Hold dice by clicking on them to lock their values
- Re-roll all unheld dice with the Roll button
- Win by getting all ten dice to display the same number
- Track your rolls to challenge yourself to win in fewer attempts
