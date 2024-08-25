window.addEventListener("keydown", function handleKey(e) {
  const keyElement = document.querySelector(`div[data-key = "${e.keyCode}"] `);
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  if (!keyElement) return;
  key.classList.add("playing");
  console.log(e.keyCode);
});

const keys = document.querySelectorAll(".key");
keys.forEach((key) =>
  key.addEventListener("transitionend", function removeTransition(e) {
    key.classList.remove("playing");
  })
);




























// window.addEventListener("keydown", function (e) {
//     const keyElement = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     key.classList.add("playing");
//     if (!keyElement) return;
//     console.log(e.keyCode);
//     console.log(key);
//   });

//   const keys = document.querySelectorAll(".key");
//   keys.forEach((key) =>
//     key.addEventListener("transition", function removeTransition(e) {
//       if (e.propertyName !== "transform") return;
//       // console.log(e.propertyName);
//       this.classList.remove("playing");
//     })
//   );
