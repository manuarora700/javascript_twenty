// https://jsonplaceholder.typicode.com/posts

const postsContainer = document.getElementById("posts-container");
const loading = document.querySelector(".loader");
const filter = document.getElementById("filter");

let limit = 5;
let page = 1;

// fethc posts from API
async function getPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  const data = await res.json();
  return data; // data is also a promise
}

// DIsplay posts in dom
async function showPosts() {
  const posts = await getPosts();

  //   console.log(posts);
  posts.forEach(post => {
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `
    
    <div class="number">${post.id}</div>
    <div class="post-info">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
    </div>
    
    `;
    postsContainer.appendChild(postEl);
  });
}
// show loader and fetch more posts
function showLoading() {
  loading.classList.add("show");

  // disppear after 1 second
  setTimeout(() => {
    loading.classList.remove("show");

    setTimeout(() => {
      page++;
      showPosts();
    }, 300);
  }, 1000);
}
// show initial posts
showPosts();

// event listeners
window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  //   console.log(document.documentElement.scrollHeight);

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    // show loader, and fetch the rest of the posts
    showLoading();
  }
});
