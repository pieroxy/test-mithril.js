var Subco  = {
  view : () => {
    console.log("Here 2");
    throw "Ooops"
    return [
      m("", "Sub component"),
    ]
  },
  name:"Subco"
}

var Page = {
  subco : false,
  view : () => {
    console.log("Here");
    return [
      m("", "Hello World"),
      m("", this.subco ? m(Subco, {toto:2}) : "Unclicked"),
      m("button", {
        onclick:() => {
          this.subco = true;
        }
      }, "Click me")
    ]
  }
}

window.addEventListener("load", () => {
  console.log("Initializing");
  m.route.prefix="?";
  m.errorManager.log = function(level, msg) {
    console.log(level + "::" + msg);
  }
  let routes = {};
  routes["/"] = Page
  m.route(document.body, "/", routes);
})

