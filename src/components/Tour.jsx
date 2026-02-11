import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const travelCards = [
  { img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa", title: "NEPAL", sub: "Nepal has seen many rulers and ruling dynasties. The earliest rulers were the Kirantis who ruled for many centuries..." },
  { img: "https://images.unsplash.com/photo-1587135941948-670b381f08ce", title: "THE BEST OF NORTH INDIA", sub: "Meet by our representative on arrival, welcome with garlanding and transfer to the hotel. Explore the rich heritage..." },
  { img: "https://images.unsplash.com/photo-1564507592333-c60657eea523", title: "DO DHAM YATRA", sub: "Arrival Delhi Airport / Railway Station, Meet & Assist by our representative. Later drive to the sacred shrines..." },
  { img: "https://cdn.i-travelled.com/wp-content/uploads/2018/04/tours.jpg", title: "KASHMIR", sub: "On arrival at Srinagar, you will be met by our representative and transfer you to Houseboat. Experience paradise..." },
  { img: "https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2019/07/tajmahal-1.jpg", title: "LADAKH", sub: "On arrival at Leh airport, you will be met by our representative and transfer you to Hotel. Explore the desert..." },
  { img: "https://cdn.i-travelled.com/wp-content/uploads/2018/04/tours.jpg", title: "KASHMIR", sub: "On arrival at Srinagar, you will be met by our representative and transfer you to Houseboat. Experience paradise..." },
  
];

const multiCards = [...travelCards, ...travelCards, ...travelCards];

const Tour = () => {
  return (
    <section className="relative w-full bg-white flex flex-col items-center justify-start overflow-hidden py-20">
      <div className="text-center mb-12 px-4">
        <h2 className="text-black text-3xl md:text-5xl font-black uppercase tracking-tighter">
          Our Customers <span className="text-blue-500">Favourite Destination</span>
        </h2>
        <div className="h-1.5 w-24 bg-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="w-full max-w-[1500px]">
        <Swiper
          modules={[EffectCoverflow, Autoplay, Navigation]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: -20,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation={true}
          className="final-tour-swiper"
        >
          {multiCards.map((card, index) => (
            <SwiperSlide key={index} className="final-tour-slide">
              {/* Added -webkit-font-smoothing and translateZ to outer container */}
              <div className="card-outer-box w-full h-full overflow-hidden transition-all duration-700 select-none">
                <div className="h-[48%] w-full overflow-hidden">
                   <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                </div>

                <div className="h-[52%] p-6 flex flex-col justify-between">
                  <div className="text-content">
                    <h3 className="card-main-title uppercase font-black tracking-tight mb-3">
                      {card.title}
                    </h3>
                    <p className="card-main-desc text-sm line-clamp-4 leading-relaxed">
                      {card.sub}
                    </p>
                  </div>
                  <button className="card-main-btn text-left text-xs font-bold uppercase tracking-widest border-b-2 w-fit pb-1">
                    View Package
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        /* 1. Base Slide - Force crisp rendering */
.final-tour-slide {
  width: 320px !important;
  height: 500px !important;
  opacity: 1 !important;
  filter: brightness(0.4); 
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
  transform: scale(0.85);

  /* Essential for Sharpness */
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

/* 2. Outer Box - Remove sub-pixel blur */
.card-outer-box {
  background-color: #111;
  border-radius: 16px;
  transform: translate3d(0, 0, 0); /* Force GPU */
  will-change: transform;
  image-rendering: -webkit-optimize-contrast; /* Sharpen images */
}

/* 3. Active Slide - Pure scaling without 3D depth blur */
.swiper-slide-active {
  width: 440px !important; 
  filter: brightness(1) !important;
  transform: scale(1) translateZ(0) !important; /* Scale 1 ensures no stretch blur */
  z-index: 100;
}

/* 4. Text - Sharpen font edges */
.card-main-title, .card-main-desc {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  transform: translateZ(0); /* Keeps text on its own layer */
}
        
        .card-main-desc { 
            color: #9ca3af; 
            font-weight: 300; 
            /* Anti-blur for descriptions */
            transform: translateZ(0);
        }

        // .swiper-slide-active {
        //   width: 440px !important; 
        //   filter: brightness(1) !important;
        //   transform: scale(1.1) translateZ(0) !important;
        //   z-index: 100;
        // }

        .swiper-slide-active .card-outer-box {
          background-color: white !important;
          box-shadow: 0 40px 80px rgba(0,0,0,0.2) !important;
        }

        .swiper-slide-active .card-main-title {
          color: #000 !important;
          font-size: 1.8rem;
          font-weight: 900;
        }

        .swiper-slide-active .card-main-desc {
          color: #222 !important;
          font-weight: 600;
        }

        .swiper-slide-active .card-main-btn {
          color: #000 !important;
          border-color: #000 !important;
        }

        /* Arrows styling */
        .swiper-button-next, .swiper-button-prev {
          color: #000 !important;
          background: white;
          width: 50px !important;
          height: 50px !important;
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
      `}</style>
    </section>
  );
};

export default Tour;