import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import DanWalshResume from '../images/ResumeDanWalsh.pdf'


import '../styles/resume.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const Resume = () => {

  const resumePdf = DanWalshResume

  let content = (
    <div className='resume-wrapper'>
      <div className='resume-pdf'>
        <h2>Danny Walsh's Resume</h2>
        <Document file={resumePdf} >
          <Page pageNumber={1} 
            scale={1.5}               
            renderAnnotationLayer={false} 
            renderTextLayer={false}/>
        </Document>
      </div>
    </div>
  )

  return (
    <div>
      {content}
    </div>
  )
}

export default Resume
