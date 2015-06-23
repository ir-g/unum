Unum V1
-------

An AHAH-protocol based primitive static site system, think of it as a slightly better `<iframe>`. This is a theoretically useful platform/boilerplate for writing some web applications, or some kind of internal wiki, but other than that, there is probably something better for you than this.

## How-to

Create files in the `pages` folder. Always make sure you have an `index.html` file.

All local links must be prefixed with `#!/`, and then contain a url relative to the `pages` folder. e.g. Link to `pages/test/index.html` as `<a href="#!/test/index.html">test</a>`.

## Note on SEO

This is theoretically capable of being SEO-friendly, but don't count on it. The `#!` at the start of the links can help, but won't do everything.

## License

The [Artistic License 2.0](http://opensource.org/licenses/Artistic-2.0). If you want me to offer an alternative license to you, [contact me](http://isaacrg.github.io/contact), but you probably don't need an alternative license. The license does not concern any pieces of code that have been sourced externally.

## Author

>Made by [Isaac Reid-Guest](http://isaacrg.github.io).
