import React from 'react'
import { Button } from '../ui/button'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import {
  DropdownMenu as ShadDrop,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from '@/components/ui/dropdown-menu'

export const ProfileActions = () => {
  return (
    <>
      <Image src="/icons/account.svg" width={40} height={40} alt="My Account" />
      <div className="">
        <p className="text-sm">Hello, Digital</p>
        <Button variant="ghost" className="h-auto p-0 font-bold">
          My Account <ChevronDown size={16} />
        </Button>
      </div>
      {/* <ShadDrop>
    <DropdownMenuTrigger className="hidden md:flex">
      <Image
        src="/icons/account.svg"
        width={40}
        height={40}
        alt="My Account"
      />
      <div className="">
        <p className="text-sm">Hello, Digital</p>
        <Button variant="ghost" className="h-auto p-0 font-bold">
          My Account <ChevronDown size={16} />
        </Button>
      </div>
    </DropdownMenuTrigger>
  </ShadDrop> */}
    </>
  )
}
