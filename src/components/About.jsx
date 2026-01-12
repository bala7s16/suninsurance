import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <div className="about-content-wrapper" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '60px',
                    flexWrap: 'wrap'
                }}>
                    <div className="about-map" style={{ flex: '1 1 300px' }}>
                        <div style={{
                            position: 'relative',
                            padding: '10px',
                            border: '1px solid #f59e0b',
                            borderRadius: '16px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            overflow: 'hidden',
                            height: '400px'
                        }}>
                            <iframe
                                src="https://maps.google.com/maps?layer=c&cbll=8.803243,78.1416406&cbp=12,132.7,,0,0&output=svembed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '8px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Sun Insurance Street View"
                            ></iframe>
                        </div>
                    </div>

                    <div className="about-text" style={{ flex: '1 1 min(500px, 100%)' }}>
                        <h2 className="heading-display" style={{ fontSize: '2.5rem', marginBottom: '25px', textAlign: 'left' }}>About Sun Insurance</h2>
                        <h4 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '15px' }}>
                            Led by Mr. Somasundaram (Sundar)
                        </h4>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px', lineHeight: '1.8' }}>
                            Headquartered in the bustling port city of <strong>Thoothukudi</strong>, Sun Insurance & Finance is proud to extend its premium services to clients <strong>across all of India</strong>. Distance is no barrier to our commitment.
                        </p>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
                            Specializing in Vehicle and Health insurance, we partner with top-tier providers like Chola MS and IFFCO Tokio to ensure claims are settled fast and support is always available. Additionally, our Small Finance division helps turn your dream of owning a vehicle into reality.
                        </p>

                        <div className="stats-container" style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
                            <div style={{
                                padding: '20px 30px',
                                background: 'rgba(251, 191, 36, 0.05)',
                                border: '1px solid rgba(251, 191, 36, 0.1)',
                                borderRadius: '12px',
                                flex: 1
                            }}>
                                <h3 style={{ fontSize: '2.5rem', margin: 0, color: '#fbbf24', fontFamily: "'Playfair Display', serif" }}>12+</h3>
                                <p style={{ fontSize: '0.9rem', color: '#e5e7eb', marginTop: '5px' }}>Years Experience</p>
                            </div>
                            <div style={{
                                padding: '20px 30px',
                                background: 'rgba(251, 191, 36, 0.05)',
                                border: '1px solid rgba(251, 191, 36, 0.1)',
                                borderRadius: '12px',
                                flex: 1
                            }}>
                                <h3 style={{ fontSize: '2.5rem', margin: 0, color: '#fbbf24', fontFamily: "'Playfair Display', serif" }}>1000+</h3>
                                <p style={{ fontSize: '0.9rem', color: '#e5e7eb', marginTop: '5px' }}>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                    <style>{`
                        @media (max-width: 900px) {
                            .about-content-wrapper {
                                flex-direction: column !important;
                                gap: 40px !important;
                            }
                            .about-text {
                                text-align: left !important;
                                padding-left: 0 !important;
                            }
                        }
                    `}</style>
                </div>
            </div>
        </section>
    );
};

export default About;
