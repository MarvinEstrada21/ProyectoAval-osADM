/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { plotData } from "./data";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

function plot() {
  const navigate = useNavigate();
  const { idplot } = useParams();
  const data = plotData[idplot];
  const [selectedImage, setSelectedImage] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const customIcon = new L.Icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  if (!data) {
    return <p>No se encontró información para este lote o área</p>;
  }

  return (
    <div style={{ width: "95vw" }}>
      <header>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </header>

      <h3 style={{ paddingTop: "2rem" }}>Información General</h3>
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

      {data.fichaCatastral && (
        <h3 style={{ paddingTop: "5rem" }}>Ficha Catastral del Lote</h3>
      )}
      {Array.isArray(data.fichaCatastral)
        ? data.fichaCatastral.map((pdfSrc, index) => (
            <div className="pdf-viewer" key={index}>
              <iframe
                src={`${pdfSrc}#zoom=150`}
                title={`Documento ${index + 1} del ${idplot}`}
                width="100%"
                height="1000px"
              />
            </div>
          ))
        : data.fichaCatastral && (
            <div className="pdf-viewer">
              <iframe
                src={`${data.fichaCatastral}#zoom=150`}
                title={`Documento del ${idplot}`}
                width="100%"
                height="1000px"
              />
            </div>
          )}

      {data.planoLote && (
        <h3 style={{ paddingTop: "5rem" }}>Plano del Lote</h3>
      )}
      {Array.isArray(data.planoLote)
        ? data.planoLote.map((pdfSrc, index) => (
            <div className="pdf-viewer2" key={index}>
              <iframe
                src={`${pdfSrc}#zoom=125`}
                title={`Documento ${index + 1} del ${idplot}`}
                width="100%"
                height="850px"
              />
            </div>
          ))
        : data.planoLote && (
            <div className="pdf-viewer2">
              <iframe
                src={`${data.planoLote}#zoom=125`}
                title={`Documento del ${idplot}`}
                width="100%"
                height="850px"
              />
            </div>
          )}

      {data.avaluo && (
        <h3 style={{ paddingTop: "5rem" }}>Documentos de Avalúo del Lote</h3>
      )}
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

      <h3 style={{ paddingTop: "5rem" }}>Imágenes del Lote</h3>
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

      <h3 style={{ paddingTop: "5rem" }}>Geolocalización del Lote</h3>
      <div style={{ paddingTop: "1rem", paddingBottom: "1rem", width: "100%" }}>
        <MapContainer
          center={data.coordinates}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
          <Marker position={data.coordinates} icon={customIcon}>
            <Popup>{data.title}</Popup>
          </Marker>
        </MapContainer>
      </div>

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
