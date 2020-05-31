const API_URL = "https://jsonplaceholder.typicode.com";

const getPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  return await response.json();
};

const getUSers = async () => {
  const response = await fetch(`${API_URL}/users`);
  return await response.json();
};

export { getPosts, getUSers };
