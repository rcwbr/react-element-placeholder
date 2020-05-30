# react-element-placeholder

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg)](https://github.com/RichardLitt/standard-readme)

A React component to display a placeholder until an asynchronously-loaded element is ready to display.

The `react-element-placeholder` package is broken into several components generally composed together to form a useful placeholder. These individual components may also be used independently.
1. `LoadableImage` wraps an `img` element and calls back when the file has been loaded
1. `Placeholder` renders a arbitrary placeholder element until its child reports being loaded
1. `ScaledComponent` determines the correct scaling to fit an element of known size within given dimensions, while maintaining its aspect ratio
1. `SizeMeasure` dynamically determines the dimensions of its parent element

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

## Background

The Placeholder component from `react-element-placeholder` is the default placeholder used for images in the [`runway-react`](https://github.com/rcwbr/runway/tree/master/runway-react) Gallery component.

## Install

``` Bash
TODO: add install instructions after NPM publish
```

## Usage

## API

## Maintainers

[@rcwbr](https://github.com/rcwbr)

## Contribute

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2020 Eric Weber
