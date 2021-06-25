import React from "react";
import useWindowWidth from "../../utils/windowWidth";
import "./Resume.css";
import { Document, Page, pdfjs } from "react-pdf";
import resumePdf from "../../assets/0801CS191048_BT_CS_Resume.pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
function Resume() {
  const width = useWindowWidth() - useWindowWidth() / 10;
  return (
    <div id="resume">
      <div className="resume-heading">Resume</div>
      <Document file={resumePdf} externalLinkTarget="_blank" className="resume-pdf-container">
        <Page pageNumber={1} width={width > 800 ? 800 : width} />
      </Document>
    </div>
  );
}

export default Resume;
