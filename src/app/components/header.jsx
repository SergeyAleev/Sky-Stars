"use client"

import Link from "next/link"
import Image from "next/image"
import styles from "./header.module.css"
import "../../styles/utils.css"
import { useState } from "react"


export default function Header() {
    const [menuState, setMenuState] = useState(false);
    function showMenu() {
        setMenuState(!menuState)
        console.log(menuState)
    }

    return (
        <header
            className={styles.header}
        >
            <Link
                className={styles.home}
                href='/'>
            Home
            </Link>
            <h1
                className={styles.heading}
            >
                Sky&nbsp;Stars
            </h1>
            <div
                className={styles.menuBurger}
            >
            <button
                className="no-button"
                onClick={showMenu}
            >
                <Image
                    src="/menuBurger.svg"
                    width={30}
                    height={16}
                    alt="navigation"
                />
            </button>
            </div>

        </header>
    )
}
