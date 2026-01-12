import React from 'react';
import heroBanner from '../assets/hero_banner.jpg';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '120px', // Increased from 80px to accommodate fixed header
            background: '#022c22', // Deep Emerald Base
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            {/* Background Texture - Global */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
                opacity: 0.4,
                zIndex: 0
            }}></div>

            {/* Glowing Orb Behind Content */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 70%)',
                zIndex: 1,
                pointerEvents: 'none'
            }}></div>

            <div className="container hero-container" style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 20px',
                width: '100%' // Ensure width 100%
            }}>

                {/* Left Content Column */}
                <div style={{ zIndex: 3 }} className="hero-content">

                    {/* Badge */}
                    <div className="hero-badge">
                        Based in Thoothukudi • Pan-India Service
                    </div>

                    {/* Headline */}
                    <h1 className="heading-display">
                        Elite Vehicle Insurance,<br />
                        <span style={{ color: '#fbbf24', fontStyle: 'italic' }}>Securing Your Journey.</span>
                    </h1>

                    {/* Description */}
                    <p className="hero-description">
                        Specialized protection for your luxury vehicles, commercial fleets, and health.
                        Partner with Sun Insurance & Finance for premier coverage and comprehensive financial security tailored to your needs.
                    </p>

                    {/* Buttons */}
                    <div className="hero-buttons">
                        <a href="#contact" className="btn-prestige">
                            Get Vehicle Quote
                        </a>
                        <a href="#services" className="btn-outline-gold" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '12px 30px',
                            border: '1px solid rgba(251, 191, 36, 0.5)',
                            borderRadius: '2px',
                            color: '#fbbf24',
                            fontWeight: '600',
                            textDecoration: 'none',
                            letterSpacing: '1px',
                            transition: 'all 0.3s ease'
                        }}>
                            View All Services
                        </a>
                    </div>
                </div>

                {/* Right Image Column - Seamless Blend */}
                <div className="hero-image-container" style={{
                    position: 'relative',
                    height: '600px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // This mask creates the transparent fading effect edges
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 95%)'
                }}>
                    <img
                        src={heroBanner}
                        alt="Sun Insurance Family Home Protection"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            // Blending mode to help fusion with background color
                            mixBlendMode: 'color-burn',
                            opacity: 0.95
                        }}
                    />
                </div>

            </div>

            <style>{`
                /* Default Desktop Styles */
                .hero-container {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
                    gap: 40px;
                    align-items: center;
                }
                .hero-content {
                    /* Ensure content aligns center */
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }
                .hero-badge {
                    display: inline-block;
                    border: 1px solid rgba(251, 191, 36, 0.3);
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(12px);
                    padding: 12px 28px;
                    border-radius: 50px;
                    margin-top: 30px;
                    margin-bottom: 40px;
                    color: #fbbf24;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    font-size: 0.8rem;
                    font-weight: 700;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
                }
                .heading-display {
                    margin-bottom: 30px;
                    text-align: center;
                    font-size: 3.5rem;
                    line-height: 1.2;
                }
                .hero-description {
                    font-size: 1.2rem;
                    color: #e5e7eb;
                    max-width: 90%;
                    margin-bottom: 50px;
                    line-height: 1.8;
                    font-weight: 300;
                    text-align: center;
                }
                .hero-buttons {
                    display: flex;
                    gap: 20px;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                /* Mobile Styles */
                @media (max-width: 900px) {
                    #home {
                        padding-top: 100px !important;
                        display: block !important;
                        height: auto !important;
                        min-height: 100vh;
                    }
                    .hero-container {
                        display: flex !important;
                        flex-direction: column;
                        gap: 30px !important;
                        text-align: center !important;
                        padding-left: 20px !important;
                        padding-right: 20px !important;
                        width: 100% !important;
                        max-width: 100vw !important; /* Force width constraint */
                        overflow-x: hidden;
                        align-items: center !important; /* Ensure flex items start center */
                    }
                    .hero-image-container {
                        height: 250px !important; /* Smaller image on mobile */
                        width: 100% !important;
                        margin-bottom: 20px;
                        order: -1 !important; 
                        
                        mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
                        -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
                    }
                    .hero-content {
                        width: 100% !important;
                        display: flex;
                        flex-direction: column;
                        align-items: center !important;
                    }
                    .heading-display {
                        text-align: center !important;
                        font-size: 2rem !important; /* Much smaller for mobile */
                        width: 100%;
                        line-height: 1.3 !important;
                        word-wrap: break-word;
                    }
                    .heading-display br {
                        display: none;
                    }
                    .hero-badge {
                        margin-top: 10px !important;
                        margin-bottom: 20px !important;
                        align-self: center;
                        padding: 8px 20px !important; /* Compact badge */
                        font-size: 0.7rem !important;
                    }
                    .hero-description {
                        text-align: center !important;
                        font-size: 1rem !important;
                        max-width: 100% !important;
                    }
                    .hero-buttons {
                        justify-content: center !important;
                        width: 100%;
                        display: flex;
                        flex-direction: row !important; /* Single line */
                        flex-wrap: wrap; 
                        gap: 15px;
                        align-items: center; /* Center vertical */
                    }
                    /* Custom White styling for mobile override or general? 
                       User asked for "white color". Making buttons white themed. 
                    */
                    .btn-prestige {
                        background: #ffffff !important;
                        color: #022c22 !important;
                    }
                    .btn-outline-gold {
                        border-color: #ffffff !important;
                        color: #ffffff !important;
                    }
                    .hero-buttons a {
                        flex: 0 0 auto; /* Do not stretch */
                        width: auto; /* Auto width */
                        display: inline-block; /* Behave like buttons */
                        text-align: center;
                        padding: 12px 25px !important;
                        font-size: 0.9rem !important;
                        max-width: 100%; /* Prevent overflow */
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
