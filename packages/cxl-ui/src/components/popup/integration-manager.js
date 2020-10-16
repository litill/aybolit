import { domReady } from '@conversionxl/cxl-lumo-styles/src/utils';

export class IntegrationManager {
  constructor() {
    this._vaddin_dialog = null;

    this._init = this._init.bind(this);
    // this.initForm = this.initForm.bind(this);
    this.initCloseOnSubmission = this.initCloseOnSubmission.bind(this);

    this.initGravityForm = this.initGravityForm.bind(this);
  }

  _init(settings) {
    this.initCloseOnSubmission(settings);

    this.initGravityForm();
  }

  // eslint-disable-next-line class-methods-use-this
  initForm() {
    /**
     * Process php based form submissions when the form_success args are passed.
     */
    /*
    // eslint-disable-next-line no-undef
    if (typeof pum_vars.form_success === 'object') {
      // eslint-disable-next-line no-undef
      pum_vars.form_success = $.extend({
        popup_id: null,
        settings: {}
      });

      // eslint-disable-next-line no-undef
      PUM.forms.success(pum_vars.form_success.popup_id, pum_vars.form_success.settings);
    }
    */
    /*
    // eslint-disable-next-line no-undef
    if (typeof pum_vars.form_submission !== "undefined") {
      // eslint-disable-next-line no-undef
      const submission = pum_vars.form_submission;

      // Declare these are not AJAX submissions.
      submission.ajax = false;

      // Initialize the popup var based on passed popup ID.
      submission.popup = submission.popupId > 0 ? PUM.getPopup(submission.popupId) : null;

      console.log('window.PUM.integrations.init', submission);

      // eslint-disable-next-line no-undef
      PUM.integrations.formSubmission(null, submission);
    }
    */
  }

  // eslint-disable-next-line class-methods-use-this
  initGravityForm() {
    const formProvider = 'gravityforms';
    // eslint-disable-next-line prefer-const
    let gFormSettings = {};

    document.addEventListener(
      'gform-confirmation-loaded',
      event => {
        const { formId } = event.detail.sourceData;

        // All the magic happens here.
        const form = document.querySelectorAll(
          `#gform_confirmation_wrapper_${formId},#gforms_confirmation_message_${formId}`
        )[0];

        this.formSubmission(form, {
          formProvider,
          formId
        });

        /**
         * TODO - Move this to a backward compatiblilty file, hook it into the pum.integration.form.success action.
         *
         * Listen for older popup actions applied directly to the form.
         *
         * This is here for backward compatibility with form actions prior to v1.9.
         */
        // Nothing should happen if older action settings not applied
        // except triggering of pumFormSuccess event for old cookie method.

        this.formsSuccess(form, gFormSettings[formId] || {});
      },
      false
    );

    /**
     * TODO - Move this to a backward compatiblilty file, hook it into the pum.integration.form.success action.
     *
     * Listen for older popup actions applied directly to the form.
     *
     * This is here for backward compatibility with form actions prior to v1.9.
     */

    domReady(() => {
      Array.from(document.querySelectorAll('.gform_wrapper > form')).forEach(form => {
        const formId = form.getAttribute('id').replace('gform_', '');
        const settingsData = form.querySelector('input.gforms-pum');
        const settings = settingsData ? JSON.parse(settingsData.value) : false;

        // typeof settings === 'object' && settings !== null
        if (!settings || typeof settings !== 'object') {
          return;
        }

        if (
          typeof settings === 'object' &&
          settings.closedelay !== undefined &&
          settings.closedelay.toString().length >= 3
        ) {
          settings.closedelay /= 1000;
        }

        gFormSettings[formId] = settings;
      });
    });
  }

  /**
   * This hook fires after any integrated form is submitted successfully.
   *
   * It does not matter if the form is in a popup or not.
   *
   * @since 1.9.0
   *
   * @param {Object} form JavaScript DOM node or jQuery object for the form submitted
   * @param {Object} args {
   *     @type {string} formProvider Such as gravityforms or ninjaforms
   *     @type {string|int} formId Usually an integer ID number such as 1
   *     @type {int} formInstanceId Not all form plugins support this.
   * }
   */
  // eslint-disable-next-line class-methods-use-this
  formSubmission(form, args) {
    // eslint-disable-next-line no-param-reassign
    args = {
      // eslint-disable-next-line no-undef
      // whether form is inside popup
      // or not, if not, use current popup
      popup: this._vaddin_dialog, // PUM.getPopup(form),
      formProvider: null,
      formId: null,
      formInstanceId: null,
      formKey: null,
      ajax: true, // Allows detecting submissions that may have already been counted.
      tracked: false,
      ...args
    };

    // Generate unique formKey identifier.
    const filterNull = x => {
      return x;
    };

    // eslint-disable-next-line no-param-reassign
    args.formKey =
      args.formKey ||
      [args.formProvider, args.formId, args.formInstanceId].filter(filterNull).join('_');

    if (args.popup && args.popup.length) {
      // eslint-disable-next-line no-param-reassign,no-undef
      args.popupId = this._vaddin_dialog.getSetting(args.popup, 'id');
      // Should this be here. It is the only thing not replicated by a new form trigger & cookie.
      // $popup.trigger('pumFormSuccess');
    }

    /**
     * This hook fires after any integrated form is submitted successfully.
     *
     * It does not matter if the form is in a popup or not.
     *
     * @since 1.9.0
     *
     * @param {Object} form JavaScript DOM node or jQuery object for the form submitted
     * @param {Object} args {
     *     @type {string} formProvider Such as gravityforms or ninjaforms
     *     @type {string|int} formId Usually an integer ID number such as 1
     *     @type {int} formInstanceId Not all form plugins support this.
     *     @type {string} formKey Concatenation of provider, ID & Instance ID.
     *     @type {int} popupId The ID of the popup the form was in.
     *     @type {Object} popup Usable jQuery object for the popup.
     * }
     */
    // window.PUM.hooks.doAction('pum.integration.form.success', form, args);
    const evt = new CustomEvent('pum.integration.form.success', {
      bubbles: true,
      cancelable: true,
      detail: {
        // sourceEvent: event,
        form,
        args
      }
    });

    this._vaddin_dialog.$.overlay.dispatchEvent(evt);
  }

