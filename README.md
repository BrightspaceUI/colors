# vui-colors

[![Bower version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

This component contains [Sass variables](http://sass-lang.com/) for the VUI color palette.

For further information on this and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

## Installation

`vui-colors` can be installed from [Bower][bower-url]:
```shell
bower install vui-colors
```

Or alternatively from [NPM][npm-url]:
```shell
npm install vui-colors
```

Depending on which installation method you choose, use that path when doing the SASS import:

```scss
@import "bower_components/vui-colors/colors.scss";
// or...
@import "node_modules/vui-colors/colors.scss";
```

## Usage

To use a particular color, reference the variable name in your SASS:

```sass
div {
	background-color: $vui-color-saphirella;
}
```

The list of available color variable names is [in the source](/colors.scss).

## Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-colors
[bower-image]: https://img.shields.io/bower/v/vui-colors.svg
[npm-url]: https://www.npmjs.org/package/vui-colors
[npm-image]: https://img.shields.io/npm/v/vui-colors.svg
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-colors
[ci-image]: https://travis-ci.org/Brightspace/valence-ui-colors.svg?branch=master
[dependencies-url]: https://david-dm.org/brightspace/valence-ui-colors
[dependencies-image]: https://img.shields.io/david/Brightspace/valence-ui-colors.svg
