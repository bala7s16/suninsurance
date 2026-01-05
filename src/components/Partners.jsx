import React from 'react';

const PartnerLogo = ({ name }) => (
    <div style={{
        padding: '30px 50px',
        border: '1px solid rgba(251, 191, 36, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, rgba(6, 78, 59, 0.2) 0%, rgba(6, 78, 59, 0) 100%)',
        minWidth: '200px',
        position: 'relative',
        overflow: 'hidden'
    }}>
        <div style={{
            position: 'absolute',
            top: 0, left: 0, width: '2px', height: '100%',
            background: 'linear-gradient(180deg, transparent, #fbbf24, transparent)',
            opacity: 0.5
        }}></div>

        <h4 style={{
            fontSize: '1.2rem',
            color: '#d1d5db',
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontFamily: "'Manrope', sans-serif",
            fontWeight: '600'
        }}>
            {name}
        </h4>
    </div>
);

const Partners = () => {
    return (
        <section id="partners" style={{
            padding: '100px 0',
            background: '#022c22',
            borderTop: '1px solid rgba(251, 191, 36, 0.1)',
            borderBottom: '1px solid rgba(251, 191, 36, 0.1)'
        }}>
            <div className="container">
                <div className="partners-container">
                    <div className="partners-header">
                        <div style={{ width: '40px', height: '2px', background: '#fbbf24', marginBottom: '20px' }}></div>
                        <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '10px', fontFamily: "'Playfair Display', serif" }}>Trusted Alliances</h3>
                        <p style={{ fontSize: '0.9rem', color: '#9ca3af', lineHeight: '1.6' }}>We partner with the industry's most respected institutions.</p>
                    </div>

                    <div className="partners-scroll">
                        <PartnerLogo name="Chola MS" />
                        <PartnerLogo name="IFFCO Tokio" />
                        <PartnerLogo name="Star Health" />
                        <PartnerLogo name="United India" />
                        <PartnerLogo name="HDFC Ergo" />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .partners-container {
                    display: flex;
                    align-items: center;
                    gap: 60px;
                    flex-wrap: wrap;
                }
                .partners-header {
                    flex: 0 0 250px;
                }
                .partners-scroll {
                    flex: 1;
                    display: flex;
                    gap: 20px;
                    overflow-x: auto;
                    padding-bottom: 20px;
                    scrollbar-width: none;
                    min-width: 0; /* Important for flex child with overflow */
                }
                @media (max-width: 768px) {
                    .partners-container {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 30px;
                    }
                    .partners-header {
                        flex: auto;
                        width: 100%;
                    }
                    .partners-scroll {
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    );
};

export default Partners;
