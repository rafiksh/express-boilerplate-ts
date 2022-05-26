import Joi from "joi";

const addExampleSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
  }),
};
const updateExampleSchema = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
  body: Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
  }),
};
const getExampleSchema = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};
const deleteExampleSchema = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};

export {
  addExampleSchema,
  updateExampleSchema,
  getExampleSchema,
  deleteExampleSchema,
};
