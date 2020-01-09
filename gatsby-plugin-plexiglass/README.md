<p align="center">
    <img alt="Plexiglass Icon" src="https://raw.githubusercontent.com/madalynrose/plexiglass/master/plexiglass-150.png" width="100" />
  </a>
</p>
<h1 align="center">
  gatsby-plugin-plexiglass
</h1>

This plugin builds on [@marcysutton](https://github.com/marcysutton)'s [no-mouse-days](https://github.com/marcysutton/no-mouse-days) library and allows developers to disable mouse feedback during development. By installing plexiglass on a page, users can still see the page without being able to "touch" it with a mouse. Additionally, that plexiglass can be tinted opaque, further restricting the way the user can interact with the page.

This is accomplished by:

-   removing pointer events
-   adding a black overlay to the page

With pointer events taken away, users can challenge themselves to navigate pages using solely the keyboard. With a black overlay, users will have to rely on the keyboard and a screen reader to use the page.

It's a bit like manually testing your own code: if you know how it's meant to behave, your own interactions with it will match the patterns your code expects; visually seeing how far away an element is on the page or noting visual landmarks will change the way you navigate with the keyboard and will influence your experience of how long or frustrating a task is.

## Dependencies

[no-mouse-days](https://github.com/marcysutton/no-mouse-days)

## Installation

`yarn add gatsby-plugin-plexiglass`

## How to use

```javascript
// In your gatsby-config.js
{
  resolve: "gatsby-plugin-plexiglass",
  options: {
    noMouseDay: 2, //leaving this blank will turn off mouse feedback all of the time
    screenOverlay: true //option to add opaque overlay to body of pages
  }
}
```

## Acknowledgements

This plugin wouldn't exist without inspiration from @marcysutton's [no-mouse-days](https://github.com/marcysutton/no-mouse-days) library.
