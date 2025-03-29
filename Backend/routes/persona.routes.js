import { Router } from "express"

import { getAllPersona, getPersona, generatePersona, deletePersona } from "../controllers/persona.controller.js"

const personaRouter = Router()

personaRouter.get("/", getAllPersona)

personaRouter.get("/:personaId", getPersona)

personaRouter.post("/generate", generatePersona)

personaRouter.delete("/:personaId", deletePersona)

export default personaRouter