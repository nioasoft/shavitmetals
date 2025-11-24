import { useState } from 'react'
import './index.css'

function App() {
  return (
    <div className="app">
      {/* Navigation / Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">שביט מתכות</div>
          <nav>
            <a href="#about">אודות</a>
            <a href="#services">שירותים</a>
            <a href="#contact">צור קשר</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: "url('/assets/hero.png')" }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>שביט מתכות – פתרונות ברזל ומתכת מתקדמים</h1>
          <h2>הספק המוביל שלך בהוד השרון והסביבה</h2>
          <p>שירות אמין, מקצועי ומהיר ללקוחות פרטיים, קבלנים ותעשייה.</p>
          <a href="#contact" className="btn">דברו איתנו</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h3>מי אנחנו</h3>
              <p>
                חברת "שביט מתכות" מתמחה באספקה, עיבוד ומסחר בכל סוגי המתכות.
                עם ניסיון עשיר בשטח ומיקום מרכזי בהוד השרון, אנחנו מספקים מעטפת שירות מלאה –
                החל מחומרי גלם ועד לפינוי ומחזור מתכות.
              </p>
              <p><strong>אצלנו המילה היא ברזל, והשירות הוא מזהב.</strong></p>
            </div>
            <div className="about-image">
              <img src="/assets/truck.png" alt="משאית שביט מתכות" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services" style={{ backgroundImage: "url('/assets/texture.png')" }}>
        <div className="services-overlay"></div>
        <div className="container relative">
          <h2 className="text-center">השירותים שלנו</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="icon">🏗️</div>
              <h3>מסחר ושיווק מתכות</h3>
              <p>ברזל, אלומיניום, נחושת ונירוסטה בכל הכמויות.</p>
            </div>
            <div className="service-card">
              <div className="icon">♻️</div>
              <h3>פינוי ומחזור</h3>
              <p>שירותי פינוי פסולת מתכת ממפעלים ואתרי בנייה.</p>
            </div>
            <div className="service-card">
              <div className="icon">⚙️</div>
              <h3>חיתוך וכיפוף</h3>
              <p>שירותי עיבוד ראשוני לפי מידה.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container text-center">
          <h2>יצירת קשר</h2>
          <p>מחפשים פתרון בתחום המתכת? דברו איתנו.</p>

          <div className="contact-details">
            <div className="contact-item">
              <strong>כתובת:</strong> המעפילים 12, הוד השרון, 7116949
            </div>
            <div className="contact-item">
              <strong>טלפון:</strong> <a href="tel:0543007150">054-3007150</a>
            </div>
            <div className="contact-item">
              <strong>מייל:</strong> <a href="mailto:baruch@shavitmetals.com">baruch@shavitmetals.com</a>
            </div>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.676669939384!2d34.8877633!3d32.1502277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d365666666667%3A0x6666666666666666!2sHa-Ma'apilim%20St%2012%2C%20Hod%20HaSharon!5e0!3m2!1sen!2sil!4v1633000000000!5m2!1sen!2sil"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy">
            </iframe>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} שביט מתכות. כל הזכויות שמורות.</p>
        </div>
      </footer>

      <a href="https://wa.me/972543007150" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
      </a>
    </div>
  )
}

export default App
