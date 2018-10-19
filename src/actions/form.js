import { change as _change } from 'redux-form';

export function change(form, field, value) {
  return _change(form, field, value);
}
