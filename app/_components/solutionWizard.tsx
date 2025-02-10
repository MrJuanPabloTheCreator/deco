"use client"

import Image from 'next/image';
import React, { useState } from 'react'
import styles from "./solutionWizard.module.css";
import { casterCapacityRanges, castersResults, industriesOptions, surfaceOptions } from './options';
import { IoSearch } from 'react-icons/io5';

type ProductsType = {
    name: string;
    image: string;
    industries?: string[] | undefined;
}

const SolutionWizard = () => {
    const [results, setResults] = useState<ProductsType[] | []>([])
    const [loading, setLoading] = useState(false)
    const [industry, setIndustry] = useState<string | null>(null)
    const [surface, setSurface] = useState<string | null>(null)
    const [totalLoad, setTotalLoad] = useState<string | null>(null)
    const [numberOfCasters, setNumberOfCasters] = useState(1)

    const handleSelectIndustry = (title: string) => {
        setIndustry(title)
    }

    const handleSelectSurface = (title: string) => {
        setSurface(title)
    }

    const handleChangeNofCasters = (number: number) => {
        setNumberOfCasters(numberOfCasters + number)
    }

    const handleSearch = () => {
        setLoading(true)
        setTimeout(() => {
            try {
              setResults(castersResults);
            } catch (error) {
              console.error(error);
            } finally {
              setLoading(false);
            }
        }, 1300);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <div style={{ marginTop: '1rem'}}>
                <p 
                    style={{ textAlign: 'center', fontSize: 44, fontWeight: 600, paddingBottom: '0rem' }}
                >
                    Industry
                </p>
                <p style={{ textAlign: 'center', color: 'gray', paddingBottom: '2rem' }}>Choose the industry for your application.</p>
                <div style={{ 
                    paddingLeft: '4rem',
                    paddingRight: '4rem',
                    justifyContent: 'center',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    // overflowX: 'scroll',
                    columnGap: '1rem',
                    rowGap: '1rem'
                }}>
                    {industriesOptions.map((option, index) => (
                        <div key={index}
                            style={industry === option.title ? { backgroundColor: '#93162d', color: 'white' }:{}}
                            className={styles.industryOptionCard} 
                            onClick={() => handleSelectIndustry(option.title)}
                        >
                            <div className={styles.imageContainer} style={{ borderRadius: '0.5rem'}}>
                                <Image src={option.image} alt={option.title} fill objectFit='cover'/>
                            </div>
                            <p>{option.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ paddingLeft: '4rem', paddingRight: '4rem', marginTop: '1rem', display: 'flex', flexDirection: 'column'}}>
                <p 
                    style={{ textAlign: 'center', fontSize: 44, fontWeight: 600 }}
                >
                    Surface
                </p>
                <p style={{ textAlign: 'center', color: 'gray', paddingBottom: '2rem' }}>Select the surface type for best performance.</p>
                <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(9, 1fr)',
                    // overflowX: 'scroll',
                }}>
                    {surfaceOptions.map((option, index) => (
                        <div key={index}
                            className={styles.surfaceOptionCard} 
                            onClick={() => handleSelectSurface(option.title)}
                        >
                            <div 
                                style={surface === option.title ? { borderColor: '#93162d' }:{}}
                                className={styles.surfaceImageContainer}
                            >
                                <Image src={option.image} alt={option.title} fill objectFit='cover'/>
                            </div>
                            <p>{option.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%', marginTop: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '50%', alignItems: 'center'}}>
                    <p 
                        style={{ textAlign: 'center', fontSize: 40, fontWeight: 600 }}
                    >
                        Total Load
                    </p>
                    <p style={{ textAlign: 'center', color: 'gray', paddingBottom: '2rem' }}>Pick the weight range your casters need to support.</p>
                    <div className={styles.capacityRanges}>
                        {casterCapacityRanges.map((option, index) => (
                            <div 
                                onClick={() => setTotalLoad(option)}
                                key={index}
                                className={styles.capacityRange}
                                style={totalLoad === option ? { backgroundColor: '#93162d' }:{}}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', justifyContent: 'center'}}>
                    <p 
                        style={{ textAlign: 'center', fontSize: 40, fontWeight: 600 }}
                    >
                        Number of casters
                    </p>
                    <p style={{ textAlign: 'center', color: 'gray', paddingBottom: '2rem' }}>Enter how many casters you need per object.</p>
                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'black', width: 'fit-content', borderRadius: '0.5rem', overflow: 'hidden' }}>
                        <button 
                            onClick={() => handleChangeNofCasters(-1)}
                            className={styles.numberOfCasters}
                        >
                            -
                        </button>
                        <p style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', color: 'white', fontSize: '1.25rem', fontWeight: 600 }}>
                            {numberOfCasters}
                        </p>
                        <button 
                            onClick={() => handleChangeNofCasters(1)}
                            className={styles.numberOfCasters}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5rem', marginBottom: '5rem'}}>
                <p
                    style={{ textAlign: 'center', fontSize: 40, fontWeight: 600, paddingBottom: '1rem' }}
                >
                    Find your perfect solution!
                </p>
                <button 
                    onClick={handleSearch}
                    style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '1rem', backgroundColor: '#93162d', color: 'white', borderRadius: '0.5rem', border: 'none', fontSize: '1rem', fontWeight: 600, width: '35%' }}
                >
                    {loading ? 
                        (
                            <>Loading...</>
                        ):(
                            <>
                                <IoSearch style={{ color: 'white'}} size={20}/>
                                Search
                            </>
                        )
                    }
                </button>
            </div>
            {results.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15rem'}}>
                    <p
                        style={{ textAlign: 'center', fontSize: 40, fontWeight: 600, paddingBottom: '1rem' }}
                    >
                        Best Match
                    </p>
                    <div style={{ gap: '2rem', display: 'flex', marginLeft: '4rem', marginRight: '4rem', backgroundColor: 'rgb(44, 44, 44)', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem' }}>
                        <div 
                            style={{ borderRadius: '0.5rem', overflow: 'hidden', width: '37%', height: '25rem' }}
                            className={styles.productImageContainer}
                        >
                            <Image src={results[0].image} alt={results[0].name} fill objectFit='cover'/>
                        </div>
                        <div style={{ 
                            flex: 1,
                            // height: 'fit-content',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                            position: 'relative'
                        }}>
                            <p style={{ color: 'white', fontSize: '1.75rem', fontWeight: 600 }}>{results[0].name}</p>
                            <p style={{ color: 'white', fontSize: '1.25rem', fontWeight: 600 }}>$25.00</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', backgroundColor: '#3D3D3D', padding: '1rem', borderRadius: '0.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                                    <div 
                                        className={styles.decoWizardImageContainer}
                                    >
                                        <Image src={'/decoWizard.png'} alt={'Deco Wizard'} fill objectFit='contain'/>
                                    </div>
                                    <p style={{ fontWeight: 600, color: 'white' }}>Deco Casters Wizard</p>
                                </div>
                                <p style={{ color: 'white' }}>
                                    Based on the industry you selected, the floor type, and your specific requirements, this is the best caster for your use case. We recommend using 4 casters per object for optimal weight distribution and stability. 
                                    This caster features a durable polyurethane wheel for smooth rolling on your selected surface, a swivel mechanism for easy maneuverability, and a built-in brake system for added safety. 
                                    Its high load capacity ensures reliability, making it the perfect choice for your needs
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <button style={{ cursor: 'pointer', width: 'fit-content', padding: '0.5rem', borderRadius: '1rem', backgroundColor: '#93162d', border: 'none', color: 'white', fontWeight: 600 }}>Questions?</button>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', border: 'solid gray 2px', width: 'fit-content', borderRadius: '1.5rem', overflow: 'hidden' }}>
                                    <button 
                                        onClick={() => handleChangeNofCasters(-1)}
                                        className={styles.quantity}
                                    >
                                        -
                                    </button>
                                    <p style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', color: 'white', fontSize: '1.25rem', fontWeight: 600 }}>
                                        {numberOfCasters}
                                    </p>
                                    <button 
                                        onClick={() => handleChangeNofCasters(1)}
                                        className={styles.quantity}
                                    >
                                        +
                                    </button>
                                </div>
                                <button 
                                    style={{ width: '100%', borderRadius: '2rem', cursor: 'pointer', backgroundColor: '#93162d', border: 'none', fontSize: '1rem', fontWeight: 600, color: 'white' }}
                                >
                                    Add to cart
                                </button>
                            </div>
                            {/* <input  style={{ position: 'absolute', bottom: 0, right: 0, width: '100%', padding: '0.5rem', borderRadius: '0.5rem', backgroundColor: 'gray', color: 'white' }}/> */}    
                        </div>
                    </div>
                    <p
                        style={{ textAlign: 'center', fontSize: 40, fontWeight: 600, paddingBottom: '1rem' }}
                    >
                        Aditional Results
                    </p>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '1rem',
                            paddingLeft: '4rem',
                            paddingRight: '4rem'
                        }}
                    >
                        {castersResults.map((option, index) => (
                            <div key={index}>
                                <div 
                                    className={styles.productImageContainer}
                                >
                                    <Image src={option.image} alt={option.name} fill objectFit='cover'/>
                                </div>
                                <p>{option.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default SolutionWizard