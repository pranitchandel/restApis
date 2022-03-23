let localStorage;
if (typeof localStorage === "undefined" || localStorage === null) {
  LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}
module.exports = localStorage;
