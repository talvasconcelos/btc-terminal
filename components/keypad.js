const pad = ['1','2','3','4','5','6','7','8','9','C','0','.']
const styles = {
    opacity: 0.5,
    color: 'rgba(0,0,0,0.35)'
}

const Keypad = ({click, client}) => {
    return (
        <div class='keypad'>
            {pad.map(v => {
                return <div style={client ? styles : null} onClick={click}>{v}</div>
                }) }
        </div>
        
    )
}

export default Keypad