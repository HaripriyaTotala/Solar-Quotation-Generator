import { useState } from 'react'
import QuotationForm from './components/QuotationForm'
import QuotationPreview from './components/QuotationPreview'
import Welcome from './components/Welcome'

function App() {
  const [quotationData, setQuotationData] = useState(null)
  const [showWelcome, setShowWelcome] = useState(true)

  return (
    <div className="min-h-screen bg-gray-500">
      <header className="bg-gray-800 shadow text-antiquewhite">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-antiquewhite">
            XYZ Solar
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {showWelcome ? (
          <Welcome onStart={() => setShowWelcome(false)} />
        ) : !quotationData ? (
          <QuotationForm onSubmit={setQuotationData} />
        ) : (
          <QuotationPreview data={quotationData} onBack={() => setQuotationData(null)} />
        )}
      </main>
    </div>
  )
}

export default App
