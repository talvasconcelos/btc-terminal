# BTC Payment Terminal
Payment terminal for BTC with BTCPay

__This is still a Work In Progress__

This guide is aimed at non technical users who want to start accepting BTC and be their own bank. To learn more about BTC and how you can start using this terminal, head over to [BTCPay Server](https://btcpayserver.org/)

## How to start

To use the terminal head over to [BTCPay's ](https://docs.btcpayserver.org/deployment/thirdpartyhosting) documentation on third-parthy hosting and choose a host. Register there. Follow the great guide on the BTCPay website on how get a store and a PoS app started. Or watch the following video.

[![ConnectBTCPayWallet](https://img.youtube.com/vi/xX6LyQej0NQ/mqdefault.jpg)](https://www.youtube.com/watch?v=xX6LyQej0NQ "BTCPay - Connecting Wallet")

Make sure you check "User can input custom amount" on the PoS settings.

Once you have a PoS app running, copy the link to that app, it looks someting like this: *https://testnet.demo.btcpayserver.org/apps/3paj2kB8xK2vcf4PNcvLzycT2KnM/pos*.

Head over to [BTC TPA](https://btctpa.netlify.com/) and paste the link on the initial prompt. That's it!! 

When you want to receive a Bitcoin payment just enter the amount, ask the costumer to confirm the amount and you're directed to the QR code for payment.

Thanks to BTCPay Server for the awesome work they are doing and to BTCPay Jungle for allowing the use of the server.

If you like my work and want to buy me a beer:

{::nomarkdown}
<form method="POST" action="https://btcpayjungle.com/api/v1/invoices">
    <input type="hidden" name="storeId" value="J4d3u63nPu5cqcip7fUztQVRTc96a1N7qyDQAnZ9xE3P" />
    <input type="hidden" name="price" value="5" />
    <input type="hidden" name="currency" value="EUR" />
    <input type="hidden" name="browserRedirect" value="https://github.com/talvasconcelos/btc-terminal/tree/master" />
    <input type="hidden" name="notifyEmail" value="talvasconcelos@gmail.com" />
    <input type="image" src="https://btcpayjungle.com/img/paybutton/pay.png" name="submit" style="width:168px" alt="Pay with BtcPay, Self-Hosted Bitcoin Payment Processor">
</form>
{:/}

Also i have a [crowdfund](https://btcpayjungle.com/apps/EDqY93dMrcmToQjQjgWn97W4fNY/crowdfund) going on, go check it out and share it... :)
