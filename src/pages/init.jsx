/* eslint-disable react-hooks/rules-of-hooks */
import plano from "../assets/plano.svg";
import { useNavigate } from "react-router-dom";

function init() {
  const navigate = useNavigate();

  return (
    <div className="App-plano">
      <img src={plano} className="App-plano-img" alt="plano"></img>
      <button
        onClick={() => {
          navigate(`/plot/areaverde`);
        }}
        className="Park-button"
      >
        Área Verde
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote1`);
        }}
        className="Allotment-button1"
      >
        Lote 1
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote2`);
        }}
        className="Allotment-button2"
      >
        Lote 2
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote3`);
        }}
        className="Allotment-button3"
      >
        Lote 3
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote4`);
        }}
        className="Allotment-button4"
      >
        Lote 4
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote5`);
        }}
        className="Allotment-button5"
      >
        Lote 5
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote6`);
        }}
        className="Allotment-button6"
      >
        Lote 6
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote7`);
        }}
        className="Allotment-button7"
      >
        Lote 7A
      </button>
      <div className="arrow arrow7" />
      <button
        onClick={() => {
          navigate(`/plot/lote7b`);
        }}
        className="Allotment-button7b"
      >
        Lote 7B
      </button>
      <div className="arrow arrow7b" />
      <button
        onClick={() => {
          navigate(`/plot/lote8`);
        }}
        className="Allotment-button8"
      >
        Lote 8A
      </button>
      <div className="arrow arrow8" />
      <button
        onClick={() => {
          navigate(`/plot/lote8b`);
        }}
        className="Allotment-button8b"
      >
        Lote 8B
      </button>
      <div className="arrow arrow8b" />
      <button
        onClick={() => {
          navigate(`/plot/lote9`);
        }}
        className="Allotment-button9"
      >
        Lote 9
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote10`);
        }}
        className="Allotment-button10"
      >
        Lote 10
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote11`);
        }}
        className="Allotment-button11"
      >
        Lote 11
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote12`);
        }}
        className="Allotment-button12"
      >
        Lote 12
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote13`);
        }}
        className="Allotment-button13"
      >
        Lote 13
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote14`);
        }}
        className="Allotment-button14"
      >
        Lote 14
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote15`);
        }}
        className="Allotment-button15"
      >
        Lote 15
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote16`);
        }}
        className="Allotment-button16"
      >
        Lote 16
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote17`);
        }}
        className="Allotment-button17"
      >
        Lote 17
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote18`);
        }}
        className="Allotment-button18"
      >
        Lote 18
      </button>
      <div className="arrow arrow18" />
      <button
        onClick={() => {
          navigate(`/plot/lote19`);
        }}
        className="Allotment-button19"
      >
        Lote 19
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote20`);
        }}
        className="Allotment-button20"
      >
        Lote 20
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote21`);
        }}
        className="Allotment-button21"
      >
        Lote 21
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote22`);
        }}
        className="Allotment-button22"
      >
        Lote 22
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote23`);
        }}
        className="Allotment-button23"
      >
        Lote 23
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote24`);
        }}
        className="Allotment-button24"
      >
        Lote 24
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote25`);
        }}
        className="Allotment-button25"
      >
        Lote 25
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote26`);
        }}
        className="Allotment-button26"
      >
        Lote 26
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote27`);
        }}
        className="Allotment-button27"
      >
        Lote 27
      </button>
      <button
        onClick={() => {
          navigate(`/plot/lote28`);
        }}
        className="Allotment-button28"
      >
        Lote 28
      </button>
    </div>
  );
}

export default init;
