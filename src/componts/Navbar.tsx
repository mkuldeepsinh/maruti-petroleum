"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div
            className={cn(
                "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
                className
            )}
        >
            <Menu setActive={setActive}>

                <a href="#home" onClick={() => setActive("Home")}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </a>



                <a
                    href="#fuels"
                    onClick={() => setActive("Fuels")}
                    className="block"
                >
                    <MenuItem setActive={setActive} active={active} item="Fuels">
                    </MenuItem>
                </a>




                <a href="#location" onClick={() => setActive("Location")}>
                    <MenuItem setActive={setActive} active={active} item="Location">
                    </MenuItem>
                </a>



                <a href="#contact" onClick={() => setActive("Contact Us")}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us">
                    </MenuItem>
                </a>

            </Menu>
        </div>
    );
}

export default Navbar;
