import React from 'react';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px',
            textAlign: 'center'
        }}>
            {/* Background Base */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundColor: '#022c22', // Deep Emerald
                zIndex: 0
            }}></div>

            {/* Glowing "Sun" Orb - Gold/Emerald */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80vw',
                height: '80vw',
                maxWidth: '800px',
                maxHeight: '800px',
                background: 'radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, rgba(4, 120, 87, 0.05) 50%, rgba(2, 44, 34, 0) 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 1
            }}></div>

            {/* Grain/Grid Texture Overlay */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                opacity: 0.3,
                zIndex: 1
            }}></div>

            {/* Content Container */}
            <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {/* Badge */}
                <div style={{
                    display: 'inline-block',
                    border: '1px solid rgba(251, 191, 36, 0.5)',
                    background: 'rgba(2, 44, 34, 0.8)',
                    backdropFilter: 'blur(10px)',
                    padding: '10px 25px',
                    borderRadius: '50px',
                    marginBottom: '40px',
                    color: '#fbbf24',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }}>
                    Based in Thoothukudi • Pan-India Service
                </div>

                {/* Headline */}
                <h1 className="heading-display" style={{ marginBottom: '30px' }}>
                    Elite Vehicle Insurance,<br />
                    <span style={{ color: '#fbbf24', fontStyle: 'italic' }}>Securing Your Journey.</span>
                </h1>

                {/* Description */}
                <p style={{
                    fontSize: '1.25rem',
                    color: '#e5e7eb', // Light gray for readability on dark green
                    maxWidth: '750px',
                    margin: '0 auto 50px',
                    lineHeight: '1.8'
                }}>
                    Specialized protection for your luxury and commercial vehicles.
                    Partner with Sun Insurance & Finance for premier coverage and comprehensive financial security tailored to your needs.
                </p>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a href="#contact" className="btn-prestige">
                        Get Vehicle Quote
                    </a>
                    <a href="#services" className="btn-outline-gold" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '12px 30px',
                        border: '1px solid rgba(251, 191, 36, 0.5)',
                        borderRadius: '2px', // Sharp corners for prestige look
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
        </section>
    );
};

export default Hero;
