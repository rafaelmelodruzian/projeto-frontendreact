import React from 'react'
import "./productCardStyle.js"

function ProductCard() {
  const titulo = "Título do vídeo";
  const videoImage = `https://picsum.photos/400/400?a=${Math.floor(Math.random()*6)+1}`

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  return (
    //   <div className="box-pagina-principal" onClick={reproduzVideo}>
    //     <img src={videoImage} alt="" />
    //     <h4>{titulo}</h4>
      
    //   </div>
    <p>ProductCard</p>
  )
}

export default ProductCard