# CSS Loading Spinners

> Simple loading spinners in pure CSS.

[![NPM](https://img.shields.io/npm/v/css-loading-spinners.svg?style=flat)](https://www.npmjs.com/package/css-loading-spinners)
[![License](https://img.shields.io/github/license/Susurrus-LLC/css-loading-spinners.svg?style=flat)](https://github.com/nai888/css-loading-spinners/blob/master/LICENSE)

## Installation

Add CSS Loading Spinners to your project using your favorite package manager:

```bash
$ npm i --save css-loading-spinners
```

or:

```bash
$ yarn add css-loading-spinners
```

## Usage

All spinners must be contained within a `div` with the `cls-spinner` class. Within this, place the `div` for the spinner itself.

```html
<div class="cls-spinner">
  <div class="cls-circle cls-spin"></div>
</div>
```

For a list of all possible spinners, visit the [demo page](#demo).

## Customization

If you need to change the color, size, or margin of the spinner, these are adjustable by changing the relevent variables using CSS loaded after the CSS Loading Spinners CSS.

```css
:root {
  /* default values below */
  --cls-color: #558B6E;
  --cls-sec-color: #EEEEEE;
  --cls-size: 5rem;
  --cls-margin: 1rem;
  --cls-speed: 2s; /* time halved for flip-flop and signal animation */
}
```

These variables can also be set using JavaScript.

```javascript
var rootStyles = document.documentElement.style
rootStyles.setProperty('--cls-color', '#558B6E')
rootStyles.setProperty('--cls-sec-color', '#EEEEEE')
rootStyles.setProperty('--cls-size', '5rem')
rootStyles.setProperty('--cls-margin', '1rem')
rootStyles.setProperty('--cls-speed', '2s')
```

## Demo

View a demo at <https://susurrus-llc.github.io/css-loading-spinners>.