  // eslint-disable-next-line class-methods-use-this
  checkFormKeyMatches(formIdentifier, formInstanceId, submittedFormArgs) {
    // eslint-disable-next-line no-param-reassign
    formInstanceId = formInstanceId === '' ? formInstanceId : false;

    // Check if the submitted form matches trigger requirements.
    // eslint-disable-next-line prefer-const
    const checks = [
      // Any supported form.
      formIdentifier === 'any',

      // Checks for PM core sub form submissions.
      formIdentifier === 'pumsubform' && submittedFormArgs.formProvider === 'pumsubform',

      // Any provider form. ex. `ninjaforms_any`
      formIdentifier === `${submittedFormArgs.formProvider}_any`,

      // Specific provider form with or without instance ID. ex. `ninjaforms_1` or `ninjaforms_1_*`
      // Only run this test if not checking for a specific instanceId.
      // eslint-disable-next-line no-useless-escape
      !formInstanceId && new RegExp(`^${formIdentifier}(_[\d]*)?`).test(submittedFormArgs.formKey),

      // Specific provider form with specific instance ID. ex `ninjaforms_1_1` or `calderaforms_jbakrhwkhg_1`
      // Only run this test if we are checking for specific instanceId.
      !!formInstanceId && `${formIdentifier}_${formInstanceId}` === submittedFormArgs.formKey
    ];

    // If any check is true, set the cookie.
    const matchFound = checks.indexOf(true) !== -1;
    return matchFound;
  }

  initCloseOnSubmission(settings) {
    if (settings.close_on_form_submission) {
      // PUM.hooks.addAction('pum.integration.form.success', (form, args) => {
      this._vaddin_dialog.$.overlay.addEventListener('pum.integration.form.success', event => {
        // eslint-disable-next-line no-unused-vars
        const { form, args } = event.detail;

        // If this is the same popup the form was submitted in.
        // Alternatively we can compare their IDs
        if (args.popup && args.popup === this._vaddin_dialog) {
          setTimeout(() => {
            // $.fn.popmake.last_close_trigger = 'Form Submission';

            this._vaddin_dialog.closeDialog(null);
          }, settings.close_on_form_submission_delay || 0);
        }
      });
    }
  }

  /**
   * Used to process success actions for forms inside popups.
   *
   * @param form
   * @param settings
   */
  formsSuccess(form, settings) {
    // window.PUM.forms.success
    const defaults = {
      openpopup: false,
      openpopup_id: 0,
      closepopup: false,
      closedelay: 0,
      redirect_enabled: false,
      redirect: '',
      cookie: false
    };

    const setCookie = (el, settings2) => {
      // eslint-disable-next-line no-param-reassign
      settings2 = {
        name: `pum-${this._vaddin_dialog.getSetting(el, 'id')}`,
        expires: '+30 days',
        ...settings2
      };

      this._vaddin_dialog._cookie_manager.setCookie(settings2);
    };

    // eslint-disable-next-line no-param-reassign
    settings = { ...defaults, ...settings };

    if (!settings) {
      return;
    }

    const $parentPopup = this._vaddin_dialog.getPopup(form);
    let cookie = {};
    const redirect = () => {
      if (settings.redirect_enabled) {
        if (settings.redirect !== '') {
          // Redirect to the destination url.
          window.location = settings.redirect;
        } else {
          // Refresh with force true.
          window.location.reload(true);
        }
      }
    };

    const callback = () => {
      const callbackDialog = this._vaddin_dialog.getPopup(settings.openpopup_id);
      if (settings.openpopup && callbackDialog.length) {
        this._vaddin_dialog.openDialog(callbackDialog[0]);
      } else {
        redirect();
      }
    };

    if ($parentPopup.length) {
      // $parentPopup.trigger('pumFormSuccess');
      const pumFormSuccess = new CustomEvent('pumFormSuccess', {
        bubbles: true,
        cancelable: true
      });
      this._vaddin_dialog.$.overlay.dispatchEvent(pumFormSuccess);

      if (settings.cookie) {
        const settingCookie = typeof settings.cookie === 'object' ? settings.cookie : {};

        cookie = {
          name: `pum-${this._vaddin_dialog.getSetting($parentPopup[0], 'id')}`,
          expires: '+1 year',
          ...settingCookie
        };

        // Set a cookie
        setCookie($parentPopup[0], cookie);
      }
    }

    if ($parentPopup.length && settings.closepopup) {
      setTimeout(() => {
        this._vaddin_dialog.closeDialog(null, $parentPopup[0], callback);
        // eslint-disable-next-line radix
      }, parseInt(settings.closedelay, 10) * 1000);
    } else {
      callback();
    }
  }
}
