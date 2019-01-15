const Buttonrow = ({cancel, confirm}) => {
    return (
        <div class='buttons'>
            <button class='btn cancel' onClick={cancel}>Cancel</button>
            <button class='btn confirm' onClick={confirm}>Confirm</button>
        </div>
    )
}

export default Buttonrow