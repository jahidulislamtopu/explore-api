function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}


// 1. get the container element wher you want to add the new elements
//2. create child element
//3. set innerText or innerHTML
//4. appendChild


function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        console.log(posts);
        postDiv.innerHTML = `
                <h4>User-${post.userId}</h4>
                <h5>Post:${post.title}</h5>
                <p>Post dscription: ${post.body}</p>
        `;
        postsContainer.appendChild(postDiv);
    }
}


loadPosts();
