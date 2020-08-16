const database = [
    user1 = {
        name: "Mashry",
        id: "CE-17036"
    },

    user2 = {
        name: "Shohag",
        id: "CE-17037"
    },

    user3 = {
        name: "Rakib",
        id: "CE-17038"
    }
]

console.log("start");

// backdated style of fetching

function fetchUserDetails (id, callBackAccept, callBackReject) {
    setTimeout(() => {
        let flag = false;
        database.forEach(user => {
            if(user.id === id && user.name !== "Shohag") { 
                flag = true;
                callBackAccept(user);
            }
        });
        if(!flag) callBackReject(new Error("User not found!"));
    }, 1500);
}

function greetingUser_1 (user, callBackAccept, callBackReject) {
    setTimeout(() => {
        if(user.name !== "Rakib") callBackAccept(`Hello ${user.name}, Good morning.`);
        else callBackReject(new Error("Don't let him in"));
    }, 1500);
}

function startProcess_1 (id) {
    fetchUserDetails(id, user => {
        greetingUser_1(user, (msg) => {
            console.log("1-", msg);
        }, error => console.log("1-", error.message))

    }, error => console.log("1-", error.message));
}


// promise

function fetchUser (id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = false;
            database.forEach(user => {
                if(user.id === id && user.name !== "Shohag") {
                    resolve(user);
                    flag = true;
                }
            });
            if(!flag) reject(new Error("User not found"));
        }, 1500);
    });
}

function greetingUser (user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(`Hello ${user.name}, Good morning.`);
            if(user.name !== "Rakib") resolve(`Hello ${user.name}, Good morning.`);
            else reject(new Error("Don't let him in :3"));
        }, 1500);
    })
}

function startProcess_2 (id) {
    const user = fetchUser(id);

    user
    .then(data => greetingUser(data))
    .then(msg => console.log("2-", msg))
    .catch(error => console.log("2-", error.message));
}


// Sync style
async function startProcess_3 (id) {
    try {
        const user = await fetchUser(id);
        const greeting = await greetingUser(user);
        console.log("3-", greeting);
    } catch (error) {
        console.log("3-", error.message);
    }
}



// Test Drive
startProcess_1("CE-17036");
startProcess_1("CE-17037");
startProcess_1("CE-17038");

startProcess_2("CE-17036");
startProcess_2("CE-17037");
startProcess_2("CE-17038");

startProcess_3("CE-17036");
startProcess_3("CE-17037");
startProcess_3("CE-17038");


console.log("end");