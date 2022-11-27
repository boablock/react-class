import React from 'react'
import './Carousel.css'

const Carousel = () => {
  return (
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="https://1.bp.blogspot.com/-ez9mjyHN0nY/UQZyXxuMrZI/AAAAAAAAS0s/v_e9uHlNoaA/s1600/rimasparaninos-el-patito.jpg" className="imgCarousel d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src="https://imagenes.elpais.com/resizer/JY_bIHi9LoJ-PF8YVIoVNF1OVGQ=/1960x1103/ep01.epimg.net/elpais/imagenes/2014/08/22/videos/1408718239_108049_1408721679_noticia_fotograma.jpg" className="imgCarousel d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src="https://img-aws.ehowcdn.com/750x400p/cdn-write.demandstudios.com/upload//0000/300/00/6/60306.jpg" className="imgCarousel d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel