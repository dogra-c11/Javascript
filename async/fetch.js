async function getUsers(params) {
    try {
        const url = 'https://jsonplaceholder.typicode.com/users'; // URL to fetch users
        const response = await fetch(url);      // Waits for HTTP response
        const data = await response.json();     // Waits for body to be read and parsed as JSON
        console.log(data);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}
// This code demonstrates how to use the fetch API to make an HTTP GET request to a URL and handle the response.
// fetch and .json are both asynchronous operations.
// fetch returns a promise that resolves to the Response object representing the response to the request.
// The .json() method of the Response object also returns a promise that resolves to the result of parsing the body text as JSON.

getUsers();


// we can also write the above code using .then() and .catch() instead of async/await
function getUsersWithThen() {       
    const url = 'https://jsonplaceholder.typicode.com/users'; // URL to fetch users
    fetch(url)
        .then(response => response.json()) // Waits for body to be read and parsed as JSON
        .then(data => console.log(data))   // Logs the data
        .catch(error => console.error('Error fetching users:', error)); // Catches any errors
}               
getUsersWithThen();

// both getUsers and getUsersWithThen will execute the fetch request, but getUsers uses async/await syntax while getUsersWithThen uses .then() and .catch() for handling promises but both will give the same output.

// Note :: fetch in background goes to high priority queue (microservice queue), so it will execute before the task queue, which is why we see the output of fetch before the output of setTimeout or setInterval.