const Validator = require('validator')
const isEmpty = require('./is-empty')


module.exports = function validateRegisterInput(data) {
  let errors = {}

  data.street = !isEmpty(data.street) ? data.street : ''
  data.city = !isEmpty(data.city) ? data.city : ''
  data.postcode = !isEmpty(data.postcode) ? data.postcode : ''
  data.firstName = !isEmpty(data.firstName) ? data.firstName : ''
  data.lastName = !isEmpty(data.lastName) ? data.lastName : ''
  data.email = !isEmpty(data.email) ? data.email : ''
  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : ''

  if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
    errors.firstName = 'First name must be between 2 and 30 characters'
  }

  if (!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
    errors.lastName = 'last name must be between 2 and 30 characters'
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'First name field is required'
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'Last name field is required'
  }

  if (Validator.isEmpty(data.street)) {
    errors.street = 'Street field is required'
  }

  if (Validator.isEmpty(data.city)) {
    errors.city = 'City field is required'
  }

  if (Validator.isEmpty(data.postcode)) {
    errors.postcode = 'Postcode field is required'
  }

  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = 'Phone number field is required'
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required'
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}




