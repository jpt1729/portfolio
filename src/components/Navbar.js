import { motion } from 'framer-motion'

import Link from "next/link"

import { barcodeFont, headingFont } from "../lib/fonts"

export default function Navbar({}){
    return (
        <>
        <header className="fixed top-4 left-1/2 -translate-x-1/2 text-color-5 w-full max-w-screen-2xl flex justify-between md:px-5 px-2">
            <Link href='/' className={`${barcodeFont.className} text-5xl`}>John Tan-Aristy</Link>
            <nav className={`${headingFont.className} text-2xl gap-10 md:flex hidden`}>
                <Link href = '/'>
                    Home
                </Link>
                <Link href = '/about'>
                    About Me
                </Link>
                <Link href = '/work'>
                    My Work
                </Link>
                <Link href = '/contact'>
                    Contact
                </Link>
            </nav>
        </header>
        <div className="h-12 w-full mt-4"/>
        </>
    )
}