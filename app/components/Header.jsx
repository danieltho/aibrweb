'use client'
import Link from "next/link";
import {twMerge} from "tailwind-merge";
import {Button} from "./Button";
import Image from "next/image";
import {NavLink} from "./NavLink";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@nextui-org/react";
import {useState} from "react";
import {lato} from "../ui/fonts";

const styles = {
    default: {
        header: `flex 
        justify-between 
        py-2 
        px-6 
        border-b 
        border-bottom-gray-950
        font-helvetica`
    }
}

const menuItems = [
    "Asociacion",
    "Revista",
    "ARIES",
    "Congreso Anual"
];


export const Header = ({...props}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const headerStyleSheet = twMerge(
        styles.default.header
    )

    return (
        <>
            <Navbar
                isBordered
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                position={"sticky"}
                maxWidth={"full"}
            >
                <NavbarContent className="lg:hidden" justify="start">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        icon={isMenuOpen ? "close" : "menu"}
                    />
                </NavbarContent>
                <NavbarBrand>
                    <Image src={`/assets/images/logo.png`} width={`167`} height={`35`} alt={`AIBR`}/>
                </NavbarBrand>
                <NavbarContent className="hidden lg:flex lg:justify-between lg:items-center gap-x-11" justify="center">
                    {menuItems.map((item, index) => (
                        <NavbarItem key={`${item}-${index}-a`}>
                            <Link
                                color={
                                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                href="#"
                                size="lg"
                                className={`text-gray-950 text-base hover:text-black transition-colors duration-200 uppercase`}
                            >
                                {item}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
                <NavbarContent justify="end">
                    <Link href={`/login`} className={`${lato.className} antialiased py-3 px-3    text-base border rounded-full`}>
                        login
                    </Link>
                </NavbarContent>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`} className={``}>
                            <Link
                                className="w-full text-base flex flex-col items-center"
                                color={
                                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                href="#"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </>
    )
}