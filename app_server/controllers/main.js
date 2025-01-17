var registeredUsers = [];

module.exports.loggedIn = function (req, res, next) {
    console.log("Checking if logged in:");
    if (req.session.user) {
        // Proceed if the user is logged in.
        console.log("Logged in: "); console.log(req.session.user);
        next();
    }
    else {
        console.log("Not logged in");
        // res.send("You must first log in!!!");
        res.render('login', { message: 'Please log in!' });
    }
};

/*
 * GET home page.
 */
module.exports.index = function (req, res, next) {
    res.render('index', { title: 'Assignment 3' });
    console.log('Cookies: ', req.cookies);
};

/*
 * GET registration page.
 */
module.exports.get_register = function (req, res) {
    res.render('register',
        { title: "Register", message: "Please register!" });
};

/*
 * POST registration page.
 */
module.exports.post_register = function (req, res) {
    if (!req.body.username || !req.body.password) {
        res.status("400");
        res.send("Invalid details!");
    }
    else {
        // Create an array of users with matching usernames.
        var matches = registeredUsers.filter(function (user) {
            return user.username === req.body.username;
        });

        // If there is a match, the user has already registered.
        if (matches.length > 0) {
            res.render('register', { message: "User already registered!" });
        }

        // Register a new user.
        else {
            var newUser = {
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                organization: req.body.organization,
                gender: req.body.gender,
                birthday: req.body.birthday
            };
            registeredUsers.push(newUser);
            console.log("New user:"); console.log(newUser);
            console.log("Registered users:"); console.log(registeredUsers);
            res.redirect('/login');
        }
    }
};

/*
 * GET login page.
 */
module.exports.get_login = function (req, res) {
    res.render('login', { title: "Login", message: "Please log in!" });
};

/*
 * POST login page.
 */
module.exports.post_login = function (req, res) {
    console.log("Registered users:"); console.log(registeredUsers);
    console.log("Logging in: " + req.body.username + "/" + req.body.password);

    // Create an array of users with matching credentials.
    var matches = registeredUsers.filter(function (user) {
        return (user.username === req.body.username)
            && (user.password === req.body.password);
    });

    console.log("Matching credentials: "); console.log(matches);

    if (matches.length === 0) {
        res.render('login', { message: "Invalid credentials!" });
    }
    else {
        // The user is logged in for this session.
        req.session.user = matches[0];
        console.log("Sucessfully logged in:");
        console.log(req.session.user.username);

        res.render('loggedin',
            { name: req.session.user.username });
    }
};

/*
 * GET logout page.
 */
module.exports.get_logout = function (req, res) {
    console.log("Logging out:");

    if (req.session.user) {
        var name = req.session.user.username;
        console.log(name);

        req.session.destroy(function () {
            console.log(name + " logged out.");
        });

        res.send(name + " is now logged out.");
    }
    else {
        console.log("Nobody is currently logged in!");
        res.send("Nobody is currently logged in!");
    }
};

/*
 * GET protected page.
 */
module.exports.get_protected = function (req, res) {
    res.render('protected', { title: "Protected", name: req.session.user.username });
};

module.exports.get_profile = function (req, res) {
    var matches = registeredUsers.filter(function (user) {
        return user.username === req.session.user.username;
    });
    if (matches[0]) res.render('profile', { title: "Profile", user: matches[0] })
    else {
        // res.send("You must first log in.");
        res.render('profilelogin', { title: "Error", message: 'You must first log in!' });
    }
}

module.exports.post_profile = function (req, res) {
    console.log(req.body);
    var matches = registeredUsers.filter(function (user) {
        return user.username === req.session.user.username;
    });
    Object.assign(matches[0], {
        username: req.body.new_username,
        password: req.body.new_password,
        email: req.body.new_email,
        organization: req.body.new_organization,
        gender: req.body.new_gender,
        birthday: req.body.new_birthday,
    });
    console.log('registered users:', registeredUsers);
    res.render('profile', { user: matches[0] })
}


module.exports.assignment4 = function (req, res) {
    console.log('loading assignment4');
    res.render('assignment4', { title: 'Assignment4' });
}