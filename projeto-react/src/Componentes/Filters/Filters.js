import React from 'react'
import FiltersStyle from './filtersStyle'

function Filters() {

  return (
      <FiltersStyle>
       <div> 
       <h2><b>Filters</b></h2>
       <form>
       <label for="valor-min">Valor mínimo:</label><br/>
       <input type="text" name="valor-min" id="valor-min" /><br/>
       <label for="valor-max">Valor máximo:</label><br/>
       <input type="text" name="valor-max" id="valor-max" /><br/>
       <label for="nome">Busca por nome:</label><br/>
       <input type="text" name="nome" id="nome" /><br/>
       </form><br/>
       <button> Aplicar filtros </button>
       </div>
      </FiltersStyle>
  )
}

export default Filters

