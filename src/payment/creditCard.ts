const card=({

  // number formatting
  formatting: true,

  // selectors
  formSelectors: {
    numberCard: 'input[name="number"]',
    expiryCard: 'input[name="expiry"]',
    cvc: 'input[name="cvc"]',
    nameInput: 'input[name="name"]'
  },
  cardSelectors: {
    cardContainer: '.jp-card-container',
    card: '.jp-card',
    numberDisplay: '.jp-card-number',
    expiryDisplay: '.jp-card-expiry',
    cvcDisplay: '.jp-card-cvc',
    nameDisplay: '.jp-card-name'
  },

  // custom messages
  messages: {
    validDate: 'valid\nthru',
    monthYear: 'month/year'
  },

  // custom placeholders
  placeholders: {
    number: '&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;',
    cvc: '&bull;&bull;&bull;',
    expiry: '&bull;&bull;/&bull;&bull;',
    name: 'Full Name'
  },

  // enable input masking
  masks: {
    cardNumber: false
  },

  // valid/invalid
  classes: {
    valid: 'jp-card-valid',
    invalid: 'jp-card-invalid'
  },

  // debug mode
  debug: false

});