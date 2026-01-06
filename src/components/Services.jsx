import React from 'react';

const ServiceCard = ({ icon, title, description, features, delay }) => (
    <div className="emerald-card section-transition" style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        animationDelay: delay
    }}>
        <div style={{
            position: 'absolute',
            top: '0',
            right: '0',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, transparent 50%, rgba(251, 191, 36, 0.1) 50%)',
            borderTopRightRadius: '12px'
        }}></div>

        <div style={{
            fontSize: '2.5rem',
            marginBottom: '25px',
            color: '#fbbf24',
            background: 'linear-gradient(135deg, rgba(6, 95, 70, 0.6), rgba(4, 47, 46, 0.8))',
            width: '70px', height: '70px',
            borderRadius: '12px',
            display: 'grid', placeItems: 'center',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.4s ease'
        }}>
            {icon}
        </div>

        <h3 style={{
            fontSize: '1.8rem',
            marginBottom: '20px',
            color: '#fff',
            fontFamily: "'Playfair Display', serif",
            letterSpacing: '0.5px'
        }}>
            {title}
        </h3>

        <p style={{ color: '#d1d5db', marginBottom: '30px', flexGrow: 1, lineHeight: '1.7' }}>
            {description}
        </p>

        <ul style={{
            borderTop: '1px solid rgba(251, 191, 36, 0.1)',
            paddingTop: '20px',
            marginTop: 'auto'
        }}>
            {features.map((feature, index) => (
                <li key={index} style={{
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#e5e7eb',
                    fontSize: '0.95rem',
                    fontFamily: "'Manrope', sans-serif"
                }}>
                    <span style={{ color: '#fbbf24', marginRight: '12px', fontSize: '1rem' }}>♦</span>
                    {feature}
                </li>
            ))}
        </ul>

        <div style={{ marginTop: '25px' }}>
            <a href="#contact" className="btn-outline-gold" style={{
                fontSize: '0.8rem',
                padding: '8px 20px',
                width: '100%',
                textAlign: 'center',
                display: 'block',
                transition: 'all 0.3s ease'
            }}>
                View Details
            </a>
        </div>

        <style jsx>{`
            .emerald-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 20px 40px -12px rgba(251, 191, 36, 0.15);
                border-color: rgba(251, 191, 36, 0.4);
            }
            .emerald-card:hover .btn-outline-gold {
                background: rgba(251, 191, 36, 0.1);
                color: #fff;
            }
        `}</style>
    </div>
);

const Services = () => {
    return (
        <section id="services" className="section-padding" style={{ background: '#022c22', position: 'relative', overflow: 'hidden' }}>
            {/* Background Texture */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23fbbf24\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px'
                    }}>
                        <span style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, transparent, #fbbf24)' }}></span>
                        <span style={{ color: '#fbbf24', margin: '0 15px', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', fontWeight: '600' }}>Our Expertise</span>
                        <span style={{ height: '1px', width: '40px', background: 'linear-gradient(270deg, transparent, #fbbf24)' }}></span>
                    </div>

                    <h2 className="heading-display" style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Premium Service Suite</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#d1d5db', fontSize: '1.1rem' }}>
                        Tailored financial instruments and insurance protection for the discerning client.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '40px',
                    perspective: '1000px'
                }}>
                    <ServiceCard
                        icon="🛡️"
                        title="Elite Vehicle Protection"
                        description="Comprehensive coverage for your luxury and commercial vehicles. Experience peace of mind with our zero-liability assurance."
                        features={["Zero Depreciation Cover", "24/7 Roadside Assistance", "Commercial Fleet Specialists"]}
                        delay="0.1s"
                    />

                    <ServiceCard
                        icon="⚕️"
                        title="Health & Vitality"
                        description="Prioritizing your well-being with premium health insurance plans. Inclusive coverage ensuring world-class medical access."
                        features={["Cashless Hospitalization", "Global Coverage Options", "24/7 Claim Support"]}
                        delay="0.2s"
                    />

                    <ServiceCard
                        icon="⚖️"
                        title="Strategic Finance"
                        description="Empowering your ambitions with flexible vehicle financing and capital solutions. Tailored rates for sustainable growth."
                        features={["Competitive Interest Rates", "Expedited Processing", "Customized Repayment"]}
                        delay="0.3s"
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
