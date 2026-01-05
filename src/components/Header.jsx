import React, { useState, useEffect } from 'react';

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
                    {/* Abstract Emerald Icon */}
                    <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(45deg, #064e3b, #065f46)',
                        border: '1px solid #fbbf24',
                        transform: 'rotate(45deg)',
                        display: 'grid',
                        placeItems: 'center',
                        boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'
                    }}>
                        <span style={{
                            transform: 'rotate(-45deg)',
                            color: '#fbbf24',
                            fontWeight: 'bold',
                            fontSize: '18px',
                            fontFamily: "'Playfair Display', serif"
                        }}>S</span>
                    </div>
                    <div style={{ paddingLeft: '10px' }}>
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
