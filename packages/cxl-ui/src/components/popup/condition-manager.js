import qs from 'qs';

export class ConditionManager {
  constructor() {
    this._vaddin_dialog = null;
    // eslint-disable-next-line
    this.query_args = qs.parse(window.location.search, { ignoreQueryPrefix: true });

    this._checkConditions = this._checkConditions.bind(this);
    this._checkCondition = this._checkCondition.bind(this);
    this.queryArgIs = this.queryArgIs.bind(this);
    this.queryArgExists = this.queryArgExists.bind(this);
  }

  _checkConditions() {
    const settings = this._vaddin_dialog._getSettings();
    // Loadable defaults to true if no conditions. Making the popup available everywhere.
    let loadable = true;
    let groupCheck;
    let g;
    let c;
    let group;
    let condition;

    if (settings.disable_on_mobile) {
      if (this._vaddin_dialog.isPhone()) {
        return false;
      }
    }

    if (settings.disable_on_tablet) {
      if (this._vaddin_dialog.isTablet()) {
        return false;
      }
    }

    if (settings.conditions.length) {
      // All Groups Must Return True. Break if any is false and set loadable to false.
      // eslint-disable-next-line no-plusplus
      for (g = 0; settings.conditions.length > g; g++) {
        group = settings.conditions[g];

        // Groups are false until a condition proves true.
        groupCheck = false;

        // At least one group condition must be true. Break this loop if any condition is true.
        // eslint-disable-next-line no-plusplus
        for (c = 0; group.length > c; c++) {
          condition = { not_operand: false, ...group[c] };

          // If any condition passes, set groupCheck true and break.
          if (!condition.not_operand && this._checkCondition(condition)) {
            groupCheck = true;
          } else if (condition.not_operand && !this._checkCondition(condition)) {
            groupCheck = true;
          }

          // $(this).trigger('pumCheckingCondition', [groupCheck, condition]);

          if (groupCheck) {
            break;
          }
        }

        // If any group of conditions doesn't pass, popup is not loadable.
        if (!groupCheck) {
          loadable = false;
        }
      }
    }

    return loadable;
  }

  // eslint-disable-next-line consistent-return
  _checkCondition(condition) {
    const target = condition.target || null;
    let ret = true;

    if (!target) {
      // eslint-disable-next-line no-console
      console.warn('Condition type not set.');
      ret = false;
      return ret;
    }

    // TODO once all extensions updated and in circulation for v1.7, change the below to pass settings, not condition.
    switch (target) {
      // region Query Args
      case 'query_arg_is':
        ret = this.queryArgIs(condition);
        break;
      case 'query_arg_exists':
        ret = this.queryArgExists(condition);
        break;
      // endregion
      default:
        // eslint-disable-next-line no-console
        console.warn(`Condition type ${condition} does not exist.`);
        ret = true;
        break;
    }

    return ret;
  }

  // eslint-disable-next-line class-methods-use-this
  queryArgIs(condition) {
    const arg = condition.settings.arg_name || false;
    const value = condition.settings.arg_value || false;

    if (!arg) {
      return false;
    }

    const isEmptyObj = obj => {
      let key;
      // eslint-disable-next-line no-restricted-syntax
      for (key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, [key])) {
          return false;
        }
      }

      return true;
    };

    const hasProp = (obj, prop) => {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };

    if (isEmptyObj(this.query_args)) {
      return false;
    }

    if (!hasProp(this.query_args, arg)) {
      return false;
    }

    return this.query_args[arg] === value;
  }

  queryArgExists(condition) {
    const arg = condition.settings.arg_name || false;

    if (!arg) {
      return false;
    }

    return arg in this.query_args;
  }
}
