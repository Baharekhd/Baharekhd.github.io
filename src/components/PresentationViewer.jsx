import { useState, useEffect, useCallback } from 'react'
import PDFViewer from './PDFViewer'
import PageIndicator from './PageIndicator'

export default function PresentationViewer() {
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [showUI, setShowUI] = useState(false)

  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev))
  }, [totalPages])

  const goToPreviousPage = useCallback(() => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev))
  }, [])

  const goToPage = useCallback((page) => {
    setCurrentPage(Math.max(0, Math.min(page, totalPages - 1)))
  }, [totalPages])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') goToNextPage()
      else if (e.key === 'ArrowLeft' || e.key === 'Backspace') goToPreviousPage()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goToNextPage, goToPreviousPage])

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setShowUI(true)}
      onMouseLeave={() => setShowUI(false)}
      onMouseMove={() => setShowUI(true)}
    >
      {/* PDF fills entire space */}
      <PDFViewer currentPage={currentPage} onTotalPagesChange={setTotalPages} />

      {/* Overlay controls */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{ opacity: showUI ? 1 : 0 }}
      >
        {/* Left arrow */}
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 0}
          className="pointer-events-auto absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 hover:bg-white disabled:opacity-20 disabled:cursor-not-allowed shadow-lg transition-colors backdrop-blur-sm"
          aria-label="Previous"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages - 1}
          className="pointer-events-auto absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 hover:bg-white disabled:opacity-20 disabled:cursor-not-allowed shadow-lg transition-colors backdrop-blur-sm"
          aria-label="Next"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Bottom page indicator */}
        <div className="pointer-events-auto absolute bottom-4 left-4 right-4 flex justify-center">
          <PageIndicator
            current={currentPage}
            total={totalPages}
            onPageChange={goToPage}
            onSettings={() => {}}
          />
        </div>
      </div>
    </div>
  )
}
