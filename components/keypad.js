const pad = ['1','2','3','4','5','6','7','8','9','C','0','.']
console.log(pad)

const Keypad = ({click}) => {
    return (
        <div class='keypad'>
            { pad.map(v => {
                return <div onClick={click}>{v}</div>
                }) }
        </div>
        
    )
}

export default Keypad