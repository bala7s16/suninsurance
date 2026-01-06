import React from 'react';
import partnersImage from '../assets/partners_consolidated.png';

/* 
 * Partners Component
 * Displays a consolidated image of all our trusted insurance partners.
 */
const Partners = () => {
    return (
        <section id="partners" style={{
            padding: '80px 0',
            background: '#022c22',
            borderTop: '1px solid rgba(251, 191, 36, 0.1)',
            borderBottom: '1px solid rgba(251, 191, 36, 0.1)'
        }}>
            <div className="container">
                <div className="partners-container">
                    <div className="partners-header">
                        <div style={{ width: '40px', height: '2px', background: '#fbbf24', margin: '0 auto 20px' }}></div>
                        <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '10px', fontFamily: "'Playfair Display', serif" }}>Trusted Alliances</h3>
                        <p style={{ fontSize: '0.9rem', color: '#9ca3af', lineHeight: '1.6' }}>We partner with the industry's most respected institutions.</p>
                    </div>

                    <div className="partners-image-wrapper">
                        <img
                            src={partnersImage}
                            alt="Our Trusted Insurance Partners - General and Health Insurance"
                            className="partners-img"
                        />
                    </div>
                </div>
            </div>
            <style>{`
                .partners-container {
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                    text-align: center;
                }
                .partners-image-wrapper {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                    border: 1px solid rgba(251, 191, 36, 0.2);
                    background: rgba(255, 255, 255, 0.05); /* Slight backdrop */
                }
                .partners-img {
                    width: 100%;
                    height: auto;
                    display: block;
                    object-fit: contain;
                }
                @media (max-width: 768px) {
                    .partners-image-wrapper {
                        border-radius: 8px;
                        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                    }
                }
            `}</style>
        </section>
    );
};

export default Partners;
