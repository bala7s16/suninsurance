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

            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', // 50/50 Split
                gap: '40px',
                alignItems: 'center',
                position: 'relative',
                zIndex: 2,
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 20px'
            }}>

                {/* Left Content Column */}
                <div style={{ zIndex: 3 }}>

                    {/* Badge */}
                    <div style={{
                        display: 'inline-block',
                        border: '1px solid rgba(251, 191, 36, 0.3)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(12px)',
                        padding: '12px 28px',
                        borderRadius: '50px',
                        marginTop: '30px',
                        marginBottom: '40px',
                        color: '#fbbf24',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                    }}>
                        Based in Thoothukudi • Pan-India Service
                    </div>

                    {/* Headline */}
                    <h1 className="heading-display" style={{ marginBottom: '30px', textAlign: 'left', fontSize: '3.5rem', lineHeight: '1.2' }}>
                        Elite Vehicle Insurance,<br />
                        <span style={{ color: '#fbbf24', fontStyle: 'italic' }}>Securing Your Journey.</span>
                    </h1>

                    {/* Description */}
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#e5e7eb',
                        maxWidth: '90%',
                        marginBottom: '50px',
                        lineHeight: '1.8',
                        fontWeight: '300'
                    }}>
                        Specialized protection for your luxury vehicles, commercial fleets, and health.
                        Partner with Sun Insurance & Finance for premier coverage and comprehensive financial security tailored to your needs.
                    </p>

                    {/* Buttons */}
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
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
                @media (max-width: 900px) {
                    #home {
                        padding-top: 140px !important; /* Extra padding for mobile */
                        justify-content: flex-start; /* Start from top on mobile to avoid centering issues */
                    }
                    .container {
                        grid-template-columns: 1fr !important;
                        gap: 20px !important; /* Reduced gap */
                        text-align: center;
                    }
                    .hero-image-container {
                        height: 400px !important;
                        order: 0;
                        /* Adjust mask for mobile to be less aggressive if needed, or keep consistent */
                        mask-image: radial-gradient(ellipse at center, black 50%, transparent 70%);
                        -webkit-mask-image: radial-gradient(ellipse at center, black 50%, transparent 70%);
                    }
                    .container > div:first-child {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .heading-display {
                        text-align: center !important;
                        fontSize: 2.2rem !important;
                    }
                    .hero-badge {
                        margin-top: 30px !important; /* Push down significantly */
                        margin-bottom: 20px !important;
                    }
                    .container p {
                        text-align: center;
                    }
                    .container > div:first-child > div:last-child {
                        justify-content: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
