import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const travelCards = [
  { img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa", title: "NEPAL", sub: "Nepal has seen many rulers and ruling dynasties. The earliest rulers were the Kirantis who ruled for many centuries..." },
  { img: "./north11.jpeg", title: "THE BEST OF NORTH INDIA", sub: "Meet by our representative on arrival, welcome with garlanding and transfer to the hotel. Explore the rich heritage..." },
  { img: "./dham11 (2).jpeg", title: "DO DHAM YATRA", sub: "Arrival Delhi Airport / Railway Station, Meet & Assist by our representative. Later drive to the sacred shrines..." },
  { img: "./kashmir11.jpeg", title: "KASHMIR", sub: "On arrival at Srinagar, you will be met by our representative and transfer you to Houseboat. Experience paradise..." },
  { img: "./ladakh11.jpeg", title: "LADAKH", sub: "On arrival at Leh airport, you will be met by our representative and transfer you to Hotel. Explore the desert..." },
];

const multiCards = [...travelCards, ...travelCards, ...travelCards];

const Tour = () => {
  return (
    <section className="relative w-full bg-white flex flex-col items-center justify-start overflow-hidden py-10 md:py-20">
      <div className="text-center mb-8 md:mb-12 px-4">
        <h2 className="text-black text-3xl md:text-5xl font-black uppercase tracking-tighter">
          Our Customers <span className="text-blue-500">Favourite Destination</span>
        </h2>
        <div className="h-1.5 w-24 bg-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="w-full max-w-[1500px] relative px-2">
        <Swiper
          modules={[EffectCoverflow, Autoplay, Navigation]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
            slideShadows: false,
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation={true}
          className="final-tour-swiper !pb-16 !pt-5"
        >
          {multiCards.map((card, index) => (
            <SwiperSlide key={index} className="final-tour-slide">
              <div className="card-outer-box w-full h-full overflow-hidden transition-all duration-700 select-none border border-gray-400 shadow-2xl bg-white">
                {/* Image Section - Increased to 65% */}
                <div className="h-[65%] w-full overflow-hidden">
                   <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                </div>

                {/* Text Section - Decreased to 35% */}
                <div className="h-[35%] p-4 md:p-5 flex flex-col justify-between">
                  <div className="text-content">
                    <h3 className="card-main-title uppercase font-black tracking-tight mb-1 text-base md:text-lg">
                      {card.title}
                    </h3>
                    <p className="card-main-desc text-[10px] md:text-xs line-clamp-2 md:line-clamp-3 leading-tight opacity-90">
                      {card.sub}
                    </p>
                  </div>
                  <button className="card-main-btn text-left text-[9px] md:text-[10px] font-bold uppercase tracking-widest border-b-2 w-fit pb-0.5 mt-2">
                    View Package
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .final-tour-slide {
          width: 330px !important; 
          height: 440px !important;
          opacity: 0.7;
          filter: brightness(0.7) blur(0px); 
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transform: scale(0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        .swiper-slide-active {
          opacity: 1 !important;
          filter: brightness(1) blur(0px) !important;
          transform: scale(1) !important;
          z-index: 50;
        }

        .card-outer-box {
          border-radius: 20px;
          transform: translateZ(0);
          will-change: transform, filter;
        }

        .swiper-button-next, .swiper-button-prev {
          color: #000 !important;
          background: white;
          width: 45px !important;
          height: 45px !important;
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          z-index: 100;
        }

        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 18px !important;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .final-tour-slide {
            width: 260px !important;
            height: 390px !important;
            filter: brightness(0.8) blur(0px);
            opacity: 0.8;
          }
          .swiper-slide-active {
             opacity: 1 !important;
             filter: brightness(1) !important;
          }
        }

        .card-main-title { color: #555; }
        .card-main-desc { color: #777; }
        .swiper-slide-active .card-main-title { color: #000 !important; }
        .swiper-slide-active .card-main-desc { color: #333 !important; }
      `}</style>
    </section>
  );
};

export default Tour;