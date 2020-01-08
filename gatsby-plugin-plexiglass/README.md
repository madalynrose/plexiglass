# gatsby-plugin-no-mouse

This plugin builds on @marcysutton's [no-mouse-days](https://github.com/marcysutton/no-mouse-days) library and allows developers to disable mouse feedback during development and even cover pages with an opaque overlay to encourage screen reader testing.


## Installation

`yarn add gatsby-plugin-no-mouse`

## Usage

```javascript
// In your gatsby-config.js
{
  resolve: "gatsby-plugin-no-mouse",
  options: {
    noMouseDay: 2, //leaving this blank will turn off mouse feedback all of the time
    obscureScreen: true //option to add opaque overlay to body of pages
  }
}
```

## Acknowledgements

This plugin wouldn't exist without inspiration from @marcysutton's [no-mouse-days](https://github.com/marcysutton/no-mouse-days) library.