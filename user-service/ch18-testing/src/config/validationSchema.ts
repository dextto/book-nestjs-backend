import * as Joi from 'joi';

export const validationSchema = Joi.object({
  EMAIL_SERVICE: Joi.string()
    .required(),
  EMAIL_AUTH_USER: Joi.string()
    .required(),
  EMAIL_AUTH_PASSWORD: Joi.string()
    .required(),
  EMAIL_BASE_URL: Joi.string()
    .required()
    .uri()
});