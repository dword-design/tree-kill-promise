<!-- TITLE/ -->
# tree-kill-promise
<!-- /TITLE -->

<!-- BADGES/ -->
[![NPM version](https://img.shields.io/npm/v/tree-kill-promise.svg)](https://npmjs.org/package/tree-kill-promise)
![Linux macOS Windows compatible](https://img.shields.io/badge/os-linux%20%7C%C2%A0macos%20%7C%C2%A0windows-blue)
[![Build status](https://github.com/dword-design/tree-kill-promise/workflows/build/badge.svg)](https://github.com/dword-design/tree-kill-promise/actions)
[![Coverage status](https://img.shields.io/coveralls/dword-design/tree-kill-promise)](https://coveralls.io/github/dword-design/tree-kill-promise)
[![Dependency status](https://img.shields.io/david/dword-design/tree-kill-promise)](https://david-dm.org/dword-design/tree-kill-promise)
![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen)

<a href="https://gitpod.io/#https://github.com/dword-design/bar">
  <img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod">
</a><a href="https://www.buymeacoffee.com/dword">
  <img
    src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
    alt="Buy Me a Coffee"
    height="32"
  >
</a><a href="https://paypal.me/SebastianLandwehr">
  <img
    src="https://dword-design.de/images/paypal.svg"
    alt="PayPal"
    height="32"
  >
</a><a href="https://www.patreon.com/dworddesign">
  <img
    src="https://dword-design.de/images/patreon.svg"
    alt="Patreon"
    height="32"
  >
</a>
<!-- /BADGES -->

<!-- DESCRIPTION/ -->
Simple wrapper around the tree-kill module that makes use of promises.
<!-- /DESCRIPTION -->

<!-- INSTALL/ -->
## Install

```bash
# NPM
$ npm install tree-kill-promise

# Yarn
$ yarn add tree-kill-promise
```
<!-- /INSTALL -->

## Usage

```js
import kill from 'tree-kill-promise'

// Kill process with pid 1
await kill(1)

// Send signal other than SIGTERM
await kill(1, 'SIGKILL')
```

For more details please visit the [tree-kill docs](https://www.npmjs.com/package/tree-kill).

<!-- LICENSE/ -->
## License

Unless stated otherwise all works are:

Copyright &copy; Sebastian Landwehr <info@dword-design.de>

and licensed under:

[MIT License](https://opensource.org/licenses/MIT)
<!-- /LICENSE -->
