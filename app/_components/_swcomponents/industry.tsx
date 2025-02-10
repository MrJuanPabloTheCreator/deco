import React from 'react'

const industriesOptions = [
    {
      title: 'Aerospace',
      image: '/aerospace.jpg'
    },
    {
      title: 'Automotive',
      image: '/automotive.jpg'
    },
    {
      title: 'Distribution and Logistics',
      image: '/distribution.jpg'
    },
    {
      title: 'Food and Beverage',
      image: '/food.jpg'
    },
    {
      title: 'Furniture',
      image: '/furniture.jpg'
    },
    {
      title: 'Hospitality',
      image: '/hospitality.jpg'
    },
    {
      title: 'Janitorial',
      image: '/Janitorial.jpg'
    },
    {
      title: 'Manufacturing',
      image: '/Manufacturing.jpg'
    },
    {
      title: 'Marine and Ship',
      image: '/marine.jpg'
    },
    {
      title: 'Medical',
      image: '/medical.jpg'
    },
    {
      title: 'Pharmaceutical',
      image: '/lab.jpg'
    },
    {
      title: 'Retail',
      image: '/retail.jpg'
    }
];

interface IndustryProps {
    handleSelectIndustry: (title: string) => void
}

const Industry:React.FC<IndustryProps> = ({ handleSelectIndustry }) => {
    return (
        <div>
            <p 
                style={{ fontSize: 24, fontWeight: 600, paddingBottom: '1rem' }}
            >
                Industry
            </p>
            <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gap: '0.25rem',
            }}>
                {industriesOptions.map((option, index) => (
                    <div key={index}
                        style={industry === option.title ? { backgroundColor: '#BD2441', borderColor: '#BD2441' }:{}}
                        className={styles.industryOptionCard} 
                        onClick={() => handleSelectIndustry(option.title)}
                    >
                        <div className={styles.imageContainer}>
                            <Image src={option.image} alt={option.title} fill objectFit='cover'/>
                        </div>
                        <p>{option.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Industry