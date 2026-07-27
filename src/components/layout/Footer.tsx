'use client'

import { memo } from 'react'

function Footer() {
  return (
    <footer className="mt-16 py-4 border-t border-border">
      <div className="container mx-auto px-6 flex items-center justify-center gap-2 text-sm text-muted">
        <span>© {new Date().getFullYear()} Abdoul Hamid COULIBALY. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default memo(Footer)
