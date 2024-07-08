import React, { useEffect } from 'react'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import resume from '/DannyWalshResume.pdf'
import { Document, Page, pdfjs } from "react-pdf";
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import useWindowDimensions from '../helpers/hooks';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const Resume = () => {

  const {height, width} = useWindowDimensions()

  const DWResume = resume

  useEffect(() => {
    console.log(standardizeScale(width))
  }, [width])

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-min flex flex-col justify-center items-center'>
        <h2 className='text-2xl expand text-center m-5'>Danny Walsh's Resume</h2>
        <a href='/DannyWalshResume.pdf' download><button className='btn m-2'>Download</button></a>
        <Document file={DWResume} >
          <Page pageNumber={1} 
            scale={standardizeScale(width)}               
            renderAnnotationLayer={true} 
            renderTextLayer={true}/>
        </Document>
      </div>
    </div>
  )
}

const standardizeScale = (width) => {
    if (width < 700)
      return 0.7
    if (width < 800)
      return 0.85
    if (width < 1000)
      return 1
    if (width >= 1000)
      return 1.5
  
}

export default Resume
