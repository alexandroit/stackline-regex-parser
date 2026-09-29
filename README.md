# @stackline/regex-parser

> A module that parses a string as regular expression and returns the parsed value.

[![npm version](https://img.shields.io/npm/v/@stackline/regex-parser.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/regex-parser)
[![license](https://img.shields.io/npm/l/@stackline/regex-parser.svg?style=flat-square)](https://github.com/alexandroit/stackline-regex-parser)
[![GitHub repository](https://img.shields.io/badge/GitHub-repository-181717?style=flat-square&logo=github)](https://github.com/alexandroit/stackline-regex-parser)
[![Docs](https://img.shields.io/badge/docs-alexandro.net-0f766e?style=flat-square)](https://alexandro.net/docs/vanilla/regex-parser/)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation](https://alexandro.net/docs/vanilla/regex-parser/)** | **[npm](https://www.npmjs.com/package/@stackline/regex-parser)** | **[Issues](https://github.com/alexandroit/stackline-regex-parser/issues)** | **[Repository](https://github.com/alexandroit/stackline-regex-parser)**

**Current package version:** `1.0.2`

---

## Why this package?

`@stackline/regex-parser` is the Stackline-maintained distribution of `regex-parser@2.3.1`. It is an independent continuation of [regex-parser](https://github.com/IonicaBizau/regex-parser.js); original authors and licenses remain credited below.

## Compatibility

| Item | Value |
| :--- | :--- |
| Package | `@stackline/regex-parser@1.0.2` |
| API target | `regex-parser@2.3.1` |
| Supported Node.js | `See supported framework requirements` |
| License | `MIT` |
| Main entry | `lib/index.js` |
| Types | `lib/typings/regex-parser.d.ts` |
| Runtime dependencies | `none` |

## Installation

```bash
npm install @stackline/regex-parser
```

Preserve existing imports and plugin resolution with an npm alias:

```bash
npm install regex-parser@npm:@stackline/regex-parser
```

## Usage and API reference

### regex-parser


<a href="https://www.buymeacoffee.com/H96WwChMy" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>







> A module that parses a string as regular expression and returns the parsed value.

















## :cloud: Installation

```sh
# Using npm
npm install --save @stackline/regex-parser

# Using yarn
yarn add @stackline/regex-parser
```













## :clipboard: Example



```js
// Dependencies
var RegexParser = require("@stackline/regex-parser");

console.log(RegexParser("/^hi$/g"));
// => /^hi$/g
```












## :question: Get Help

There are few ways to get help:



 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:







## :memo: Documentation


### `RegexParser(input)`
Parses a string input.

#### Params

- **String** `input`: The string input that should be parsed as regular expression.

#### Return
- **RegExp** The parsed regular expression.














## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects
I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`



Thanks! :heart:
























## :scroll: License

[MIT][license] © [Ionică Bizău][website]






[license]: /LICENSE
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW

## Credits and original authors

- Original project: [regex-parser](https://github.com/IonicaBizau/regex-parser.js).
- Ionică Bizău.
- Copyright (c) 2014-25 Ionică Bizău <bizauionica@gmail.com> (https://ionicabizau.net).
- Stackline maintenance: [Alexandro Paixao Marques](https://www.linkedin.com/in/aleinfo/) and [Stackline contributors](https://github.com/alexandroit).

Original copyright, license notices and contributor acknowledgements remain part of this distribution. Stackline maintenance does not replace authorship of the original work.

## License

`MIT`. See the license and notice files in the [repository](https://github.com/alexandroit/stackline-regex-parser).

## Community and Links

- [Stackline website](https://alexandro.net/)
- [GitHub projects](https://github.com/alexandroit)
- [npm packages](https://www.npmjs.com/~alex360qc)
- [Reddit community — r/Stackline](https://www.reddit.com/r/Stackline/)
- [Maintainer LinkedIn](https://www.linkedin.com/in/aleinfo/)

Use this repository's issue tracker for reproducible bugs and feature requests. Join r/Stackline for examples, usage questions and release discussions.
