const express = require("express");
const routes = express.Router();
const { celebrate, Segments, Joi } = require("celebrate");

const OngsController = require("./Controllers/OngsController");
const IncidentsController = require("./Controllers/IncidentsController");
const ProfileController = require("./Controllers/ProfileController");
const SessionController = require("./Controllers/SessionController");

routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      cidade: Joi.string().required(),
      uf: Joi.string().required().length(2),
    }),
  }),
  OngsController.create
);
routes.get("/ongs", OngsController.index);

routes.post(
  "/incidents",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      titulo: Joi.string().required(),
      descricao: Joi.string().required(),
      valor: Joi.number().required(),
    }),
  }),
  IncidentsController.create
);
routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  IncidentsController.index
);
routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  IncidentsController.delete
);

routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  ProfileController.index
);

routes.post("/session", SessionController.create);

module.exports = routes;
