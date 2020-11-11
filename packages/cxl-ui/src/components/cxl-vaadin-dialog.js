import { DialogElement } from '@vaadin/vaadin-dialog/src/vaadin-dialog';
import { customElement } from 'lit-element';
import { registerStyles } from '@vaadin/vaadin-themable-mixin/register-styles';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { registerGlobalStyles, getParents } from '@conversionxl/cxl-lumo-styles/src/utils';
import { OverlayElement } from '@vaadin/vaadin-overlay/src/vaadin-overlay';
import { CookieManager } from './popup/cookie-manager';
import { TriggerManager } from './popup/trigger-manager';
import { ConditionManager } from './popup/condition-manager';
import { IntegrationManager } from './popup/integration-manager';
import cxlVaadinDialogStyles from '../styles/cxl-vaadin-dialog-css';
import cxlVaadinDialogGlobalStyles from '../styles/global/cxl-vaadin-dialog-css';

registerStyles('vaadin-dialog-overlay', cxlVaadinDialogStyles, {
  moduleId: 'cxl-vaadin-dialog-overlay-module'
});

/**
 * Modifies the popup maker template
 * and perform certain tasks just like Popup maker.
 */
@customElement('cxl-vaadin-dialog')
export class CXLVaadinDialog extends DialogElement {
  static get properties() {
    return {
      wide: {
        type: Boolean,
        notify: true,
        reflectToAttribute: true
      },

      phone: {
        type: Boolean,
        notify: true,
        reflectToAttribute: true
      },

      touch: {
        type: Boolean,
        notify: true,
        reflectToAttribute: true
      },

      closeOnF4Press: {
        type: Boolean,
        value: false
      },

      closeButtonDelay: {
        type: Number,
        default: 0,
        notify: true
      },

      /**
       * Set to true, enables other popups to remain open.
       */
      stackable: {
        type: Boolean,
        value: false
      },

      /**
       * Audio file path or name (from the list of popup maker predefined sounds)
       */
      openSound: {
        type: String,
        value: '',
        notify: true
      },

      dialogType: {
        type: String,
        value: 'vaadin-dialog'
      }
    };
  }

  static get template() {
    // eslint-disable-next-line lit/no-legacy-template-syntax
    return html`
      <style>
        :host {
          display: none;
        }
      </style>

      <vaadin-dialog-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        focus-trap=""
      >
      </vaadin-dialog-overlay>
      <vaadin-device-detector
        on-wide-changed="_wideChanged"
        on-phone-changed="_phoneChanged"
        on-touch-changed="_touchChanged"
      ></vaadin-device-detector>
    `;
  }

  constructor() {
    super();

    this._cookie_manager = null;
    this._trigger_manager = null;
    this._condition_manager = null;
    this._integration_manager = null;

    this._getSettings = this._getSettings.bind(this);
    this.getSetting = this.getSetting.bind(this);
    this.getPopup = this.getPopup.bind(this);

    this._initReady = this._initReady.bind(this);

    this._wideChanged = this._wideChanged.bind(this);
    this._phoneChanged = this._phoneChanged.bind(this);
    this._touchChanged = this._touchChanged.bind(this);

    this.closeDialog = this.closeDialog.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.initCloseBtn = this.initCloseBtn.bind(this);
    this.initKeyDown = this.initKeyDown.bind(this);
    this.initStackable = this.initStackable.bind(this);
    this.initSound = this.initSound.bind(this);
    this.closeBtnDelay = this.closeBtnDelay.bind(this);
    this.resetZindex = this.resetZindex.bind(this);
    this.initAutoClose = this.initAutoClose.bind(this);

    this.getActiveOverlayElement = this.getActiveOverlayElement.bind(this);
  }

  /** @protected */
  connectedCallback() {
    super.connectedCallback();
  }

  ready() {
    super.ready();

    registerGlobalStyles(cxlVaadinDialogGlobalStyles, {
      moduleId: 'cxl-vaadin-dialog-global'
    });

    this._initReady();
  }

