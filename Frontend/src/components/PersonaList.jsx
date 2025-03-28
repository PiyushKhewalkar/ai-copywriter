import React, { useEffect, useState } from "react";

import { fetchAllPersona } from "../lib/api";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

import {Badge} from "@/components/ui/badge.tsx"

function PersonaList() {
  const [allPersona, setAllPersona] = useState([]);

  useEffect(() => {
    fetchAllPersona().then(setAllPersona);
  }, []);

  return (
    <div className="m-5">
      <div className="space-y-1 my-5">
      <h2 className="font-medium text-2xl">Buyer Personas</h2>
      <p className="text-[12px]">Click on a box to view details info about the profile</p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {allPersona.length > 0 ? (
          allPersona.map((persona, index) => (
            <Card key={index} className="rounded-sm w-full p-3">
              <CardContent className="space-y-2">
                <div className="bg-[#ffffff] text-[10px] text-black px-[4px] py-[2px] rounded-[3px] w-fit">{persona.jobTitle}</div>
                <CardTitle>{persona.name}</CardTitle>
                <div className="text-[10px] font-light text-gray-400 flex justify-between">
                    <div>
                    <p className="w-fit"><span className="font-medium">Age: </span>{persona.ageRange}</p>
                    <p className="w-fit"><span className="font-medium">Gender: </span>{persona.gender}</p>
                    </div>
                    <div>
                    <p className="w-fit"><span className="font-medium">Lives in: </span>{persona.location}</p>
                    <p className="w-fit"><span className="font-medium">Works at: </span>{persona.industry}</p>
                    <p className="w-fit"><span className="font-medium">Income Level: </span>{persona.incomeLevel}</p>
                    </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p>No personas found.</p>
        )}
      </ul>
    </div>
  );
}

export default PersonaList;
