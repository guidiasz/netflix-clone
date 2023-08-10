export const fieldDefaultValues = {
  isActive: false,
  message: '',
  name: '',
  status: 'normal',
  touched: false,
  value: '',
  validate: () => null,
};

export const formDefaultValues = {
  fields: {},
  formStatus: 'normal', //invalid || valid || normal || loading
  formMessage: '',
};

export const formActionHandlers = {
  FORM_RESET: (state) => ({ ...formDefaultValues }),
  FORM_SUCCESS: (state, action) => ({ ...state, formStatus: 'valid', formMessage: action.payload }),
  FORM_FAILED: (state, action) => ({
    ...state,
    formStatus: 'invalid',
    formMessage: action.payload,
  }),
  FORM_LOADING: (state) => ({ ...state, formStatus: 'loading', formMessage: '' }),
  INPUT_CREATE: (state, action) => {
    return { ...state, fields: { ...state.fields, ...action.payload } };
  },
  INPUT_INVALID: (state, action) => {
    const fields = { ...state.fields };
    fields[action.name].status = 'invalid';
    fields[action.name].message = action.payload;
    return { ...state, fields };
  },
  INPUT_VALID: (state, action) => {
    const fields = { ...state.fields };
    fields[action.name].status = 'valid';
    fields[action.name].message = '';
    return { ...state, fields };
  },
  INPUT_UPDATE: (state, action) => {
    const fields = { ...state.fields };
    fields[action.name].touched = true;
    fields[action.name].value = action.payload;
    return { ...state, formStatus: 'normal', formMessage: '', fields };
  },
  INPUT_FOCUS: (state, action) => {
    const fields = { ...state.fields };
    fields[action.name].isActive = true;
    return { ...state, fields };
  },
  INPUT_BLUR: (state, action) => {
    const fields = { ...state.fields };
    fields[action.name].isActive = false;
    return { ...state, fields };
  },
};

export function formReducer(state, action) {
  const handler = formActionHandlers[action.type];
  return handler ? handler(state, action) : state;
}
