import Button from 'preact-material-components/Button'

const pad = ['1','2','3','4','5','6','7','8','9','C','0','.']
const styles = {
    height: '100%',
}

const Keypad = ({click}) => {
    return (
        <div class='keypad'>
            {pad.map(v => {
                return (<Button raised class='mdc-typography mdc-typography--headline4' style={styles} onClick={click}>
                    {v}
                </Button>)
                }) }
        </div>
        
    )
}

export default Keypad