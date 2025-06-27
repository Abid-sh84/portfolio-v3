import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-portfolio-dark text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <Link
        to="/"
        className="px-6 py-3 rounded-md bg-portfolio-accent text-gray-900 font-medium transition hover:bg-opacity-80"
      >
        Go back home
      </Link>
    </div>
  );
}
