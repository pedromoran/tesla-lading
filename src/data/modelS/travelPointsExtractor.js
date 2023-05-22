//* Code to extract the transitive styles from the `Freedom to Travel` section in the testla web page.
//* How to use: take the code and paste it into the browser console, then scroll down to the `Freedom to Travel` section and wait for all the data to be extracted.
//* Note: when the transition of the last slide ends, scroll up or down to exit the section, cancel the event and take the data.

let gElements = document.querySelectorAll("g");
let pathElements = document.querySelectorAll("path");

let data = {};

let pathObserver = new MutationObserver((mutations) => {
  mutations.forEach(({ attributeName, target }) => {
    let newValue = target.getAttribute(attributeName);
    const indexOfEl = [...pathElements].indexOf(target);

    if (newValue !== "null") {
      if (data[`path-${indexOfEl}`]) {
        data[`path-${indexOfEl}`] = [...data[`path-${indexOfEl}`], newValue];
      } else {
        data[`path-${indexOfEl}`] = [newValue];
      }
    }

    console.log(data);
  });
});

let gObserver = new MutationObserver((mutations) => {
  mutations.forEach(({ attributeName, target }) => {
    let newValue = target.getAttribute(attributeName);
    const indexOfEl = [...gElements].indexOf(target);

    if (newValue !== "null") {
      if (data[`g-${indexOfEl}`]) {
        data[`g-${indexOfEl}`] = [...data[`g-${indexOfEl}`], newValue];
      } else {
        data[`g-${indexOfEl}`] = [newValue];
      }
    }

    console.log(data);
  });
});

let config = { attributes: true, childList: false, subtree: false };

pathElements.forEach((path) => {
  pathObserver.observe(path, config);
});

gElements.forEach((path) => {
  gObserver.observe(path, config);
});
