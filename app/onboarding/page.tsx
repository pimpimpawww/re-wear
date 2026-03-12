'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const onboardingData = [
  {
    title: "Welcome to Re-Wear!",
    subtitle: "Discover fashion, sustainably",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=800&fit=crop",
  },
  {
    title: "Buy or sell pre-loved items easily",
    subtitle: "",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=800&fit=crop",
  },
  {
    title: "Shop your dreams from everywhere, effortlessly",
    subtitle: "",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=800&fit=crop",
  }
];

export default function OnboardingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentSlide < onboardingData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      document.cookie = 'hasSeenOnboarding=true; path=/; max-age=31536000';
      router.push('/login');
    }
  };

  const handleSkip = () => {
    document.cookie = 'hasSeenOnboarding=true; path=/; max-age=31536000';
    router.push('/login');
  };

  const slide = onboardingData[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 to-white flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="w-full max-w-md lg:max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="relative min-h-[600px] flex flex-col">
          
          {/* Skip button */}
          <div className="absolute top-4 right-4 z-10">
            <button 
              onClick={handleSkip}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all"
            >
              Skip
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col lg:flex-row items-center justify-center p-8 lg:p-12 gap-8">
            
            {/* Illustration */}
            <div className="w-full max-w-sm">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </div>

            {/* Text & Actions */}
            <div className="w-full max-w-md flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <p className="text-gray-600 text-lg mb-8">
                  {slide.subtitle}
                </p>
              )}

              {/* Dots indicator */}
              <div className="flex gap-2 mb-8">
                {onboardingData.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'w-8 bg-accent' 
                        : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Next button */}
              <button
                onClick={handleNext}
                className="w-full max-w-sm bg-accent text-white py-4 rounded-full font-medium text-base hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl"
              >
                {currentSlide === onboardingData.length - 1 ? 'Get Started' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
