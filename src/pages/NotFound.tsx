import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="mx-auto max-w-page px-5 py-32">
      <h1 className="font-display text-4xl">That page does not exist.</h1>
      <p className="mt-4"><Link to="/" className="font-medium text-clay hover:underline">Back to the home page</Link></p>
    </div>
  )
}
