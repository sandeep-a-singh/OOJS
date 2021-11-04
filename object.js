function User(email, name) {
    this.email = email;
    this.name = name;
    this.login = function(){
        console.log(this.email, " ==> ", this.name);
    }
}



var user = new User("s@gmail.com", "Sunny");
var nextUser = new User("sandeep@gmail.com", "Sandeep");


console.log(user);

nextUser.login();