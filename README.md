# Frontend Mentor - Maker pre-launch landing page solution

This is a solution to the [Maker pre-launch landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/maker-prelaunch-landing-page-WVZIJtKLd). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! That doesn’t look like an email address"

### Screenshot

![](./readme/makeprelauch.png)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/maker-prelaunch-landing-page-gKyw07p69c)
- Live Site URL: [Live Url](https://github.com/FelipeAmorimDev/Pre-Launch-Landing-Page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- CSS Optimized
- JavaScript
- BEM

### What I learned

```js
const isValidEmail = formElement.email.validity.valid
```
Usa a verificação de email automatico feita pelo html para retonar um boolean informando se o campo esta valido ou não.

```js
formElement.email
```
Da para acessar todos os campos do form através da notação .

## Author

- Website - [Felipe Amorim](https://github.com/FelipeAmorimDev/)
- Frontend Mentor - [@FelipeAmorimDev](https://www.frontendmentor.io/profile/FelipeAmorimDev)