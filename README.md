**Running the web-client**

1. In the `social-login-web-client` folder, run:
```bash
yarn
```
2. Then run the server locally:
```bash
yarn dev
```


This starts the kukai-embed delegate server at port 3000. 
The unity sample redirects to the kukai-embed delegate in Safari or the selected system browser, then that browser redirects back to Unity via a deeplink (unitydl://<data>).
Unity parses the deeplink and extracts information regarding the address and the type of login.
