import React, { useEffect, useState } from 'react';
import { useRef } from "react";
import "./Press.css";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function Press() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const onWheel = (e) => {}
  useEffect(() => {
    var element = document.scrollingElement || document.documentElement;
    window.addEventListener("scroll", onWheel);
    return () => window.removeEventListener("scroll", onWheel);
  }, []);
  return (
    <div className='Press_pdf'>
      <Document file="./studio93.pdf" onLoadSuccess={onDocumentLoadSuccess} className="Press_pages">
        <Page pageNumber={1} id="Press_pages"/>
        <Page pageNumber={2} id="Press_pages"/>
        <Page pageNumber={3} id="Press_pages"/>
      </Document>
      
    </div>
  );
}

export default Press;
