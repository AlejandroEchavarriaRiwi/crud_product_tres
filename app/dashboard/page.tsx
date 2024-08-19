
"use client"
import NavbarAside from "@/components/ui/navbar/NavbarAside"
import Table from "../../components/table"


export default function NuevaPagina() {
    return (
      <div className="flex">
        <NavbarAside />
        <div className="flex justify-center w-full"><Table /></div>
        
      </div>
    )
  }
