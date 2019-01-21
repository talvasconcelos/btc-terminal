const BTCPay = ({value, url}) => {
    return (
        <form method="POST" action={url} name='btcpay'>
            <input type="hidden" name="amount" value={value} />
            <input type="hidden" name="email" value="customer@example.com" />
            <input type="hidden" name="orderId" value={`BTCTPA_${Date.now()}`} />
            {/* <input type="hidden" name="notificationUrl" value="http://example.com" /> */}
            <input type="hidden" name="redirectUrl" value="http://localhost:8080/" />
        </form>
    )
}

export default BTCPay