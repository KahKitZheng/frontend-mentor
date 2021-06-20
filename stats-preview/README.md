# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![screenshot of the solution](./images/screenshot-solution.png)

### Links

- Live Site URL: [https://kahkitzheng.github.io/stats-preview/](https://kahkitzheng.github.io/stats-preview/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Use `background-blend-mode` property to add a filter on top of an image.

```css
.card__image {
  background-blend-mode: multiply;
  background-color: var(--accent-main);
}
```

### Continued development

- Start with Mobile-first workflow instead of Desktop-first approach.
- Find a naming convention for CSS variables that works for me.
- Explore advanced CSS properties such as `background-blend-mode`.
