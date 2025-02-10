import React from 'react'
import { IoCartOutline, IoSearch } from "react-icons/io5";
import Image from 'next/image';


import styles from "./navbar.module.css";

const categories = [
    'Best sellers',
    'Casters',
    'Industries', 
    'Material Handling Equipment',
    'About Us',
    'Contact Us'
]

const Navbar = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.topNav}>
                <div className={styles.topLeft}>
                    <Image src="/decoLogo.png" alt='Deco Logo' width={68} height={68}/>
                    <div
                        style={{ maxWidth: '12rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                    >
                        <p style={{ textAlign: 'center', fontWeight: 600 }}>DOUGLAS EQUIPMENT COMPANY</p>
                        <p style={{ fontSize: '0.75rem', color: 'gray'}}>EST 1955</p>
                    </div>
                </div>
                <div className={styles.searchInput}>
                    <IoSearch style={{ color: 'black'}} size={24}/>
                    <input 
                        placeholder='What are you looking for?'
                    />
                </div>
                <div className={styles.actions}>
                    <p style={{ fontWeight: 500 }}>305-888-3700</p>
                    <p style={{ fontWeight: 500 }}>My Account</p>
                    {/* <FaRegHeart style={{ color: 'white'}} size={28}/> */}
                    <IoCartOutline style={{ color: 'white'}} size={36}/>
                </div>
            </nav> 
            <nav className={styles.bottomNav}>
                {categories.map((category, index) => (
                    <p key={index}>
                        {category}
                    </p>
                ))}
            </nav>
        </div>
    )
}

export default Navbar