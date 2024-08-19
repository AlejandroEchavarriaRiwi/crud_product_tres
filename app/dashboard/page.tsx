
"use client"
import NavbarAside from "@/components/ui/navbar/NavbarAside"
import ProductTable from "../../components/table"


export default function NuevaPagina() {
    return (
      <div className="flex">
        <NavbarAside/>
        <ProductTable/>
      </div>
    )
  }
