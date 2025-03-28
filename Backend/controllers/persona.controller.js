import BuyerPersona from "../models/persona.model.js"

import generatePersonaJson from "./openai.controller.js"

export const getAllPersona = async(req, res) => {

    try {

        const allPersona = await BuyerPersona.find()

        return res.status(200).json({success : true, allPersona})

    } catch (error) {
        return res.status(500).json({success : false, error : "Internal Server Error", details : error.message})
    }

}

export const getPersona = async(req, res) => {
    try {

        const {personaId} = req.params

        const persona = await BuyerPersona.findById(personaId)

        if (!persona) return res.status(404).json({error : "Persona Not Found"})

        return res.status(200).json({success : true, persona})
        
    } catch (error) {
        return res.status(500).json({success : false, error : "Internal Server Error", details : error.message})
    }
}

export const generatePersona = async(req, res) => {
    try {

        console.log("Request body:", req.body); // Debugging log

        const { industry, service } = req.body

        // get user details

        const personaJson = await generatePersonaJson(industry, service)

        if (!personaJson) return res.json({error : "error generating persona json"})

        const newPersona = await new BuyerPersona(personaJson)

        await newPersona.save()

        return res.status(201).json({
            success : true,
            message : "Persona successfully created",
            newPersona
        })    
        
    } catch (error) {
        return res.status(500).json({success : false, error : "Internal Server Error", details : error.message})
    }
}