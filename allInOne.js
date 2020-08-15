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

// function fetchUserDetails (id, callBack) {
//     setTimeout(() => {
//         database.forEach(user => {
//             if(user.id === id) callBack(user);
//         });
//     }, 1500);
// }

// function greetingUser (user, callBack) {
//     setTimeout(() => {
//         callBack(`Hello ${user.name}, Good morning.`);
//     }, 1500);
// }

// const user =  fetchUserDetails("CE-17037", (user) => {
//     console.log(user.name);
//     const greeting = greetingUser(user, (msg) => {
//         console.log(msg);
//     })

// });


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


const user = fetchUser("CE-17037");

user
.then(data => greetingUser(data))
.then(msg => console.log(msg))
.catch(error => console.log(error.message));


// Sync style
async function startProcess (id) {
    try {
        const user = await fetchUser(id);
        const greeting = await greetingUser(user);
        console.log(greeting);
    } catch (error) {
        console.log(error.message);
    }
}

startProcess("CE-17038");


console.log("end");