"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home">
                    {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div> */}
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Our Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses">All Courses</HoveredLink>
                        <HoveredLink href="/courses">Basics Music Theory</HoveredLink>
                        <HoveredLink href="/courses">Advanced Composition</HoveredLink>
                        <HoveredLink href="/courses">Song Writing</HoveredLink>
                        <HoveredLink href="/courses">All Courses</HoveredLink>
                    </div>
                </MenuItem>
                
                    <MenuItem setActive={setActive} active={active} item="Contect Us">


                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/contact">Contact Us</HoveredLink>
                            <HoveredLink href="/contact">Support</HoveredLink>
                            <HoveredLink href="/contact">FAQ</HoveredLink>
                            <HoveredLink href="/contact">Privacy Policy</HoveredLink>
                        </div>
                    </MenuItem>
                
            </Menu>
        </div>
    )
}

export default navbar