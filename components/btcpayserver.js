const BTCPay = ({value, url, orderId}) => {
    return (
        <form method="POST" action={url} name='btcpay'>
            <input type="hidden" name="amount" value={value} />
            {/* <input type="hidden" name="email" value="customer@example.com" /> */}
            <input type="hidden" name="orderId" value={orderId ? orderId : `BTCTPA_${Date.now()}`} />
            {/* <input type="hidden" name="notificationUrl" value="http://example.com" /> */}
            <input type="hidden" name="redirectUrl" value="https://btctpa.netlify.com/" />
        </form>
    )
}

export default BTCPay