const postsContainer = document.getElementById('posts');
const postContentInput = document.getElementById('postContent');

function submitPost() {
  const content = postContentInput.value;
  if (content.trim() !== '') {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.textContent = content;

    postsContainer.appendChild(postElement);

    // Optional: You may want to send the post content to a server for storage.

    // Clear the input field
    postContentInput.value = '';
  }
}
