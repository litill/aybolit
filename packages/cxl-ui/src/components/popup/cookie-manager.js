import Cookies from 'js-cookie';
import strtotime from 'locutus/php/datetime/strtotime';

export class CookieManager {
  constructor() {
    this._vaddin_dialog = null;

    this._init = this._init.bind(this);
    this.addCookie = this.addCookie.bind(this);
    this.onPopupOpen = this.onPopupOpen.bind(this);
    this.onPopupClose = this.onPopupClose.bind(this);
    this._checkCookies = this._checkCookies.bind(this);
  }

  _init(settings) {
    // register cookies triggers
    const cookies = settings.cookies || [];
    let cookie = null;
    let i;

    if (cookies.length) {
      for (i = 0; cookies.length > i; i += 1) {
        cookie = cookies[i];
        this.addCookie(cookie.event, cookie.settings);
      }
    }
  }

  addCookie(...args) {
    // if no event type is set, bail early
    if (!args[0]) {
      // eslint-disable-next-line no-console
      console.warn(`Cookie type ${args[0]} does not exist.`);
      return;
    }

    switch (args[0]) {
      case 'on_popup_open':
        this.onPopupOpen(args[1]);
        break;
      case 'on_popup_close':
        this.onPopupClose(args[1]);
        break;
      case 'manual':
        this.onManual(args[1]);
        break;
      case 'form_success':
        this.onFormSuccess(args[1]);
        break;
      case 'form_submission':
        this.formSubmission(args[1]);
        break;
      case 'pum_sub_form_success':
      default:
        // eslint-disable-next-line no-console
        console.warn(`Cookie type ${args[0]} does not exist.`);
        break;
    }
  }

  onPopupOpen(settings) {
    // if dialog reference is not passed, bail early
    if (!this._vaddin_dialog) {
      return;
    }

    this._vaddin_dialog.$.overlay.addEventListener('vaadin-overlay-open', event => {
      this.setCookie(settings);

      const evt = new CustomEvent('vaadin-dialog-set-cookie', {
        bubbles: true,
        cancelable: true,
        detail: {
          sourceEvent: event,
          cookieSetting: settings
        }
      });

      this._vaddin_dialog.$.overlay.dispatchEvent(evt);
    });
  }

  onPopupClose(settings) {
    // if dialog reference is not passed, bail early
    if (!this._vaddin_dialog) {
      return;
    }

    this._vaddin_dialog.$.overlay.addEventListener('vaadin-overlay-close', event => {
      this.setCookie(settings);

      const evt = new CustomEvent('vaadin-dialog-set-cookie', {
        bubbles: true,
        cancelable: true,
        detail: {
          sourceEvent: event,
          cookieSetting: settings
        }
      });

      this._vaddin_dialog.$.overlay.dispatchEvent(evt);
    });
  }

  onManual(settings) {
    // if dialog reference is not passed, bail early
    if (!this._vaddin_dialog) {
      return;
    }

    this._vaddin_dialog.$.overlay.addEventListener('pumSetCookie', event => {
      this.setCookie(settings);

      const evt = new CustomEvent('vaadin-dialog-set-cookie', {
        bubbles: true,
        cancelable: true,
        detail: {
          sourceEvent: event,
          cookieSetting: settings
        }
      });

      this._vaddin_dialog.$.overlay.dispatchEvent(evt);
    });
  }

  onFormSuccess(settings) {
    // if dialog reference is not passed, bail early
    if (!this._vaddin_dialog) {
      return;
    }

    this._vaddin_dialog.$.overlay.addEventListener('pumSetCookie', event => {
      this.setCookie(settings);

      const evt = new CustomEvent('vaadin-dialog-set-cookie', {
        bubbles: true,
        cancelable: true,
        detail: {
          sourceEvent: event,
          cookieSetting: settings
        }
      });

      this._vaddin_dialog.$.overlay.dispatchEvent(evt);
    });
  }

  formSubmission(settings) {
    // if dialog reference is not passed, bail early
    if (!this._vaddin_dialog) {
      return;
    }

    // eslint-disable-next-line no-param-reassign
    settings = {
      form: '',
      formInstanceId: '',
      only_in_popup: false,
      ...settings
    };

    this._vaddin_dialog.$.overlay.addEventListener('pum.integration.form.success', event => {
      if (!settings.form.length) {
        return;
      }

      const { form, args } = event.detail;

      if (
        this._vaddin_dialog._integration_manager.checkFormKeyMatches(
          settings.form,
          settings.formInstanceId,
          args
        )
      ) {
        // check if form is inside the popup
        // if so, current popup is same as form popup in which form resides
        if (
          (settings.only_in_popup &&
            this._vaddin_dialog.getPopup(form).length &&
            this._vaddin_dialog.getPopup(form) === this._vaddin_dialog) ||
          !settings.only_in_popup
        ) {
          this.setCookie(settings);
        }
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  setCookie(settings) {
    const expires = new Date();
    // eslint-disable-next-line prefer-const
    let { name, path, session, time } = settings;

    // eslint-disable-next-line default-case
    switch (typeof time) {
      case 'number':
        expires.setMilliseconds(expires.getMilliseconds() + time * 864e5);
        time = expires;
        break;
      case 'string':
        expires.setTime(strtotime(`+${time}`) * 1000);
        time = expires;
        break;
    }

    Cookies.set(name, true, {
      expires: session ? null : time,
      // eslint-disable-next-line no-undef
      path: path ? '/' : null // path: path ? pum_vars.home_url || '/' : null
    });
  }

  _checkCookies(settings) {
    let i;
    let ret = false;

    if (
      settings.cookie_name === undefined ||
      settings.cookie_name === null ||
      settings.cookie_name === ''
    ) {
      return ret;
    }

    // eslint-disable-next-line default-case
    switch (typeof settings.cookie_name) {
      case 'object':
      case 'array':
        for (i = 0; settings.cookie_name.length > i; i += 1) {
          if (Cookies.get(settings.cookie_name[i]) !== undefined) {
            ret = true;
          }
        }
        break;
      case 'string':
        if (Cookies.get(settings.cookie_name) !== undefined) {
          ret = true;
        }
        break;
    }

    const evt = new CustomEvent('vaadin-dialog-check-cookie', {
      bubbles: true,
      cancelable: true,
      detail: {
        // sourceEvent: event,
        cookieSetting: settings
      }
    });

    this._vaddin_dialog.$.overlay.dispatchEvent(evt);

    return ret;
  }
}
