//class user
class User {
    constructor(username, password, role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }
    //funtion to get username
    getUserName() {
        return this.username;
    }
    //funtion to get password
    getPassword() {
        return this.password;
    }
    //function to get role
    getRole() {
        return this.role;
    }
}


//document eventlistener

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("frmLogin");
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    //error messages
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const error = document.getElementById("error");

    // creating users(admin and employees)
    const admin = new User("admin", "admin2023", "admin");
    const employee1 = new User("Donald", "donald2023", "employee");
    const employee2 = new User("Aswathy", "aswathy@2023", "employee");
    const employee3 = new User("Franco", "franco001", "employee");

    //eventlistener for submit
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!username.value.trim()) {
            usernameError.textContent = "Username is required!!";
        } else {
            usernameError.textContent = "";
        }
        if (!password.value.trim()) {
            passwordError.textContent = "Password is required!!";
        } else {
            passwordError.textContent = "";
        }

        const user = validateUser(username.value.trim() , password.value.trim() , [admin, employee1, employee2, employee3]);

        if (user) {
            if (user.getRole() === 'admin') {
                
                window.location.href = '/pages/admin.html';
                window.alert("Logged in successfully");
                

            } else if (user.getRole() === 'employee') {
                window.location.href = '/pages/travelrequestform.html';
                window.alert("Logged in successfully");
            }



        }
        else {
            console.log(user);
            alert("Invailid username or password!!\nPlease try again");
        }

    });

    //function to check is username and password are correct and return the user if found
    function validateUser(username, password, users) {
        for (let user of users) {
            console.log(user);
            if (user.getUserName() === username&& user.getPassword() === password) {
                console.log(user);
                return user;
            }
        }
        return null
    }


});

