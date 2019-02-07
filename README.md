# CSS Loading Spinners

> Simple loading spinners in pure CSS.

[![NPM](https://img.shields.io/npm/v/css-loading-spinners.svg?style=flat)](https://www.npmjs.com/package/css-loading-spinners)
[![License](https://img.shields.io/github/license/nai888/css-loading-spinners.svg?style=flat)](https://github.com/nai888/css-loading-spinners/blob/master/LICENSE)

## Installation

Add CSS Loading Spinners to your project using your favorite package manager:

```bash
$ npm i --save css-loading-spinners
```

or:

```bash
$ yarn add css-loading-spinners
```

## Customization

If you need to change the color, size, or margin of the spinner, these are adjustable by changing the relevent variables:

```css
:root {
  /* default values below */
  --cls-color: var(--green); /* #558B6E */
  --cls-sec-color: var(--gray); /* #EEEEEE */
  --cls-size: 5rem;
  --cls-margin: 1rem;
  --cls-speed: 2s; /* time halved for flip-flop and signal animation */
}
```

## Demo

View a demo at <https://nai888.github.io/css-loading-spinners>.
