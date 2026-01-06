import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300`}
            style={{
                backgroundColor: scrolled || mobileMenuOpen ? '#022c22' : 'transparent',
                width: '100%',
                position: 'fixed',
                top: 0,
                transition: 'all 0.4s ease',
                padding: scrolled ? '15px 0' : '30px 0',
                zIndex: 1000,
                borderBottom: scrolled ? '1px solid rgba(251, 191, 36, 0.2)' : 'none',
                boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.3)' : 'none'
            }}
        >
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative'
            }}>
                <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    {/* SVG Implementation of User's Logo for Perfect Sharpness */}
                    <div className="logo-svg-container" style={{ width: '55px', height: '60px', position: 'relative' }}>
                        <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }}>
                            {/* Sun Rays */}
                            <path d="M50 25V10M50 25L50 15" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                            <path d="M65 28L75 18" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                            <path d="M35 28L25 18" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                            <path d="M78 38L88 32" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                            <path d="M22 38L12 32" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                            <path d="M85 50L95 48" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                            <path d="M15 50L5 48" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />

                            {/* Rising Sun */}
                            <path d="M75 50C75 36.1929 63.8071 25 50 25C36.1929 25 25 36.1929 25 50" fill="#fbbf24" />

                            {/* Shield */}
                            <path d="M20 50H80V70C80 86.5685 66.5685 100 50 100C33.4315 100 20 86.5685 20 70V50Z" fill="#0f172a" stroke="#fbbf24" strokeWidth="1" />

                            {/* Bar Graph & Arrow */}
                            <rect x="35" y="75" width="6" height="15" rx="1" fill="white" />
                            <rect x="47" y="65" width="6" height="25" rx="1" fill="white" />
                            <rect x="59" y="58" width="6" height="32" rx="1" fill="white" />

                            {/* Arrow */}
                            <path d="M38 72L48 62L58 55L70 45" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M70 45L62 45M70 45L70 53" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div style={{ paddingLeft: '0px' }}>
                        <h1 style={{
                            fontSize: '1.4rem',
                            fontWeight: '700',
                            letterSpacing: '2px',
                            margin: 0,
                            fontFamily: "'Manrope', sans-serif",
                            textTransform: 'uppercase'
                        }}>
                            SUN <span style={{ color: '#fbbf24' }}>INSURANCE</span>
                        </h1>
                        <p style={{
                            fontSize: '0.65rem',
                            color: '#d1d5db',
                            margin: 0,
                            letterSpacing: '3px',
                            textTransform: 'uppercase'
                        }}>Premium Finance</p>
                    </div>
                </div>

                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        color: '#fbbf24',
                        fontSize: '1.8rem',
                        cursor: 'pointer'
                    }}
                    className="mobile-menu-toggle"
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>

                <style>{`
                    @media (max-width: 768px) {
                        .mobile-menu-toggle { display: block !important; }
                        nav ul {
                            display: ${mobileMenuOpen ? 'flex' : 'none'} !important;
                            flex-direction: column;
                            position: absolute;
                            top: 100%;
                            left: 0;
                            width: 100%;
                            background-color: #022c22;
                            padding: 40px;
                            border-bottom: 2px solid #fbbf24;
                        }
                        nav ul li { margin-bottom: 20px; text-align: center; }
                        nav ul li a { font-size: 1.3rem !important; font-family: 'Playfair Display', serif; }
                    }
                    @media (min-width: 769px) {
                        nav ul { display: flex !important; flex-direction: row; position: static; background: transparent; padding: 0; }
                    }
                `}</style>

                <nav>
                    <ul style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                        {['Home', 'Services', 'Partners', 'About'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`}
                                    className="nav-link"
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        color: '#fff',
                                        transition: 'color 0.3s',
                                        fontFamily: "'Manrope', sans-serif"
                                    }}
                                    onMouseOver={(e) => e.target.style.color = '#fbbf24'}
                                    onMouseOut={(e) => e.target.style.color = '#fff'}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a href="#contact"
                                className="btn-outline-gold"
                                onClick={() => setMobileMenuOpen(false)}
                                style={{ padding: '10px 25px', fontSize: '0.8rem' }}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
