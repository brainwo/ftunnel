# File Tunnel

[![npm](https://img.shields.io/npm/v/ftunnel?style=flat)](https://npmjs.org/package/ftunnel)

A CLI program to temporary host a file in internet via ngrok tunnel. Share link via barcode or copy the hyperlink from your terminal.

### Usage:

Install globally:

```sh
npm install -g ftunnel
```

Host a file:

```sh
ftunnel <file-name-in-current-dir>
```

### Development

Install the required dependencies:

```sh
npm install
```

Link binary to your path:

```sh
npm link
```

## License 

File Tunnel made using these dependencies:
- `ngrok`, licensed under BSD-2-Clause 
- `qrcode`, licensed under MIT
