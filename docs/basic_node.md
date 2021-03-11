### Configure

Make sure your LND is running with the `--accept-keysend` flag! If you are using lnd.conf file, add `accept-keysend=1`, if necessary

Edit the "production" section of config/app.json:

- Change `macaroon_location` to the location of your LND admin macaroon
- Change `tls_location` to the location of your LND cert

Edit the "production" section of config/config.json

- Update "storage" to point to where you want your DB file to live

To connect to your app

- edit the `public_url` in config/app.json to equal your public IP or fully qualified domain name

### run

`npm run dev`
`npm run prod`

When Relay starts up, it will print a QR in the terminal. You can scan this in your app (Android & iOS) to connect!

aws s3 sync ~/Desktop/N2N2/n2n2-relay/voltage s3://n2n2-keys --exclude ".DS_Store"
