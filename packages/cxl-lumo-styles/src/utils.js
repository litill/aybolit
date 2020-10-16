// @see https://github.com/vaadin/vaadin-themable-mixin/blob/v1.5.2/register-styles.html
import { CSSResult } from 'lit-element';

let moduleIdIndex = 0;
const styleMap = {};

export const registerGlobalStyles = (styles, options) => {
  const themeId =
    (options && options.moduleId) || `cxl-global-style-module-${(moduleIdIndex += 1)}`;

  if (!Array.isArray(styles)) {
    // eslint-disable-next-line no-param-reassign
    styles = styles ? [styles] : [];
  }

  styles.forEach(cssResult => {
    if (!(cssResult instanceof CSSResult)) {
      throw new Error('An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`.');
    }

    if (!styleMap[cssResult]) {
      const templateElement = document.createElement('template');
      templateElement.innerHTML = `
        <style id="${themeId}">${cssResult.toString()}</style>
      `;
      document.head.append(templateElement.content);

      styleMap[cssResult] = themeId;
    }
  });
};

export const getParents = (element, selector, includeElement = false) => {
  const isWithSelector = selector !== undefined;
  const elements = [];
  let elem = element;

  if (!includeElement) {
    elem = elem.parentElement;
  }

  while (elem !== null) {
    if (elem.nodeType === Node.ELEMENT_NODE) {
      if (!isWithSelector || elem.matches(selector)) {
        elements.push(elem);
      }
    }

    elem = elem.parentElement;
  }

  return elements;
};

/**
 * @typedef {() => void} Callback
 *
 * TODO: Remove this typedef and inline `() => void` type.
 *
 * This typedef is used so that a descriptive type is provided in our
 * automatically generated documentation.
 *
 * An in-line type `() => void` would be preferable, but the generated
 * documentation is `null` in that case.
 *
 * @see https://github.com/WordPress/gutenberg/issues/18045
 */

/**
 * Specify a function to execute when the DOM is fully loaded.
 *
 * @param {Callback} callback A function to execute after the DOM is ready.
 *
 * @example
 * ```js
 * import domReady from '@wordpress/dom-ready';
 *
 * domReady( function() {
 * 	//do something after DOM loads.
 * } );
 * ```
 *
 * @return {void}
 */
// eslint-disable-next-line consistent-return
export const domReady = callback => {
  if (
    document.readyState === 'complete' || // DOMContentLoaded + Images/Styles/etc loaded, so we call directly.
    document.readyState === 'interactive' // DOMContentLoaded fires at this point, so we call directly.
  ) {
    // eslint-disable-next-line no-void
    return void callback();
  }

  // DOMContentLoaded has not fired yet, delay callback until then.
  document.addEventListener('DOMContentLoaded', callback);
};
