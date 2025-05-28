/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { plotData } from "./data";
import React, { useState } from "react";

function plot() {
  const navigate = useNavigate();
  const { idplot } = useParams();
  const data = plotData[idplot];
  const [selectedImage, setSelectedImage] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!data) {
    return <p>No se encontró información para este lote o área</p>;
  }

  return (
    <div>
      <header>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </header>

      <div className="table-container">
        <table className="table-info">
          <tbody>
            <tr>
              <th>Propietario</th>
              <td>{data.infoTable?.propietario}</td>
            </tr>
            <tr>
              <th>Clave Catastral</th>
              <td>{data.infoTable?.claveCatastral}</td>
            </tr>
            <tr>
              <th>Avalúo</th>
              <td>{data.infoTable?.avaluo}</td>
            </tr>
            <tr>
              <th>Base Imponible (30%)</th>
              <td>{data.infoTable?.baseImponible}</td>
            </tr>
            <tr>
              <th>Cuota Tributaria 3.5/millar (2025)</th>
              <td>{data.infoTable?.cuotaTributaria}</td>
            </tr>
            <tr>
              <th>Valor Tributario</th>
              <td>{data.infoTable?.valorTributario}</td>
            </tr>
            <tr>
              <th>Deuda Tributaria</th>
              <td>{data.infoTable?.deudaTributaria}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {Array.isArray(data.avaluo)
        ? data.avaluo.map((pdfSrc, index) => (
            <div className="pdf-viewer" key={index}>
              <iframe
                src={`${pdfSrc}#zoom=150`}
                title={`Documento ${index + 1} del ${idplot}`}
                width="100%"
                height="1000px"
              />
            </div>
          ))
        : data.avaluo && (
            <div className="pdf-viewer">
              <iframe
                src={`${data.avaluo}#zoom=150`}
                title={`Documento del ${idplot}`}
                width="100%"
                height="1000px"
              />
            </div>
          )}

      {data.images && data.images.length > 0 && (
        <div className="image-gallery">
          {data.images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Imagen $(index + 1)`}
              onClick={() => {
                setSelectedImage(imgSrc);
                setPhotoIndex(index);
              }}
              style={{ width: "200px" }}
            />
          ))}
        </div>
      )}
      <p>
        <button
          onClick={() => {
            navigate(`/`);
          }}
          className="Home-button"
        >
          Volver
        </button>
      </p>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Vista ampliada" />
            <button
              className="nav-button left"
              onClick={() => {
                const prevIndex =
                  (photoIndex - 1 + data.images.length) % data.images.length;
                setPhotoIndex(prevIndex);
                setSelectedImage(data.images[prevIndex]);
              }}
            >
              &#10094;
            </button>

            <button
              className="nav-button right"
              onClick={() => {
                const nextIndex = (photoIndex + 1) % data.images.length;
                setPhotoIndex(nextIndex);
                setSelectedImage(data.images[nextIndex]);
              }}
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default plot;
