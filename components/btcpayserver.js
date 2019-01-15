const BTCPay = ({cancel, value, url}) => {
    return (
        <form method="POST" action={url}>
            <input type="hidden" name="amount" value={value} />
            <input type="hidden" name="email" value="customer@example.com" />
            <input type="hidden" name="orderId" value={`BTCTPA_${Date.now()}`} />
            {/* <input type="hidden" name="notificationUrl" value="http://example.com" /> */}
            <input type="hidden" name="redirectUrl" value="http://localhost:8080/" />
            <div class="buttons">
                <button class='btn cancel' type="reset" onClick={cancel}>X</button>
                <button class='btn confirm' type="submit">Ok</button>
            </div>
        </form>
    )
}

export default BTCPay