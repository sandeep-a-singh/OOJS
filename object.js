function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    
    this.print = function () {
        console.log(this.name, this.online ? "Is LoggedIn" : "Is LoggedOut");
    }
}

User.prototype.login = function () {
    this.online = true;
    this.print();
}

User.prototype.logout = function () {
    this.online = false;
    this.print();
}

function Admin(...args) {
    User.apply(this, args);
    this.role = "Admin";
}
Admin.prototype = Object.create(User.prototype);

var user = new User("s@gmail.com", "Sunny");
var admin = new Admin("sandeep@gmail.com", "Sandeep");

console.log(user);
console.log(admin);

user.login();
user.logout();

admin.login();
admin.logout();
