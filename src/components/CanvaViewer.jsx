import { useEffect, useRef } from 'react'

export default function CanvaViewer({ url, onTotalPagesChange }) {
  const containerRef = useRef(null)
  const iframeRef = useRef(null)

  useEffect(() => {
    const embedUrl = convertToEmbedUrl(url)

    if (containerRef.current && !iframeRef.current) {
      const iframe = document.createElement('iframe')
      iframe.src = embedUrl
      iframe.style.width = '100%'
      iframe.style.height = '100%'
      iframe.style.border = 'none'
      iframe.style.borderRadius = '0.5rem'
      iframe.allow = 'fullscreen'
      iframe.title = 'Canva Presentation'
      containerRef.current.appendChild(iframe)
      iframeRef.current = iframe
    }

    onTotalPagesChange(1)

    return () => {
      if (iframeRef.current && containerRef.current) {
        containerRef.current.removeChild(iframeRef.current)
        iframeRef.current = null
      }
    }
  }, [url, onTotalPagesChange])

  return (
    <div
      ref={containerRef}
      className="w-full h-full max-w-6xl rounded-lg overflow-hidden bg-white dark:bg-gray-800"
      style={{
        aspectRatio: '16/9',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
      }}
    />
  )
}

function convertToEmbedUrl(shareUrl) {
  const designIdMatch = shareUrl.match(/design\/([A-Za-z0-9_-]+)/)
  if (designIdMatch) {
    return `https://www.canva.com/design/${designIdMatch[1]}/view`
  }
  return shareUrl
}
