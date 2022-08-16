const html = document.documentElement.classList;
const svg = document.getElementById("svg");
let selctedTheme = document.cookie;
window.onload = function () {
  selctedTheme = document.cookie;
  if (document.cookie == "theme=dark") {
    html.remove("light");
    html.remove("system");
    html.add("dark");
    svg.src = "./img/moon.svg";
    document.cookie = "theme = dark";
  } else if (document.cookie == "theme=light") {
    html.remove("system");
    html.remove("dark");
    html.add("light");
    svg.src = "./img/sun.svg";
    document.cookie = "theme = light";
  } else {
    html.remove("light");
    html.remove("dark");
    html.add("system");
    svg.src = "./img/system.svg";
    document.cookie = "theme = system";
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      html.add("dark");
    } else {
      html.remove("dark");
    }
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        if (event.matches) {
          html.add("dark");
        } else {
          html.remove("dark");
        }
      });
  }
  setInterval(() => {
    selctedTheme = document.cookie;
    if (document.cookie == "theme=dark") {
      html.remove("light");
      html.remove("system");
      html.add("dark");
      svg.src = "./img/moon.svg";
      document.cookie = "theme = dark";
    } else if (document.cookie == "theme=light") {
      html.remove("system");
      html.remove("dark");
      html.add("light");
      svg.src = "./img/sun.svg";
      document.cookie = "theme = light";
    } else {
      html.add("system");
      svg.src = "./img/system.svg";
      document.cookie = "theme = system";
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        html.add("dark");
      } else {
        html.remove("dark");
      }
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (event) => {
          if (event.matches) {
            html.add("dark");
          } else {
            html.remove("dark");
          }
        });
    }
  }, 1000);
};

const changeTheme = {
  lightTheme() {
    selctedTheme = document.cookie;
    html.remove("system");
    html.remove("dark");
    html.add("light");
    svg.src = "./img/sun.svg";
    document.cookie = "theme = light";
  },
  darkTheme() {
    selctedTheme = document.cookie;
    html.remove("system");
    html.remove("light");
    html.add("dark");
    svg.src = "./img/moon.svg";
    document.cookie = "theme = dark";
  },
  systemTheme() {
    selctedTheme = document.cookie;
    html.remove("light");
    html.remove("dark");
    html.add("system");
    svg.src = "./img/system.svg";
    document.cookie = "theme = system";
  },
};

const numberInput = {
  add(clickedID) {
    let id = "numinput" + clickedID;
    let num = document.getElementById(id).value;
    document.getElementById(id).value = ++num;
  },
  removeN(clickedID) {
    let id = "numinput" + clickedID;
    let num = document.getElementById(id).value;
    document.getElementById(id).value = --num;
  },
};
