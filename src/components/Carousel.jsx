import styled from "styled-components";

import img1 from "../images/4.jpg";
import img2 from "../images/5.jpg";
import img3 from "../images/6.jpg";


const Img = styled.img`
height: 75vh;
width: 100%;
object-fit: cover;
`;



export default function carousel() {
  return (
    <div id="carousel" className="carousel slide container my-3" data-bs-ride="carousel">
      <div className="carousel-inner">
        <h3>New items</h3>
        <div className="carousel-item active">
          <Img src={img1} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <Img src={img2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <Img src={img3} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      ></button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      ></button>
    </div>
  );
}
