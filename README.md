<p align="center">
  <img height="600" src="https://i.imgur.com/oR0n7t9.png">
</p>

# tlkBubble.js
A tiny Javascript library to integrate tlk.io chat on any page of your website. The library will allow users to insert a tlk.io chatroom in a post or page.

## Installation

Add this script to the bottom of your page body
```html
<script src="https://cdn.jsdelivr.net/gh/Ademking/tlkBubble.js@0.1.4/tlkbubble.min.js"></script>
<script>
 tlkBubble({
   room: "tlkBubble", // Room name
   theme: "day", // Chatroom theme
 });
</script>
```

## Options

| Option | Description | Optional | Default Value |
|--|--|--|--|
| room | Id of Chatroom | ❌ | - |
| theme | Chatroom theme | ✔️ | "day" (Available themes : "day" - "pop" - "minimal" - "night") |
| username | If you already have a login for your users, you can use their names for this chat too. | ✔️ | - |
| bubbleColor | Color of floating button | ✔️ | `linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);` |
| icon | SVG icon inside floating button| ✔️ | SVG code `<svg xmlns="http://www.w3.org/2000/svg"...` |
| customCss | Custom Stylesheet to use inside chatroom | ✔️ | `https://cdn.jsdelivr.net/gh/Ademking/tlkBubble.js@0.1.4/tlkbubble.css` |