  _getSettings(el) {
    const dialog = el || this;
    const defaultSettings = {
      id: null,
      slug: '',
      theme_id: null,
      cookies: [],
      triggers: [],
      conditions: [],
      mobile_disabled: null,
      tablet_disabled: null,
      custom_height_auto: false,
      scrollable_content: false,
      position_from_trigger: false,
      position_fixed: false,
      overlay_disabled: false,
      stackable: false,
      disable_reposition: false,
      close_on_overlay_click: false,
      close_on_form_submission: false,
      close_on_form_submission_delay: 0,
      close_on_esc_press: false,
      close_on_f4_press: false,
      disable_on_mobile: false,
      disable_on_tablet: false,
      // size: 'medium',
      // responsive_min_width: '0%',
      // responsive_max_width: '100%',
      // custom_width: '640px',
      // custom_height: '380px',
      // animation_type: 'fade',
      // animation_speed: '350',
      // animation_origin: 'center top',
      // location: 'center top',
      // position_top: '100',
      // position_bottom: '0',
      // position_left: '0',
      // position_right: '0',
      zindex: '1999999999',
      close_button_delay: '0',
      /*
      // TODO Remove these once extensions have all been updated.
      meta: {
        display: {
          stackable: false,
          overlay_disabled: false,
          size: 'medium',
          responsive_max_width: '100',
          responsive_max_width_unit: '%',
          responsive_min_width: '0',
          responsive_min_width_unit: '%',
          custom_width: '640',
          custom_width_unit: 'px',
          custom_height: '380',
          custom_height_unit: 'px',
          custom_height_auto: false,
          location: 'center top',
          position_top: 100,
          position_left: 0,
          position_bottom: 0,
          position_right: 0,
          position_fixed: false,
          animation_type: 'fade',
          animation_speed: 350,
          animation_origin: 'center top',
          scrollable_content: false,
          disable_reposition: false,
          position_from_trigger: false,
          overlay_zindex: false,
          zindex: '1999999999',
        },
        close: {
          overlay_click: false,
          esc_press: false,
          f4_press: false,
          text: '',
          button_delay: 0,
        },
        click_open: [],
      },
   */
      container: {
        active_class: 'active',
        attr: {
          class: 'popmake'
        }
      },
      title: {
        attr: {
          class: 'popmake-title'
        }
      },
      content: {
        attr: {
          class: 'popmake-content'
        }
      },
      close: {
        close_speed: 0,
        attr: {
          class: 'popmake-close'
        }
      },
      overlay: {
        attr: {
          id: 'popmake-overlay',
          class: 'popmake-overlay'
        }
      }
    };
    const settings = dialog.getAttribute('data-popmake')
      ? JSON.parse(dialog.getAttribute('data-popmake'))
      : {};
    const dialogID = dialog.getAttribute('id');
    const vaadinDialogs = window.cxl_pum_popups ? window.cxl_pum_popups : {};
    const dialogsSettings = vaadinDialogs[dialogID] ? vaadinDialogs[dialogID] : {};

    return { ...defaultSettings, ...settings, ...dialogsSettings };
  }

  /**
   * alias of PUM.get();
   */
  // eslint-disable-next-line class-methods-use-this
  getElement(selector, $ctxt) {
    return $ctxt ? $ctxt.querySelectorAll(selector) : document.querySelectorAll(selector);
  }

  /**
   * @return {!Element}
   * @protected
   */
  // eslint-disable-next-line class-methods-use-this
  getActiveOverlayElement() {
    let active = document._activeElement || document.activeElement;

    // document.activeElement can be null
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
    // In IE 11, it can also be an object when operating in iframes
    // or document.documentElement (when overlay closed on outside click).
    // In these cases, default it to document.body.
    if (!active || active === document.documentElement || active instanceof Element === false) {
      active = document.body;
    }

    while (active.shadowRoot && active.shadowRoot.activeElement) {
      active = active.shadowRoot.activeElement;
    }

    return active;
  }

