"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { sidebarLinks } from "@/constant"
import { cn } from "@/lib/utils"

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet"
import { Footer } from "./Footer"

export function MobileNav({ user }: MobileNavProps) {
   const pathname = usePathname()

   return (
      <section className="w-full max-w-[264px]">
         <Sheet>
            <SheetTrigger>
               <Image
                  src="/icons/ic_hamburger.svg"
                  alt="menu hamburger"
                  width={30}
                  height={30}
                  className="cursor-pointer"
               />
            </SheetTrigger>
            <SheetContent side="left" className="bg-white border-none">
               <Link href="/" className="flex items-center px-4 cursor-pointer gap-1">
                  <Image
                     src="/icons/ic_logo.svg"
                     alt="horizon logo"
                     width={34}
                     height={34}
                     className="size-[24px] max-xl:size-14"
                  />
                  <h1 className="font-bold text-26 font-ibm-plex-serif text-black-1">Horizon</h1>
               </Link>

               <div className="mobilenav-sheet">
                  <SheetClose asChild>
                     <nav className="flex flex-col h-full pt-16 text-white gap-6">
                        {sidebarLinks.map((link) => {
                           const isActive =
                              pathname === link.route || pathname.startsWith(`${link.route}/`)

                           return (
                              <SheetClose asChild key={link.route}>
                                 <Link
                                    href={link.route}
                                    key={link.label}
                                    className={cn("mobilenav-sheet_close w-full", {
                                       "bg-bank-gradient": isActive,
                                    })}>
                                    <Image
                                       src={link.imgURL}
                                       alt={link.label}
                                       width={20}
                                       height={20}
                                       className={cn({ "brightness-[3] invert-0": isActive })}
                                    />
                                    <p
                                       className={cn("text-16 font-semibold text-black-2", {
                                          "text-white": isActive,
                                       })}>
                                       {link.label}
                                    </p>
                                 </Link>
                              </SheetClose>
                           )
                        })}

                        {/* USER */}
                     </nav>
                  </SheetClose>

                  <Footer user={user} type="mobile" />
               </div>
            </SheetContent>
         </Sheet>
      </section>
   )
}
