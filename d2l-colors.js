import '@brightspace-ui/core/components/colors/colors.js';
import '@polymer/polymer/polymer-legacy.js';

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<custom-style>
	<style is="custom-style">
		html {

			/* deprecated */
			--d2l-color-white: #fff;
			--d2l-color-woolonardo: var(--d2l-color-sylvite);
			--d2l-color-titanius: var(--d2l-color-mica);
			--d2l-color-pressicus: var(--d2l-color-corundum);
			--d2l-color-violettine: var(--d2l-color-amethyst-minus-1);
			--d2l-color-panthera: var(--d2l-color-tourmaline-plus-1);
			--d2l-color-koolaudica: var(--d2l-color-peridot);
			--d2l-color-deephonica: var(--d2l-color-malachite);
			--d2l-color-lurite: var(--d2l-color-topaz);
			--d2l-color-buttonic: linear-gradient(to bottom, var(--d2l-color-regolith) 0%, var(--d2l-color-gypsum) 100%);
			--d2l-color-meglor: linear-gradient(to bottom, var(--d2l-color-corundum) 0%, var(--d2l-color-tungsten) 100%);
			--d2l-color-trancition: linear-gradient(to bottom, #fff 0%, var(--d2l-color-regolith) 100%);
			--d2l-color-trixon: linear-gradient(to bottom, var(--d2l-color-regolith) 0%, var(--d2l-color-sylvite) 100%);
			--d2l-color-azurite: var(--d2l-color-zircon-plus-1);
			--d2l-color-celestuba: var(--d2l-color-celestine-minus-1);
			--d2l-color-gravah: var(--d2l-color-amethyst-minus-1);
			--d2l-color-saphirella: var(--d2l-color-zircon-plus-1);
			--d2l-color-chartronic: var(--d2l-color-topaz);
			--d2l-color-celestine-light-1: var(--d2l-color-celestine-plus-2);
			--d2l-color-celestine-light-2: var(--d2l-color-celestine-plus-1);
			--d2l-color-olivine-light-1: var(--d2l-color-olivine-plus-1);
			--d2l-color-olivine-light-2: var(--d2l-color-olivine);
			--d2l-color-zircon-light-1: var(--d2l-color-zircon-plus-2);
			--d2l-color-zircon-light-2: var(--d2l-color-zircon-plus-2);

		}
	</style>
</custom-style>`;

document.head.appendChild($_documentContainer.content);
