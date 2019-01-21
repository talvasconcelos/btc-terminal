import Button from 'preact-material-components/Button'

const Buttonrow = ({cancel, confirm}) => {
    return (
        <div class='buttons'>
            <Button onClick={cancel}>Cancel</Button>
            <Button raised onClick={confirm}>Ok</Button>
        </div>
    )
}

export default Buttonrow