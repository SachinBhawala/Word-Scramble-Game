const themes = [
  {
    background: "#1A1A2E",
    color: "#FFFFFF",
    primaryColor: "#0F3460"
  },
  {
    background: "#461220",
    color: "#FFFFFF",
    primaryColor: "#E94560"
  },
  {
    background: "#192A51",
    color: "#FFFFFF",
    primaryColor: "#967AA1"
  },
  {
    background: "#F7B267",
    color: "#000000",
    primaryColor: "#F4845F"
  },
  {
    background: "#F25F5C",
    color: "#000000",
    primaryColor: "#642B36"
  },
  {
    background: "#231F20",
    color: "#FFF",
    primaryColor: "#BB4430"
  }
];

const setTheme = (theme) => {
  const root = document.querySelector(":root");
  root.style.setProperty("--background", theme.background);
  root.style.setProperty("--color", theme.color);
  root.style.setProperty("--primary-color", theme.primaryColor);
  root.style.setProperty("--glass-color", theme.glassColor);
};


const displayThemeButtons = () => {
  const btnContainer = document.querySelector(".theme-btn-container");
  themes.forEach((theme) => {
    const div = document.createElement("div");
    div.className = "theme-btn";
    div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
    btnContainer.appendChild(div);
    div.addEventListener("click", () => setTheme(theme));
  });
};

displayThemeButtons();

// const scriptURL = 'https://script.google.com/macros/s/AKfycbwE5W1MEgkRCr-wvkzOOvYSdj78iLvtLrvwvqoohV-sXvtw43LE8-OU02j-WU-A1h9G/exec';
//   const form = document.forms['submit-to-google-sheet'];

//   form.addEventListener('submit', e => {
//     e.preventDefault();

//     const name = form.elements['name'].value;
//     const password = form.elements['password'].value;

//     if (!name || !password) {
//       alert('Please fill in both username and password fields');
//       return;
//     }

//     // If both fields are filled, proceed with the form submission
//     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//       .then(response => console.log('Success!', response))
//       .catch(error => console.error('Error!', error.message));
//   });