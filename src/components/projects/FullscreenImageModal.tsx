import { useState, useEffect, useCallback } from 'react'

interface FullscreenImageModalProps {
  images: Array<{
    id: string
    title: string
    image: string
  }>
  currentIndex: number
  isOpen: boolean
  onClose: () => void
}

export default function FullscreenImageModal({ 
  images, 
  currentIndex, 
  isOpen, 
  onClose 
}: Readonly<FullscreenImageModalProps>) {
  const [activeIndex, setActiveIndex] = useState(currentIndex)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    setActiveIndex(currentIndex)
    setImageLoaded(false)
  }, [currentIndex])

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          e.preventDefault()
          prevSlide()
          break
        case 'ArrowRight':
          e.preventDefault()
          nextSlide()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, prevSlide, nextSlide])

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  if (!isOpen || !images || images.length === 0) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <h2 className="text-xl font-semibold">{images[activeIndex].title}</h2>
            <p className="text-sm text-white/70">{activeIndex + 1} / {images.length}</p>
          </div>
          
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div className="flex items-center justify-center h-full p-2 sm:p-4 pt-16 sm:pt-20 pb-16 sm:pb-20">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={images[activeIndex].image}
            alt={images[activeIndex].title}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-300"
            style={{
              maxWidth: '95vw',
              maxHeight: '85vh',
              width: 'auto',
              height: 'auto'
            }}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none'
            }}
          />
          
          {/* Loading indicator */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-4">
          <div className="flex justify-center gap-0.5 sm:gap-1 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden border-2 transition-all ${
                  index === activeIndex
                    ? 'border-brand-cyan/50 ring-2 ring-brand-cyan/20'
                    : 'border-white/30 hover:border-white/50'
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
        </div>
      )}

      {/* Click to close hint */}
      <div className="absolute bottom-4 right-4 text-white/50 text-sm">
        <div className="flex items-center gap-2">
          <kbd className="px-2 py-1 bg-white/10 rounded text-xs">ESC</kbd>
          <span>để đóng</span>
        </div>
      </div>
    </div>
  )
}
