import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../assets/0801CS191048_BT_CS_Resume.pdf";
import "../CSS/Resume.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

export default function Resume() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  return (
    <>
      <section id="resume" className="resume">
        <div className="heading">
          <span>RESUME</span>
          <span className="bar ">
            <span className="bar-second"></span>
          </span>
        </div>
        <div className="resume-container">
          <Document className="doc-cont" file={pdf}>
            <Page pageNumber={1} />
          </Document>
        </div>
      </section>
    </>
  );
}
