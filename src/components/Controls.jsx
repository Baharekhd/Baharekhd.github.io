import { useState } from 'react'

export default function Controls({ canvaUrl, onChangeUrl }) {
  const [url, setUrl] = useState(canvaUrl)
  const [showForm, setShowForm] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!url.trim()) { setError('Please enter a URL'); return }
    if (!url.includes('canva.com')) { setError('Please enter a valid Canva URL'); return }
    onChangeUrl(url)
    setShowForm(false)
  }

  return (
    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="space-y-4 max-w-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-6 bg-gradient-to-b from-indigo-600 to-pink-600 rounded-full" />
          <h3 className="font-semibold text-gray-900 dark:text-white">Presentation Settings</h3>
        </div>

        {!showForm ? (
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600 dark:text-gray-400 break-all">
              {canvaUrl.slice(0, 50)}...
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors"
            >
              Change URL
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="url"
              value={url}
              onChange={(e) => { setUrl(e.target.value); setError('') }}
              placeholder="https://www.canva.com/design/..."
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
            />
            {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
            <div className="flex gap-2">
              <button type="submit" className="flex-1 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">Load</button>
              <button type="button" onClick={() => { setShowForm(false); setUrl(canvaUrl); setError('') }} className="flex-1 px-3 py-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-900 dark:text-white text-sm font-medium rounded-lg transition-colors">Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
