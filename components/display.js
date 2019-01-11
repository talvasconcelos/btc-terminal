const styledSpan = {
  fontSize: 120
}

const Display = ({value}) => {
  return (    
      <div class="display">
          <span id='display' style={styledSpan}>{value}</span>
      </div>    
  )
}

export default Display