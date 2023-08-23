# rplace-clone
Creating a r/place clone cause why not.
I've been interested on how websockets work and how it differs from https, its a pretty short project and isn't that hard to implement,
the only thing that was hard for me was how users can interact with the canvas eg: zooming and scaling each cell on the canvas. i've learned
a lot from making this and more on the interaction with the canvas.

Implementing the chat feature and updating the canvas using an observer pattern where each users are sent a json object that has the information of the updated cell in the canvas, and after a user emits a that json object to the server, the server will then send the user's json object to every users connected in the same namespace (i'm using socket.io), then a class which holds the functionality of the canvas will handle that emitted json object and update every user's canvas, the same goes for the chat app, I could implement a middleware to sanitize every user's messages to filter out bad words but maybe i'll do it next time.... yup.

Visit the site here:  
[r/placeclone](https://rplace-y2ec.onrender.com/)
