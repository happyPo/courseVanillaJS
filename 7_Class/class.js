class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
    // this.size =
  }

  show() {
    this.$el.style.display = "block";
  }
  hide() {
    this.$el.style.display = "none";
  }
}

class Box extends Component {
  constructor(option) {
    super(option.selector);

    this.$el.style.width = this.$el.style.height = option.size + "px";
    this.$el.style.backgroundColor = option.bgColor;
  }
}

class Circle extends Box {
  constructor(option) {
    super(option);

    this.$el.style.borderRadius = option.radius;
  }
}

const circle = new Circle({
  selector: ".circle",
  size: 100,
  bgColor: "#a55",
  radius: "50%"
});

const box1 = new Box({
  selector: ".box1",
  size: 100,
  bgColor: "#000"
});

const box2 = new Box({
  selector: ".box2",
  size: 150,
  bgColor: "#55a"
});