  // eslint-disable-next-line class-methods-use-this
  getPopup(el) {
    let $this;

    function isInt(value) {
      // eslint-disable-next-line radix
      return (
        // eslint-disable-next-line radix
        !isNaN(value) && parseInt(Number(value)) === parseInt(value) && !isNaN(parseInt(value, 10))
      );
    }

    // invalid id is provided, so bail early
    if (isInt(el) && parseInt(el, 10) === 0) {
      $this = document.querySelectorAll('does-not-exist');

      return $this;
    }

    // Quick Shortcuts
    if (isInt(el)) {
      $this = this.getElement(`#pum-${el}`);
    } else if (el === 'current') {
      // @todo: convert to vaadin dialog selector
      $this = this.getElement('.pum-overlay.pum-active:eq(0)');
    } else if (el === 'open') {
      // @todo: convert to vaadin dialog selector
      $this = this.getElement('.pum-overlay.pum-active');
    } else if (el === 'closed') {
      // @todo: convert to vaadin dialog selector
      $this = this.getElement('.pum-overlay:not(.pum-active)');
      // eslint-disable-next-line no-undef
    } else if (el instanceof jQuery) {
      $this = document.querySelectorAll(el.selector);
    } else {
      $this = document.querySelectorAll(el.getAttribute('id'));
    }

    if ($this.length === 0) {
      const BreakException = {};

      /**
       * Not sure how to get the parent overlay for current form
       * so using this verbose logic to achieve desired result.
       */
      try {
        const availableOverlays = document.querySelectorAll('vaadin-dialog-overlay');
        [...availableOverlays].forEach(dialog => {
          if (dialog.contains(el)) {
            const themes = dialog.theme.toString().split(' ');
            const theme = themes.find(themeItem => themeItem.startsWith('overlay-theme-'));
            $this = document.querySelectorAll(`vaadin-dialog-overlay[theme~="${theme}"]`);
            throw BreakException;
          }
        });
      } catch (e) {
        if (e !== BreakException) {
          throw e;
        }

        return $this;
      }
    }

    // additional check, because of shadow dom
    if ($this.length === 0) {
      // $this = getParents(el, 'cxl-vaadin-dialog');
      $this = getParents(this.getActiveOverlayElement(), 'vaadin-dialog-overlay');
      // $this = el.getRootNode().host;
      if ($this.length && $this[0].nodeName.toLowerCase() === 'vaadin-dialog-overlay') {
        return $this;
      }
    }
    // additional check end

    if ($this.length && ($this[0].matches('.pum-overlay') || $this[0] instanceof CXLVaadinDialog)) {
      return $this;
    }

    if ($this.length && $this[0].matches('.popmake')) {
      // return $this.parents('.pum-overlay');
      return getParents($this[0], 'cxl-vaadin-dialog');
    }

    // return $this.parents('.pum-overlay').length ? $this.parents('.pum-overlay') : document.querySelectorAll('does-not-exist');
    return $this.length && getParents($this[0], 'cxl-vaadin-dialog').length
      ? getParents($this[0], 'cxl-vaadin-dialog')
      : document.querySelectorAll('does-not-exist');
  }

  getSetting(el, key, _default) {
    // eslint-disable-next-line camelcase
    const string_to_ref = (object, reference) => {
      // eslint-disable-next-line camelcase
      function arr_deref(o, ref, i) {
        return !ref ? o : o[ref.slice(0, i ? -1 : ref.length)];
      }

      // eslint-disable-next-line camelcase
      function dot_deref(o, ref) {
        return !ref ? o : ref.split('[').reduce(arr_deref, o);
      }

      return reference.split('.').reduce(dot_deref, object);
    };

    const settings = this._getSettings(el);
    const value = string_to_ref(settings, key);

    // eslint-disable-next-line no-nested-ternary
    return typeof value !== 'undefined' ? value : _default !== undefined ? _default : null;
  }

  _initReady() {
    this._trigger_manager = new TriggerManager();
    this._cookie_manager = new CookieManager();
    this._condition_manager = new ConditionManager();
    this._integration_manager = new IntegrationManager();

    this._trigger_manager._vaddin_dialog = this;
    this._cookie_manager._vaddin_dialog = this;
    this._condition_manager._vaddin_dialog = this;
    this._integration_manager._vaddin_dialog = this;

    this._trigger_manager._init(this._getSettings());
    this._cookie_manager._init(this._getSettings());
    this._integration_manager._init(this._getSettings());

    this.initCloseBtn();
    this.initKeyDown();
    this.initSound();
    this.resetZindex();
    this.initAutoClose();

    this.$.overlay.addEventListener('vaadin-overlay-open', e => {
      this.initStackable(e);
      this.closeBtnDelay(e);
      this.playSound(e);
    });
  }

  _wideChanged(e) {
    this.wide = e.target.wide;
  }

  _phoneChanged(e) {
    this.phone = e.target.phone;
  }

  _touchChanged(e) {
    this.touch = e.target.touch;
  }

  isPhone() {
    return this.phone;
  }

  isTablet() {
    return this.wide && this.touch;
  }

  isDesktop() {
    return this.wide;
  }

  closeDialog(e, dialog, callback) {
    // eslint-disable-next-line no-param-reassign
    dialog = dialog || this;

    if (dialog.$.overlay.opened) {
      dialog.$.overlay.close(e);
    } else if (dialog.opened) {
      dialog.close(e);
    }

    // Fire user passed callback.
    if (callback !== undefined) {
      callback();
      // TODO Test this new method. Then remove the above.
      // callback.apply(dialog);
    }
  }

  openDialog(dialog, callback) {
    // eslint-disable-next-line no-param-reassign
    dialog = dialog || this;
    dialog.setAttribute('opened', 'opened');

    // Fire user passed callback.
    if (callback !== undefined) {
      callback();
      // TODO Test this new method. Then remove the above.
      // callback.apply(dialog);
    }
  }

