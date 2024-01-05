export class Box {
    constructor(name) {
      this.name = name;
      this.loc = [0, 0];
    }
  
    setName(newName) {
      this.name = newName;
    }
  
    setLoc(posX, posY) {
      this.loc = [posX, posY];
    }
  
    getValue() {
      return this.name;
    }
  }
  
  export default class Modal {
    static Event = new Box("domains");
    static Contact = new Box("aboutUs");
    static Speaker = new Box("trailer");
    static About = new Box("ourTeam");
    static None = new Box("null");
  }
  