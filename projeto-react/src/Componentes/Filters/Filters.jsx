import React from 'react'
import FiltersStyle from './filtersStyle'

function Filters(props) {
  const { handleMin } = props;
  const { handleSearch } = props;
  const { handleMax } = props;

  return (
    <FiltersStyle>
      <div>
        <h1><b>Filters</b></h1>
        <form>
          <label htmlFor="valor-min">Valor mínimo:</label><br /><input type="number" name="valor-min" id="valor-min" value={props.minFilter} onChange={(e) => handleMin(e)} />
          <label htmlFor="valor-max">Valor máximo:</label><br /><input type="number" name="valor-max" id="valor-max" value={props.maxFilter} onChange={(e) => handleMax(e)} />
          <label htmlFor="nome">Busca por nome:</label><br /><input type="text" name="nome" id="nome" value={props.searchFilter} onChange={(e) => handleSearch(e)} />
        </form>
      </div>
    </FiltersStyle>
  )
}
export default Filters;

