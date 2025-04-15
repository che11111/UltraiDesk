import { useState } from 'react'
import './App.css'
import { AISites } from './components/AISites'

function App() {
  const [currentSiteUrl, setCurrentSiteUrl] = useState<string>('')

  return (
    <div className="app-container">
      <div className="dock-sidebar">
        <div className="dock-header">
          <h2>UltraiDesk</h2>
        </div>
        <div className="dock-content">
          <AISites onSiteSelect={setCurrentSiteUrl} />
        </div>
      </div>
      <div className="main-content">
        {currentSiteUrl && (
          <div className="ai-webview-container">
            <webview // @ts-ignore
              src={currentSiteUrl}
              style={{ width: '100%', height: '100%', border: 'none' }}
              webpreferences="contextIsolation=false, nodeIntegration=yes"
              allowpopups
              partition="persist:ai-sites"
              onDidStartLoading={() => console.log('Webview started loading')}
              onDidFinishLoad={() => console.log('Webview finished loading')}
              onDidFailLoad={(e: {errorCode: number, errorDescription: string}) => console.error('Webview load failed:', e.errorDescription)}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
