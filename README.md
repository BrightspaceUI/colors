# d2l-colors
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/colors)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

This component contains [Polymer](https://www.polymer-project.org/1.0/) web component and [Sass](http://sass-lang.com/) variables, either of which can be used to consume the D2L color palette in your application.

For further information on this and other Brightspace UI components, see the docs at [ui.developers.brightspace.com](http://ui.developers.brightspace.com/).

## Installation

`d2l-colors` can be installed from [Bower][bower-url]:

```shell
bower install d2l-colors
```

## Usage

### Polymer Web Component Variables

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-colors.html`.

```html
<head>
	<script src="../webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="../d2l-colors/d2l-colors.html">
</head>
```

You can then reference the color variables from inside [custom-style](https://www.polymer-project.org/1.0/docs/devguide/styling#custom-style) blocks:

```html
<head>
	<custom-style>
		div {
			background-color: var(--d2l-color-carnelian);
		}
	</custom-style>
</head>
```

'''Note:''' if you're writing a web component, the `custom-style` block can be omitted.

The full list of available color variable names can be found in [d2l-colors.html](https://github.com/BrightspaceUI/colors/tree/master/d2l-colors.html).

### Sass Variables

Alternatively, you can reference the same variables from Sass:

```sass
@import 'bower_components/d2l-colors/d2l-colors.scss';

div {
	background-color: $d2l-color-carnelian;
}
```

The full list of available color variable names can be found in [d2l-colors.scss](https://github.com/BrightspaceUI/colors/tree/master/d2l-colors.scss).

## Coding styles

See the [Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

## Versioning

Commits and PR merges to master will automatically do a minor version bump which will:
* Update the version in `package.json`
* Add a tag matching the new version
* Create a github release matching the new version

By using either **[increment major]** or **[increment patch]** notation inside your merge message, you can overwrite the default version upgrade of minor to the position of your choice.

[bower-url]: http://bower.io/search/?q=d2l-colors
[bower-image]: https://badge.fury.io/bo/d2l-colors.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/colors
[ci-image]: https://travis-ci.org/BrightspaceUI/colors.svg?branch=master

