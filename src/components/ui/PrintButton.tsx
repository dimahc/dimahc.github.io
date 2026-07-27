'use client'

export default function PrintButton() {
    return (
        <button
            className="print-button"
            onClick={() => window.print()}
            aria-label="Print or save as PDF"
        >
            📄 Save as PDF
        </button>
    )
}
