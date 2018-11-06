import { 
  change as _change,
  initialize,
} from 'redux-form';

export function change(form, field, value) {
  return _change(form, field, value);
}

export function init(form, value) {
  return initialize(form, value);
}

