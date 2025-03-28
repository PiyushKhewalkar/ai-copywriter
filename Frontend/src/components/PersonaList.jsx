import React, {useEffect, useState} from "react"

import { fetchAllPersona } from "../lib/api"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  


function PersonaList() {

    const [allPersona, setAllPersona] = useState([])

    useEffect(() => {
        fetchAllPersona().then(setAllPersona)
    }, [])

  return (
    <div>
            <h2>Buyer Personas</h2>
            <ul>
                {allPersona.length > 0 ? (
                    allPersona.map((persona, index) => (
                        <Card key={index}>
            <CardContent>
                <CardTitle>
                    {persona.name}
                </CardTitle>
            </CardContent>
        </Card>
                    ))
                ) : (
                    <p>No personas found.</p>
                )}
            </ul>
        </div>
  )
}

export default PersonaList