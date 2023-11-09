const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const query = urlParams.get("q");

if (query !== null) {
  const interval = setInterval(() => {
    const root = document.querySelectorAll("[data-id=root]");
    if (root.length === 0) {
      return;
    }

    // Clear interval.
    clearInterval(interval);
    
    
    // Set query.
    const textfield = root[0]
    textfield.value = query;

    // Simulate an input event to enable send button
    const inputEvent = new InputEvent("input", {bubbles: true});
    textfield.dispatchEvent(inputEvent);

    // Click send button
    const button = root[0].parentElement.querySelector("button");
    button.click();
  }, 700);
}
