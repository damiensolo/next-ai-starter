"use client";
import React, { useState } from "react";
import Toggle from "@/components/Toggle";
import RadioButton from "@/components/RadioButton";
import { ListItem } from "@/components/ListItem";
import { CheckCircle, Star } from "lucide-react";

export default function HomeClient() {
  const [toggle, setToggle] = useState(false);
  const [radio, setRadio] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Toggle checked={toggle} onChange={setToggle} label="Toggle" />
      <RadioButton checked={radio} onChange={setRadio} label="Radio" />
      
      <div className="flex flex-col gap-4 w-full max-w-md">
        <ListItem 
          text="Small List Item with Check" 
          icon={CheckCircle}
          onClick={() => console.log("Clicked small item")}
        />
        <ListItem 
          text="Large List Item with Star" 
          size="large"
          icon={Star}
          onClick={() => console.log("Clicked large item")}
        />
        <ListItem 
          text="List Item without Icon" 
          onClick={() => console.log("Clicked no icon item")}
        />
      </div>
    </div>
  );
} 