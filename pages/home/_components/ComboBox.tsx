
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { getBranches } from "@/app/admin/home/_service/CompanyService"
import Branch from "@/model/BranchModel"
import { useState } from "react"

export function ComboboxDemo({branches}:{branches:Branch[]}) {
  const [open, setOpen] =  useState(false)
  const [value, setValue] = useState("")
  const a = branches;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="flex self-center justify-self-center mr-12"
        >
          {value
            ? a.find((branch) => branch.id == value)?.id
            : "Escolha a filial..."}
          <ChevronsUpDown className="ml-2 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-0">
        <Command>
          <CommandList>
            <CommandEmpty>Nenhuma filial disponível.</CommandEmpty>
            <CommandGroup>
              {a.map((branch) => (
                <CommandItem
                  key={branch.id}
                  value={branch.city}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === branch.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {branch.id}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