  initCloseBtn() {
    this.$.overlay.addEventListener(
      'click',
      e => {
        // If the clicked element doesn't have the right selector, bail
        // if ( ! e.target.matches( '.pum-close' ) ) {
        if (!e.target.matches('[theme~="pum-close"]')) {
          return;
        }

        // Don't follow the link
        e.preventDefault();

        // close the overlay
        if (this.$.overlay.opened) {
          this.$.overlay.close(e);
        }
      },
      true
    );
  }

  initKeyDown() {
    document.addEventListener('keydown', event => {
      if (!this.$.overlay._last) {
        return;
      }

      if (event.key === 'F4' && this.closeOnF4Press) {
        const evt = new CustomEvent('vaadin-overlay-f4-press', {
          bubbles: true,
          cancelable: true,
          detail: { sourceEvent: event }
        });

        this.$.overlay.dispatchEvent(evt);

        if (this.$.overlay.opened && !evt.defaultPrevented) {
          this.$.overlay.close(event);
        }
      }
    });
  }

  closeBtnDelay() {
    /**
     * Hide the close button if delay is active.
     */
    if (this.hasAttribute('close-button-delay')) {
      let delay = 0;
      if (this.hasAttribute('close-button-delay')) {
        delay = this.getAttribute('close-button-delay');
      }

      if (delay > 0) {
        const closeBtn = this.$.overlay.content.querySelector('vaadin-button[theme~="pum-close"]');
        closeBtn.style.display = 'none';

        setTimeout(() => {
          /**
           * Fade the close button in after specified delay.
           */
          closeBtn.style.display = 'block';
        }, delay);
      }
    }
  }

  initStackable(e) {
    /**
     * If popup isn't stackable close all others.
     */
    if (!this.stackable) {
      // Close other attached overlays, except current.
      this._attachedInstances().forEach(el => {
        if (el !== this.$.overlay) {
          // close the overlay
          if (el.opened) {
            el.close(e);
          }
        }
      });
    }
  }

  /**
   * Returns all attached overlays in visual stacking order.
   * @private
   */
  // eslint-disable-next-line class-methods-use-this
  _attachedInstances() {
    return Array.from(document.body.children)
      .filter(el => el instanceof OverlayElement && !el.hasAttribute('closing'))
      .sort((a, b) => a.__zIndex - b.__zIndex || 0);
  }

  initSound() {
    // If our opening sound setting is not set to None...
    if (this.openSound && this.openSound !== 'none') {
      const sound = document.createElement('audio');
      sound.id = `${this.id}-audio-player`;
      sound.controls = false;
      sound.src = this.openSound;
      this.appendChild(sound);
    }
  }

  playSound() {
    // If the audio hasn't loaded yet, it wouldn't have been added to the popup.
    if (this.querySelector(`#${this.id}-audio-player`)) {
      this.querySelector(`#${this.id}-audio-player`)
        .play()
        .catch(reason => {
          // eslint-disable-next-line no-console
          console.warn(`Sound was not able to play when popup opened. Reason: ${reason}`);
        });
    }
  }

  resetZindex() {
    this.$.overlay.addEventListener(
      'opened-changed',
      () => {
        const attachedInstances = this._attachedInstances();
        if (!attachedInstances) {
          return;
        }

        /**
         * Reset inline z-index, so popup settings z-index is applied.
         * basically resets bringToFront(), which is applied to overlay, if !modeless
         * which brings dialog with overlay in front of other (modeless).
         */
        attachedInstances.forEach(el => {
          el.style.removeProperty('z-index');
        });

        /**
         * Modeless dialog takes priority by default, doesn't care about z-index.
         * So resetting pointer events based on z-index priority.
         */
        attachedInstances.forEach(el => {
          // eslint-disable-next-line no-param-reassign
          el.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents = 'none';
        });
        attachedInstances[0].shadowRoot
          .querySelector('[part="overlay"]')
          .style.removeProperty('pointer-events');
      },
      { once: true }
    );
  }

  initAutoClose() {
    const settings = this._getSettings();
    // eslint-disable-next-line camelcase
    const { auto_close } = settings;
    // eslint-disable-next-line camelcase
    const { enabled, delay } = auto_close;

    if (this.getAttribute('dialog-type') !== 'vaadin-notification' || !enabled) {
      return;
    }

    this.$.overlay.addEventListener('vaadin-overlay-open', e => {
      setTimeout(() => {
        this.closeDialog(e);
      }, parseInt(delay, 10));
    });
  }
}
