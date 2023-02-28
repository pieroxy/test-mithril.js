var Component1  = {
  view : () => {
    throw "Ooops"
  },
  name:"Component1"
}

var Component2  = {
  view : (vnode) => {
    return vnode.attrs.counter + ""
  },
  name:"Component2",
}

var Page = {
  co1 : false,
  co2 : 0,

  view : function() {
    return [
      m("", "Hello World"),
      m("ul", [
        m("li", [
          m("span", "Component 1: "),
          m("span", this.co1 ? m(Component1, {toto:2}) : "Unclicked")
        ]),
        m("li", [
          m("span", "Component 2: "),
          m("span", m(Component2, {counter:this.co2}))
        ]),
      ]),
      m("button", {
        onclick:() => {
          this.co1 = !this.co1;
        }
      }, "Show component 1 (throws in view)"),
      m("button", {
        onclick:() => {
          this.co2++;
        }
      }, "Increment counter of component 2"),
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

