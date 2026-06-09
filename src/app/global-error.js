'use client'

export default function GlobalError({ error, reset }) {
  return (
    <html lang="zh-TW">
      <body style={{ background: '#0a0a0a', color: '#f5f5f5', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>頁面發生錯誤</h2>
          <p style={{ color: '#71717a', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
            {error?.message || '請稍後再試'}
          </p>
          <button
            onClick={reset}
            style={{ background: '#D4FF00', color: '#000', padding: '0.75rem 2rem', fontWeight: 700, cursor: 'pointer', border: 'none' }}
          >
            重新載入
          </button>
        </div>
      </body>
    </html>
  )
}
