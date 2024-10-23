import Joi from "joi";

export const DeleteTransaction = Joi.object({
  value: Joi.number(),
  description: Joi.string().min(3),
  type: Joi.string().valid("input", "output"),
  userId: Joi.string(),
  _id: Joi.string().required()
});