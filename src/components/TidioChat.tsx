'use client'

import { useEffect } from 'react'

// Replace with your actual Tidio project ID from https://www.tidio.com/panel/settings/developer/
const TIDIO_PUBLIC_KEY = 'ubgi6gtbkwcklmhntjc7t6ct3olpmk5d'

export default function TidioChat() {
  useEffect(() => {
    // Load Tidio script
    const script = document.createElement('script')
    script.src = `//code.tidio.co/${TIDIO_PUBLIC_KEY}.js`
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const tidioScript = document.querySelector(`script[src="//code.tidio.co/${TIDIO_PUBLIC_KEY}.js"]`)
      if (tidioScript) {
        document.body.removeChild(tidioScript)
      }
    }
  }, [])

  return null
}
