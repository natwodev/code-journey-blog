import { useState } from 'react'

interface ProjectImageSliderProps {
  images: Array<{
    id: string
    title: string
    image: string
  }>
  onImageClick?: (index: number) => void
}

export default function ProjectImageSlider({ images, onImageClick }: Readonly<ProjectImageSliderProps>) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-96 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
        <p className="text-white/50">Không có hình ảnh</p>
      </div>
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full">
      {/* Main Image Display */}
      <div className="relative">
        <button 
          className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden border border-white/10 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-brand-cyan/50" 
          onClick={() => onImageClick?.(currentIndex)}
          aria-label={`Xem ảnh ${images[currentIndex].title} ở chế độ toàn màn hình`}
        >
          <img
            src={images[currentIndex].image}
            alt={images[currentIndex].title}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
            style={{
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none'
            }}
          />
          
          {/* Click to expand overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
          </div>
          
          {/* Image Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-white font-semibold text-lg">{images[currentIndex].title}</h3>
          </div>
        </button>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? 'border-brand-cyan/50 ring-2 ring-brand-cyan/20'
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none'
                }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Slide Counter */}
      {images.length > 1 && (
        <div className="mt-2 text-center text-sm text-white/60">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}