function roll() {
  var body = document.querySelector("body");
  var dice = document.querySelector(".box");
  var values = [
    `rotateX(360deg) rotateY(360deg) translate3d(32px, 0px, 0px)`, //1
    `rotateX(-270deg) rotateY(190deg) translate3d(-50px, 0px, 0px)`, //2
    `rotateX(-90deg) rotateY(20deg) translate3d(0px, 0px, 0px)`, //3
    `rotateX(-180deg) rotateY(90deg) translate3d(0px, 0px, 32px)`, //4
    `rotateX(0deg) rotateY(450deg) translate3d(0px, 0px, 0px)`, //5
    `rotateX(-180deg) rotateY(0deg) translate3d(32px, 0px, 0px)`, //6
    `rotateX(360deg) rotateY(-360deg) translate3d(0px,0px,0px)`, //1
    `rotateX(450deg) rotateY(436deg) translate3d(0px,0px,0px)`, //2
    `rotateX(-450deg) rotateY(-150deg) translate3d(0px,0px,0px)`, //3
    `rotateX(360deg) rotateY(-450deg) translate3d(0px,0px,0px)`, //4
    `rotateX(540deg) rotateY(630deg) translate3d(0px,0px,0px)`, //5
    `rotateX(-540deg) rotateY(720deg) translate3d(0px,0px,0px)` //6
  ];
  var len = values.length;
  var rotate = values[Math.floor(Math.random() * len)];
  dice.style.transform = rotate + `scale3d(0.7,0.7,0.7)`;

  switch (rotate) {
    case values[0]:
      body.style.background = "#1abc9c";
      break;
    case values[1]:
      body.style.background = "#3498db";
      break;
    case values[2]:
      body.style.background = "#34495e";
      break;
    case values[3]:
      body.style.background = "#2980b9";
      break;
    case values[4]:
      body.style.background = "#2c3e50";
      break;
    case values[5]:
      body.style.background = "#e67e22";
      break;
    case values[6]:
      body.style.background = "#2ecc71";
      break;
    case values[7]:
      body.style.background = "#000";
      break;
    case values[8]:
      body.style.background = "#00a8ff";
      break;
    case values[9]:
      body.style.background = "#fbc531";
      break;
    case values[10]:
      body.style.background = "#e84118";
      break;
    case values[11]:
      body.style.background = "#4cd137";
      break;
    default:
      body.style.background = "#000";
  }
}
