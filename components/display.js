const Display = ({value, fontSize}) => {
  const styledSpan = {
    fontSize: fontSize
  }
 
  return (    
      <div class='display'>
          <span id='display' style={styledSpan}>
            <small class='small'>{value && `€`}</small>
            {value}
          </span>
      </div>    
  )
}

export default Display