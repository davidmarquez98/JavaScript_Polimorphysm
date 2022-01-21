class InputDevice{
    constructor(inputType, brand){
        this._inputType = inputType;
        this._brand= brand;
    }

    set inputType(inputType){
        this._inputType = inputType
    }

    get inputType(){
        return this._inputType;
    }

    set brand(brand){
        this._brand = brand;
    }

    get brand(){
        return this._brand;
    }

    toString(){
        return ", input type: " + this.inputType + ", brand: " + this.brand;
    }
}

class Mouse extends InputDevice{

    static mouseAccountant = 0;

    constructor(inputType, brand){
        super(inputType, brand);
        this._mouseId = ++Mouse.mouseAccountant;        
    }

    toString(){
        return "Mouse ID: " + this._mouseId + super.toString();
    }
}

class Keyboard extends InputDevice{

    static keyboardAccountant = 0;

    constructor(inputType, brand){
        super(inputType, brand);
        this._keyboardId = ++Keyboard.keyboardAccountant;        
    }

    toString(){
        return "keyboard ID: " + this._keyboardId + super.toString();
    }
}

class Display{

    static displayAccountant = 0;

    constructor(brand, size){
        this._displayId = ++Display.displayAccountant;        
        this._brand = brand;
        this._size = size;
    }

    set brand(brand){
        this._brand = brand;
    }

    get brand(){
        return this._brand;
    }

    set size(size){
        this._size = size;
    }

    get size(){
        return this._size;
    }

    toString(){
        return "Display ID: " + this._displayId + " , brand: " + this._brand + " , size: " + this._size;
    }
}

class Computer{
    static computerAccountant = 0;

    constructor(name, display, keyboard, mouse){
        this._computerId = ++Computer.computerAccountant;
        this._name = name;
        this._display = display;
        this._keyboard = keyboard;
        this._mouse = mouse;
    }   
    
    set name(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set display(display){
        this._display = display;
    }

    get display(){
        return this._display;
    }

    set brand(brand){
        this._brand = brand;
    }

    get brand(){
        return this._brand;
    }

    set keyboard(keyboard){
        this._keyboard = keyboard;
    }

    get keyboard(){
        return this._keyboard;
    }

    toString(){
        return ".Computer ID: " + this._computerId + ", name: " + this._name + "\n." + this._display.toString() + "\n." + this._keyboard.toString() + "\n." + this._mouse.toString();
    }
}

class Order{
    static orderAccountant = 0;
    static computers = [];

    constructor(){
        this._orderId= ++Order.orderAccountant;
    }

    addComputer(computer){
        if(computer != null)
        {
            Order.computers.push(computer);
        }
    }

    get orderId(){
        return this._orderId;
    }

    showOrder(){
        if(Order.computers.length != 0)
        {
            console.log("_ Order ID: " + this.orderId);
            for(let i = 0;i < Order.computers.length;i++){
                console.log(Order.computers[i].toString());
                console.log("........................................................")
            }
        }
    }
}

let order = new Order();
let display = new Display("Noblex", 24.3);
let keyboard = new Keyboard("Wireless", "Hyperx");
let mouse = new Mouse("Wired","Ryzen");
order.addComputer(new Computer("HP", display, keyboard, mouse));
order.addComputer(new Computer("HP", display, keyboard, mouse));

let displayTwo = new Display("Sony", 21);
let keyboardTwo = new Keyboard("Wireless", "Ryzen");
let mouseTwo = new Mouse("Wired","Hyperx");
order.addComputer(new Computer("HP", displayTwo, keyboardTwo, mouseTwo));
order.showOrder();
