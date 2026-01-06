import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding" style={{ background: '#022c22', position: 'relative' }}>
            <div className="container">
                <div style={{
                    position: 'relative',
                    padding: '10px'
                }}>
                    {/* Decorative Border Frame */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        border: '2px solid #fbbf24',
                        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 20px 20px, calc(100% - 20px) 20px, calc(100% - 20px) calc(100% - 20px), 20px calc(100% - 20px), 20px 20px)',
                        pointerEvents: 'none'
                    }}></div>

                    <div className="contact-container" style={{
                    }}>
                        {/* Gold Leaf Decoration Top Right */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '100px',
                            height: '100px',
                            background: 'linear-gradient(225deg, #fbbf24 0%, transparent 50%)',
                            opacity: 0.2
                        }}></div>

                        {/* Contact Info */}
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{
                                color: '#fbbf24',
                                textTransform: 'uppercase',
                                letterSpacing: '3px',
                                marginBottom: '20px',
                                fontWeight: '600',
                                fontSize: '0.9rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <span style={{ width: '20px', height: '1px', background: '#fbbf24' }}></span>
                                Contact Us
                            </div>
                            <h2 style={{ fontSize: '3.5rem', fontFamily: "'Playfair Display', serif", marginBottom: '30px', color: '#fff', lineHeight: '1.1' }}>
                                Begin Your <br />
                                <span style={{ color: '#fbbf24' }}>Legacy.</span>
                            </h2>
                            <p style={{ color: '#d1d5db', marginBottom: '50px', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                We invite you to visit our offices or reach out to arrange a private consultation. Experience the pinnacle of financial security.
                            </p>

                            <div style={{ display: 'grid', gap: '30px' }}>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'rgba(251, 191, 36, 0.1)', display: 'grid', placeItems: 'center', color: '#fbbf24', borderRadius: '50%' }}>📍</div>
                                    <div>
                                        <h5 style={{ color: '#fff', marginBottom: '5px', fontFamily: "'Playfair Display', serif", fontSize: '1.2rem' }}>Office</h5>
                                        <p style={{ color: '#9ca3af' }}>123, Polepettai Main Road,<br />Thoothukudi - 628002</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'rgba(251, 191, 36, 0.1)', display: 'grid', placeItems: 'center', color: '#fbbf24', borderRadius: '50%' }}>📞</div>
                                    <div>
                                        <h5 style={{ color: '#fff', marginBottom: '5px', fontFamily: "'Playfair Display', serif", fontSize: '1.2rem' }}>Direct Line</h5>
                                        <p style={{ color: '#fbbf24', fontSize: '1.2rem', fontWeight: '500' }}>+91 77083 81592</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'rgba(251, 191, 36, 0.1)', display: 'grid', placeItems: 'center', color: '#fbbf24', borderRadius: '50%' }}>✉️</div>
                                    <div>
                                        <h5 style={{ color: '#fff', marginBottom: '5px', fontFamily: "'Playfair Display', serif", fontSize: '1.2rem' }}>Email</h5>
                                        <p style={{ color: '#9ca3af' }}>contact@suninsurance.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '40px', border: '1px solid rgba(251, 191, 36, 0.1)' }}>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                <div className="name-row">
                                    <div className="input-group" style={{ flex: 1 }}>
                                        <input type="text" placeholder="First Name" style={inputStyle} />
                                    </div>
                                    <div className="input-group" style={{ flex: 1 }}>
                                        <input type="text" placeholder="Last Name" style={inputStyle} />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <input type="email" placeholder="Email Address" style={inputStyle} />
                                </div>
                                <div className="input-group">
                                    <textarea rows="4" placeholder="Your Message" style={{ ...inputStyle, resize: 'none' }}></textarea>
                                </div>

                                <button className="btn-prestige" style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }}>
                                    Send Enquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <footer style={{
                    marginTop: '120px', // More breathing room
                    textAlign: 'center',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '60px',
                    color: '#9ca3af',
                    fontSize: '0.9rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '15px'
                }}>
                    <div style={{ color: '#fbbf24', fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}>Sun Insurance & Finance</div>
                    &copy; {new Date().getFullYear()} All Rights Reserved. Excellence in Protection.
                </footer>
            </div>

            <style jsx>{`
                .contact-container {
                    background: #042f2e;
                    padding: 80px 60px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 80px;
                    position: relative;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                }
                .name-row {
                    display: flex;
                    gap: 30px;
                }
                .input-group {
                    position: relative;
                }
                .input-group input:focus, .input-group textarea:focus {
                    border-color: #fbbf24 !important;
                    background: rgba(251, 191, 36, 0.05) !important;
                }
                @media (max-width: 768px) {
                    .contact-container {
                        padding: 40px 20px;
                        gap: 40px;
                        grid-template-columns: 1fr;
                    }
                    .name-row {
                        flex-direction: column;
                        gap: 20px;
                    }
                }
            `}</style>
        </section>
    );
};

// Extracted style for consistency
const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderLeft: '2px solid #fbbf24',
    padding: '18px 25px', // More padding
    color: '#fff',
    outline: 'none',
    fontFamily: "'Manrope', sans-serif",
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
};

export default Contact;
