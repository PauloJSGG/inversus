import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GalleryEdit = (props) => {
  const {
    handleGalleryModalOpen,
    handleGallerySubmit,
    handleGalleryChange,
    handleGalleryEditClick,
    handleGalleryUpload,
    handleCategoryChange,

    isGalleryModalOpen,
    gallery,
    currentImage
  } = props

  return (
    <>
      <div className="content-container">
        <div className="admin-gallery">
          <div className="admin-gallery-container">
            {gallery.map((item, i) => {
              return(
                <div key = {item.id} className={`gallery-card`}>
                  <div className="gallery-card__background" style={{backgroundImage: `url(${item.imageUrl})`}}>
                    <h1>{item.name}</h1>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="admin-gallery-add">
            <div>
              <select name="categories" id="categories" onChange={e => handleCategoryChange(e)}>
                <option>Escolha uma categoria</option>
                <option value="encontros">Encontros</option>
                <option value="espetaculos">Espetaculos</option>
                <option value="estudio">estudio</option>
                <option value="coimbra">Guitarra de Coimbra</option>
                <option value="ualg">Serenatas ualg</option>
              </select>
            </div>
              <div>
                <label className="admin-gallery-add__label">Descrição</label>
                <input type="text" name="description"  onChange={e => handleGalleryUpload(e)}/>
              </div>
              <input type="file" name="file"  onChange={e => handleGalleryUpload(e)}/>
              <button
                className = 'shared-button shared-button--second'
                onClick = {handleGallerySubmit}
                type='submit'
                title='submit'
              >
                <FontAwesomeIcon icon={['fas','plus']} />
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default GalleryEdit
