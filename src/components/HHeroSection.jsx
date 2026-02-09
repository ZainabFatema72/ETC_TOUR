import { useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'
import './hero.css'




  
function HHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

    const heroImages = [
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80',
    'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1920&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80',
    'https://images.unsplash.com/photo-1511631810399-c78b2ca1e49e?w=1920&q=80',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80',
    'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1920&q=80',
    'https://images.unsplash.com/photo-1499363536502-87642509e31b?w=1920&q=80'
  ]


  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-slideshow">
        <div className="hero-slide-container">
          <div 
            className={`hero-slide main-slide slide-${currentSlide % 4}`}
            style={{ backgroundImage: `url(${heroImages[currentSlide]})` }}
          />
          <div 
            className={`hero-slide secondary-slide-1 slide-${currentSlide % 4}`}
            style={{ backgroundImage: `url(${heroImages[(currentSlide + 1) % heroImages.length]})` }}
          />
          <div 
            className={`hero-slide secondary-slide-2 slide-${currentSlide % 4}`}
            style={{ backgroundImage: `url(${heroImages[(currentSlide + 2) % heroImages.length]})` }}
          />
        </div>
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title animate-fade-in">Explore The World With Us</h1>
        <p className="hero-subtitle animate-fade-in-delay">
          Discover amazing destinations, create unforgettable memories, and experience the journey of a lifetime 
          with our expertly crafted travel packages.
        </p>
        <div className="hero-buttons animate-slide-up">
          <button className="btn-primary">
            Explore Destinations
            <ChevronRight size={20} />
          </button>
          <button className="btn-secondary">View Packages</button>
        </div>
      </div>
    </section>
  )
}

export default HHeroSection
