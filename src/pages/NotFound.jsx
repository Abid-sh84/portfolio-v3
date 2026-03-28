import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: '16px',
      padding: '24px',
    }}>
      <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', fontSize: '13px' }}>
        404 — Page Not Found
      </p>
      <h1 style={{ fontSize: '40px', fontWeight: 800, color: 'var(--text-primary)' }}>
        Oops! Nothing here.
      </h1>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '360px', fontSize: '15px' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: '8px' }}>
        <i className="fas fa-arrow-left"></i>
        Back to Home
      </Link>
    </div>
  )
}
