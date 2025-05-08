"use client"

import { useState, useEffect } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download } from "lucide-react"
import { motion } from "framer-motion"


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

interface PdfViewerProps {
  pdfUrl: string
  title: string
}

export default function PdfViewer({ pdfUrl, title }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setPageNumber(1)
    setScale(1)
    setLoading(true)
  }, [pdfUrl])

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setLoading(false)
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = prevPageNumber + offset
      return newPageNumber >= 1 && newPageNumber <= (numPages || 1) ? newPageNumber : prevPageNumber
    })
  }

  function zoomIn() {
    setScale((prevScale) => Math.min(prevScale + 0.2, 2.5))
  }

  function zoomOut() {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.5))
  }
  
  return (
    <div className="flex flex-col items-center">
      <div className="bg-neutral-900 p-4 rounded-lg mb-4 w-full">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button
              onClick={() => changePage(-1)}
              disabled={pageNumber <= 1}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
            </button>
            <span>
              Page {pageNumber} of {numPages || "--"}
            </span>
            <button
             
              onClick={() => changePage(1)}
              disabled={pageNumber >= (numPages || 0)}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={zoomOut} className="rounded-full">
              <ZoomOut className="h-4 w-4" />
              <span className="sr-only">Zoom out</span>
            </button>
            <span>{Math.round(scale * 100)}%</span>
            <button onClick={zoomIn} className="rounded-full">
              <ZoomIn className="h-4 w-4" />
              <span className="sr-only">Zoom in</span>
            </button>
            <button onClick={() => window.open(pdfUrl, "_blank")} className="rounded-full ml-2">
              <Download className="h-4 w-4 mr-2" />
              Download
            </button>
          </div>
        </div>
      </div>

      <div className="bg-neutral-900 p-4 rounded-lg w-full overflow-auto max-h-[70vh]">
        {loading && (
          <div className="flex justify-center items-center h-[500px]">
            <motion.div
              className="h-12 w-12 rounded-full border-t-2 border-b-2 border-green-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </div>
        )}
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex justify-center items-center h-[500px]">
              <motion.div
                className="h-12 w-12 rounded-full border-t-2 border-b-2 border-green-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>
          }
          error={
            <div className="flex flex-col items-center justify-center h-[500px] text-center">
              <p className="text-red-500 mb-4">Failed to load PDF</p>
              <button onClick={() => window.open(pdfUrl, "_blank")} className="rounded-full">
                <Download className="h-4 w-4 mr-2" />
                Download Instead
              </button>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="mx-auto"
          />
        </Document>
      </div>
    </div>
  )
}
