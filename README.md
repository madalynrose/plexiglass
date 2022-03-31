# plexiglass

![plexiglass icon](https://raw.githubusercontent.com/madalynrose/plexiglass/master/plexiglass-150.png)

This is a monorepo for libraries that remove mouse feedback to encourage keyboard and screen reader testing. 
By installing plexiglass on a page, users can still see the page without being able to "touch" it with a mouse.
Additionally, that plexiglass can be tinted opaque, further restricting the way the user can interact with the page.

It's a bit like manually testing your own code: if you know how it's meant to behave, your own interactions with it will match the patterns your code expects; visually seeing how far away an element is on the page or noting visual landmarks will change the way you navigate with the keyboard and will influence your experience of how long or frustrating a task is.

This is accomplished by:
* removing pointer events
* adding a black overlay to the page

With pointer events taken away, users can challenge themselves to navigate pages using solely the keyboard.
With a black overlay, users will have to rely on the keyboard and a screen reader to use the page.

### mozilla-plexiglass
This is a Mozilla addon that allows you to quickly toggle plexiglass options (pointer events and tint).

### gatsby-plugin-plexiglass
This is a Gatsby plugin that includes @marcysutton's [no-mouse-days](https://github.com/marcysutton/no-mouse-days) library. It allows you to choose a day to disable your mouse feedback and adds the option to add the opaque overlay in your `gatsby-config` file. These options will only be applied in development.
