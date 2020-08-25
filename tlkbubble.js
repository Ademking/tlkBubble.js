const tlkBubble = params => {
  const addStyle = (() => {
    const style = document.createElement("style");
    document.head.append(style);
    return styleString => (style.textContent = styleString);
  })();
  const bubbleColor =
    params.bubbleColor || `linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);`;
  const icon =
    params.icon ||
    `<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512.012 512.012"><path d="M333.201 115.038c-28.905-59.021-89.37-98.042-157.193-98.042-97.047 0-176 78.505-176 175 0 26.224 5.63 51.359 16.742 74.794L.299 349.055c-2.094 10.472 7.144 19.728 17.618 17.656l83.279-16.465a172.546 172.546 0 0034.732 12.151c-26.717-126.541 69.199-245.321 197.273-247.359z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFF"/><path d="M495.266 394.79a174.485 174.485 0 007.511-18.514h-.549c37.448-109.917-41.305-225.441-157.567-231.066l-.005-.018c-100.036-4.61-183.148 75.486-183.148 174.804 0 96.414 78.361 174.857 174.743 174.997 26.143-.035 51.201-5.663 74.568-16.747 91.207 18.032 84.094 16.75 86.189 16.75 9.479 0 16.56-8.686 14.709-17.941z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFF"/></svg>`;
  addStyle(`
    .btn-bubble {
      position: fixed;
      bottom: 40px;
      right: 40px;
      z-index: 999;
      cursor: pointer;
    }
    .noselect {
      -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
          -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently
                                      supported by Chrome, Edge, Opera and Firefox */
    }
    .fab-icon-holder {
      width: 30px;
      height: 30px;
      border-radius: 100%;
      background: #ffffff;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    }
    .fab-icon-holder:hover {
      opacity: 0.8;
    }
    .fab-icon-holder svg {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
              margin: 12px;   
    }

    .fab {
            width: 55px;
            height: 55px;
            background: ${bubbleColor};
    }


    .fab-options {
            list-style-type: none;
            margin: 0;
            position: absolute;
            bottom: 70px;
            right: 0;
            opacity: 0;
            transition: all 0.3s ease;
            transform: scale(0);
            transform-origin: 85% bottom;
    }

    .fab:hover + .fab-options,
          .fab-options:hover {
            opacity: 1;
            transform: scale(1);
    }

    #chatroom-iframe-wrapper {
            width: 0px;
            height: 500px;
            position: fixed;
            bottom: 125px;
            right: 50px;
            z-index: 999;
            cursor: pointer;
            box-shadow: 0 6px 30px rgba(0, 0, 0, 0.1);
            border-radius: 20px;
            -moz-border-radius: 15px;
            border-radius: 5px;
            overflow: hidden;
    }
  `);
  let iframeSrc = "";
  let iframeStyleSrc = "https://cdn.jsdelivr.net/gh/Ademking/tlkbubble.css@latest/"
  if (params.username === undefined) iframeSrc = `//embed.tlk.io/test`;
  else {
    iframeSrc = `//embed.tlk.io/test?nickname=${params.username}`;
  }
  var node = document.createElement("div");
  node.innerHTML = `<div id="bubble-btn" class="btn-bubble">
    <div class="fab fab-icon-holder">
        ${icon}
    </div>
    </div>
    <div id="chatroom-iframe-wrapper" class="noselect">
      <iframe data-custom-css="${iframeStyleSrc}"
      id="chatroom-iframe" src="${iframeSrc}" style="width: 100%; height: 100%; margin-bottom: -8px" frameborder="0"></iframe>
    </div>`;
  node.onclick = () => {
    let w = document.getElementById("chatroom-iframe-wrapper").style.width;
    if (w === "0px" || w === "") {
      document.getElementById("chatroom-iframe-wrapper").style.width = "350px";
    } else {
      document.getElementById("chatroom-iframe-wrapper").style.width = "0px";
    }
  };
  document.body.appendChild(node);
};
