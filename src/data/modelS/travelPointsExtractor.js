//* Code to extract the transitive styles from the `Freedom to Travel` section in the testla web page.
//* How to use: take the code and paste it into the browser console, then scroll down to the `Freedom to Travel` section and wait for all the data to be extracted.
//* Note: when the transition of the last slide ends, scroll up or down to exit the section, cancel the event and take the data.

let gElements = document.querySelectorAll("g");
let pathElements = document.querySelectorAll("path");
let textElements = document.querySelectorAll("g text");

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

let textObserver = new MutationObserver((mutations) => {
  mutations.forEach(({ target, type }) => {
    if (type === "childList") {
      let newValue = target.firstChild.nodeValue;
      const indexOfEl = [...textElements].indexOf(target);

      if (newValue !== "null") {
        if (data[`text-${indexOfEl}`]) {
          data[`text-${indexOfEl}`] = [...data[`text-${indexOfEl}`], newValue];
        } else {
          data[`text-${indexOfEl}`] = [newValue];
        }
      }

      console.log(data);
    }
  });
});

let configAttributes = { attributes: true, childList: false, subtree: false };
let configTextNode = { childList: true, subtree: true };

pathElements.forEach((path) => {
  pathObserver.observe(path, config);
});

gElements.forEach((g) => {
  gObserver.observe(g, config);
});

textElements.forEach((text) => {
  textObserver.observe(text, configTextNode);
});
