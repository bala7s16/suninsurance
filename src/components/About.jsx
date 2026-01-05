import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '60px',
                    flexWrap: 'wrap'
                }}>
                    <div style={{ flex: '1 1 300px' }}>
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
                                src="https://maps.google.com/maps?layer=c&cbll=8.8010786,78.1349415&cbp=12,192.09,,0,5&output=svembed"
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

                    <div style={{ flex: '1 1 500px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '25px' }}>About Sun Insurance</h2>
                        <h4 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '15px' }}>
                            Led by Mr. Somasundaram (Sundar)
                        </h4>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px', lineHeight: '1.8' }}>
                            Headquartered in the bustling port city of <strong>Thoothukudi</strong>, Sun Insurance & Finance is proud to extend its premium services to clients <strong>across all of India</strong>. Distance is no barrier to our commitment.
                        </p>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
                            Specializing in Vehicle and Health insurance, we partner with top-tier providers like Chola MS and IFFCO Tokio to ensure claims are settled fast and support is always available. Additionally, our Small Finance division helps turn your dream of owning a vehicle into reality.
                        </p>

                        <div style={{ display: 'flex', gap: '40px' }}>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', margin: 0, color: 'var(--color-primary)' }}>12+</h3>
                                <p style={{ fontSize: '0.9rem', color: '#fff' }}>Years Experience</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', margin: 0, color: 'var(--color-primary)' }}>1000+</h3>
                                <p style={{ fontSize: '0.9rem', color: '#fff' }}>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
