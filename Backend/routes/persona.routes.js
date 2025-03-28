import { Router } from "express"

import { getAllPersona, getPersona, generatePersona } from "../controllers/persona.controller.js"

const personaRouter = Router()

personaRouter.get("/", getAllPersona)

personaRouter.get("/:personaId", getPersona)

personaRouter.post("/generate", generatePersona)

export default personaRouter