import { useState } from 'react'

export default function PageIndicator({ current, total, onPageChange }) {
  const [inputValue, setInputValue] = useState(current + 1)
  const [isEditing, setIsEditing] = useState(false)

  const handleGoToPage = () => {
    const page = Math.max(1, Math.min(inputValue, total))
    onPageChange(page - 1)
    setInputValue(page)
    setIsEditing(false)
  }

  return (
    <div className="flex items-center gap-3 sm:gap-6 bg-white/95 backdrop-blur-sm px-4 sm:px-5 py-3 rounded-full shadow-lg border border-gray-200">
      {/* Logo + name */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Bahareh Khodakarami" className="h-6 sm:h-7 w-auto" />
        <span className="hidden sm:block text-sm font-medium text-gray-800 whitespace-nowrap">Bahareh Khodakarami</span>
      </div>

      {/* Divider */}
      <div className="w-px h-4 bg-gray-200" />

      {/* Page counter */}
      <div className="flex items-center gap-2">
        {isEditing ? (
          <div className="flex items-center gap-1.5">
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(parseInt(e.target.value) || 1)}
              onBlur={handleGoToPage}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleGoToPage()
                if (e.key === 'Escape') { setInputValue(current + 1); setIsEditing(false) }
              }}
              autoFocus
              className="w-10 px-1 py-0.5 text-center rounded border border-gray-400 bg-white text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <span className="text-sm text-gray-500">/ {total}</span>
          </div>
        ) : (
          <button
            onClick={() => { setIsEditing(true); setInputValue(current + 1) }}
            className="flex items-center gap-1 hover:bg-gray-100 px-2 py-0.5 rounded-full transition-colors cursor-pointer"
          >
            <span className="text-sm font-semibold text-gray-900">{current + 1}</span>
            <span className="text-sm text-gray-400">/</span>
            <span className="text-sm font-medium text-gray-500">{total}</span>
          </button>
        )}
      </div>

      {/* Progress bar — hidden on mobile */}
      <div className="hidden sm:flex items-center gap-2">
        <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gray-800 transition-all duration-300"
            style={{ width: `${((current + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="w-px h-4 bg-gray-200" />

      {/* Social links */}
      <div className="flex items-center gap-1">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/bahareh-khodakarami-641832239/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-[#0077b5]"
          aria-label="LinkedIn"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>

        {/* Dribbble */}
        <a
          href="https://dribbble.com/bahare___khd"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-[#ea4c89]"
          aria-label="Dribbble"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.29 10.29 0 004.392-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.017-8.04 6.4a10.161 10.161 0 006.29 2.166c1.42 0 2.77-.29 4.006-.816zm-11.62-2.073c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12a28.8 28.8 0 00-.6-1.084C7.6 11.77 2.135 11.83 1.692 11.82l-.028.032c0 .063.003.126.003.19 0 2.406.906 4.607 2.387 6.277zm-2.258-7.61c.457.005 5.16-.027 9.593-2.322a53.614 53.614 0 00-3.383-5.326 10.22 10.22 0 00-6.21 7.648zm11.033-9.642c.183.257 2.312 3.266 3.432 5.47 3.27-1.225 4.654-3.084 4.832-3.33a10.228 10.228 0 00-8.264-2.14zm9.697 4.22c-.208.28-1.74 2.258-5.147 3.67.214.44.416.893.6 1.35.065.158.13.316.19.478 3.394-.43 6.77.258 7.1.33a10.254 10.254 0 00-2.743-5.828z"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
