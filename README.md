# vui-colors

[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

This component contains a [Polymer](https://www.polymer-project.org/1.0/) web component for the VUI color palette.

For further information on this and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

Looking for SASS-based valence-ui-colors? It’s [over here](https://github.com/Brightspace/valence-ui-colors/tree/sass).

## Installation

`vui-colors` can be installed from [Bower][bower-url]:

```shell
bower install vui-colors
```

## Usage

In order to import the `vui-colors` component, we first need to include the [webcomponents](http://webcomponents.org/polyfills/) polyfill.

```html
<head>
	<script src="https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js"></script>
	...
</head>
```

Then import the [color.html](/colors.html) palette and use the color variables in your CSS.

```html
<head>
	...
	<link rel="import" href="../vui-colors/colors.html">
	<style is="custom-style" include="vui-colors">
		div {
			background-color: var(--vui-color-saphirella, #fff);
		}
	</style>
</head>
```

The list of available color variable names is [in the source](/colors.html).

## Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-colors
[bower-image]: https://img.shields.io/bower/v/vui-colors.svg
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-colors
[ci-image]: https://travis-ci.org/Brightspace/valence-ui-colors.svg?branch=master
