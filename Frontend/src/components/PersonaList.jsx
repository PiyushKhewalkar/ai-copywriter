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

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {Button} from "@/components/ui/button.tsx"

import menuDots from "../assets/menu-dots-vertica.svg";

function PersonaList() {
  const [allPersona, setAllPersona] = useState([]);

  useEffect(() => {
    fetchAllPersona().then(setAllPersona);
  }, []);

  return (
    <div className="m-5">
      <div className="my-5">
      <h2 className="font-medium text-2xl">Dream Buyer Avatars</h2>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {allPersona.length > 0 ? (
          allPersona.map((persona, index) => (
            <Card key={index} className="rounded-sm w-full p-3">
              <CardContent className="space-y-2">
                  <div className="bg-[#5271ff] text-[12px] font-medium px-[8px] py-[5px] rounded-[3px] w-fit">{persona.jobTitle}</div>
                  <CardTitle className="text-2xl my-2">{persona.name}</CardTitle>
                  <p className="w-fit text-[16px] opacity-70 text-gray-300">{persona.twoOrThreeLinerDescription}</p>
                <div className="flex justify-between">
                <Button className="rounded-[4px]" variant="secondary">View Profile</Button>
                <DropdownMenu>
                  <DropdownMenuTrigger><img className="h-4 w-4" style={{ filter: "invert(1)" }} src={menuDots} alt="Menu Dots" /></DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
