export class TriggerManager {
  constructor() {
    this._vaddin_dialog = null;

    this._init = this._init.bind(this);
    this._addTrigger = this._addTrigger.bind(this);
    this._adminDebug = this._adminDebug.bind(this);
    this.autoOpen = this.autoOpen.bind(this);
    this.clickOpen = this.clickOpen.bind(this);
    this.formSubmission = this.formSubmission.bind(this);
  }

  _init(settings) {
    const triggers = settings.triggers || [];
    let trigger = null;
    let i;

    if (triggers.length) {
      for (i = 0; triggers.length > i; i += 1) {
        trigger = triggers[i];
        this._addTrigger(trigger.type, trigger.settings);
      }
    }
  }

  _addTrigger(...args) {
    // if no trigger type is set, bail early
    if (!args[0]) {
      return;
    }

    try {
      switch (args[0]) {
        case 'admin_debug':
          this._adminDebug(args[1]);
          break;
        case 'auto_open':
          this.autoOpen(args[1]);
          break;
        case 'click_open':
          this.clickOpen(args[1]);
          break;
        case 'form_submission':
          this.formSubmission(args[1]);
          break;

        default:
          // eslint-disable-next-line no-console
          console.warn(`Trigger type ${args[0]} does not exist.`);
          break;
      }
    } catch (e) {
      setTimeout(() => {
        throw e;
      });
    }
  }

  _adminDebug() {
    this._vaddin_dialog.setAttribute('opened', 'opened');
  }

  autoOpen(settings) {
    /**
     * Open dialog auto-open
     * after defined delay.
     */
    setTimeout(() => {
      // If the popup is already open return.
      if (this._vaddin_dialog.$.overlay.opened) {
        return;
      }

      // If cookie exists or conditions fail return.
      if (
        this._vaddin_dialog._cookie_manager._checkCookies(settings) ||
        !this._vaddin_dialog._condition_manager._checkConditions()
      ) {
        return;
      }

      // Set the global last open trigger to the a text description of the trigger.
      // $.fn.popmake.last_open_trigger = 'Auto Open - Delay: ' + settings.delay;

      // Open the popup.
      this._vaddin_dialog.setAttribute('opened', 'opened');
    }, settings.delay);
  }

  clickOpen(settings) {
    // eslint-disable-next-line camelcase
    const popup_settings = this._vaddin_dialog._getSettings();

    // eslint-disable-next-line camelcase
    const trigger_selectors = [
      `.popmake-${popup_settings.id}`,
      `.popmake-${decodeURIComponent(popup_settings.slug)}`,
      `a[href$="#popmake-${popup_settings.id}"]`
    ];

    // eslint-disable-next-line camelcase
    let trigger_selector;

    if (settings.extra_selectors && settings.extra_selectors !== '') {
      trigger_selectors.push(settings.extra_selectors);
    }

    // trigger_selectors = pum.hooks.applyFilters('pum.trigger.click_open.selectors', trigger_selectors, settings, this._vaddin_dialog);

    // eslint-disable-next-line camelcase,prefer-const
    trigger_selector = trigger_selectors.join(', ');

    document.querySelectorAll(trigger_selector).forEach(item => {
      item.classList.add('pum-trigger');
      // eslint-disable-next-line no-param-reassign
      item.style.cursor = 'pointer';
    });

    // @todo: make sure this doesn't stop form submission
    document.addEventListener(
      'click',
      event => {
        const trigger = event.target;
        // eslint-disable-next-line camelcase
        let do_default = settings.do_default || false;

        // If trigger is inside of the popup that it opens, do nothing.
        if (this._vaddin_dialog.contains(trigger)) {
          return;
        }

        // If the popup is already open return.
        if (this._vaddin_dialog.$.overlay.opened) {
          return;
        }

        // If cookie exists or conditions fail return.
        if (
          this._vaddin_dialog._cookie_manager._checkCookies(settings) ||
          !this._vaddin_dialog._condition_manager._checkConditions()
        ) {
          return;
        }

        if (trigger.hasAttribute('do-default')) {
          // eslint-disable-next-line camelcase
          do_default = trigger.getAttribute('do-default');
        } else if (
          trigger.matches('.do-default') ||
          trigger.matches('.popmake-do-default') ||
          trigger.matches('.pum-do-default')
        ) {
          // eslint-disable-next-line camelcase
          do_default = true;
        }

        // If trigger has the class do-default we don't prevent default actions.
        // if ( !event.ctrlKey && !pum.hooks.applyFilters('pum.trigger.click_open.do_default', do_default, this._vaddin_dialog, $trigger)) {
        // eslint-disable-next-line camelcase
        if (!event.ctrlKey && !do_default) {
          event.preventDefault();
          event.stopPropagation();
        }

        // Set the global last open trigger to the clicked element.
        // $.fn.popmake.last_open_trigger = $trigger;

        // Open the popup.
        this._vaddin_dialog.setAttribute('opened', 'opened');
      },
      false
    );
  }

  // eslint-disable-next-line class-methods-use-this
  formSubmission(settings) {
    // eslint-disable-next-line no-param-reassign
    settings = {
      form: '',
      formInstanceId: '',
      delay: 0,
      ...settings
    };

    // eslint-disable-next-line func-names
    const onSuccess = () => {
      // If the popup is already open return.
      if (this._vaddin_dialog.$.overlay.opened) {
        return;
      }

      // If cookie exists or conditions fail return.
      if (
        this._vaddin_dialog._cookie_manager._checkCookies(settings) ||
        !this._vaddin_dialog._condition_manager._checkConditions()
      ) {
        return;
      }

      // Set the global last open trigger to the a text description of the trigger.
      // $.fn.popmake.last_open_trigger = 'Form Submission';

      // eslint-disable-next-line func-names
      setTimeout(() => {
        // Open the popup.
        this._vaddin_dialog.setAttribute('opened', 'opened');
      }, settings.delay);
    };

    // Listen for integrated form submissions.
    this._vaddin_dialog.$.overlay.addEventListener('pum.integration.form.success', event => {
      if (!settings.form.length) {
        return;
      }

      // eslint-disable-next-line no-unused-vars
      const { form, args } = event.detail;

      if (
        this._vaddin_dialog._integration_manager.checkFormKeyMatches(
          settings.form,
          settings.formInstanceId,
          args
        )
      ) {
        onSuccess();
      }
    });
  }
}
