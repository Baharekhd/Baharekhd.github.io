import { useEffect, useRef, useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist'

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).href

export default function PDFViewer({ currentPage, onTotalPagesChange }) {
  const canvasRef = useRef(null)
  const pdfRef = useRef(null)
  const renderTaskRef = useRef(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function loadPDF() {
      try {
        const pdf = await pdfjsLib.getDocument('/portfolio.pdf').promise
        if (cancelled) return
        pdfRef.current = pdf
        onTotalPagesChange(pdf.numPages)
        setLoading(false)
      } catch (err) {
        console.error('Failed to load PDF:', err)
      }
    }

    loadPDF()
    return () => { cancelled = true }
  }, [onTotalPagesChange])

  useEffect(() => {
    if (!pdfRef.current || loading) return

    async function renderPage() {
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel()
        renderTaskRef.current = null
      }

      const page = await pdfRef.current.getPage(currentPage + 1)
      const canvas = canvasRef.current
      if (!canvas) return

      const container = canvas.parentElement
      const containerWidth = container.clientWidth
      const containerHeight = container.clientHeight

      const viewport = page.getViewport({ scale: 1 })
      const scaleX = containerWidth / viewport.width
      const scaleY = containerHeight / viewport.height
      const scale = Math.min(scaleX, scaleY) * window.devicePixelRatio

      const scaledViewport = page.getViewport({ scale })

      canvas.width = scaledViewport.width
      canvas.height = scaledViewport.height
      canvas.style.width = `${scaledViewport.width / window.devicePixelRatio}px`
      canvas.style.height = `${scaledViewport.height / window.devicePixelRatio}px`

      const ctx = canvas.getContext('2d')
      const task = page.render({ canvasContext: ctx, viewport: scaledViewport })
      renderTaskRef.current = task

      try {
        await task.promise
      } catch (err) {
        if (err?.name !== 'RenderingCancelledException') console.error(err)
      }
    }

    renderPage()
  }, [currentPage, loading])

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-950">
      {loading && (
        <div className="text-gray-500 text-sm tracking-widest uppercase">Loading…</div>
      )}
      <canvas
        ref={canvasRef}
        style={{ display: loading ? 'none' : 'block', maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
  )
}
