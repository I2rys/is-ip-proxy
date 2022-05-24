# is-ip-proxy
Check if the specified IP is a proxy.

## Installation
Github:
```
git clone https://github.com/I2rys/is-ip-proxy
```

NpmJS:
```
npm i is-ip-proxy
```

## Usage
```
(async()=>{
    const isIPProxy = require("is-ip-proxy")

    await isIPProxy.check("143.244.154.240")
    // => true
})()
```

## License
MIT © I2rys