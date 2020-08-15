const posts = [
    {
        title: "Post One",
        body: "This is post one body"
    },
    {
        title: "Post two",
        body: "This is post two body"
    }
]

function getPostTitle () {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost (post = {}, callBack) {
    setTimeout(() => {
        posts.push(post);
        callBack();
    }, 2000);
}

createPost({title: "Post Three",
body: "This is post three body"}, getPostTitle);
getPostTitle();