// const { default: axios } = require("axios");

// const { default: axios } = require("axios");

// GET REQUEST
// method one
function getTodos() {
	console.log('GET Request');
	// axios({
	//     method: 'get',
	//     url: 'https://jsonplaceholder.typicode.com/todos',
	//     params: {
	//         _limit: 3
	//        }
	// }).
	// then(res => showOutput(res))
	// .catch(err => console.log(err, 'error'))

	// method 2  // if we remove the get, it will work also
	axios
		.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
		.then((res) => showOutput(res))
		.catch((err) => console.log(err, 'error'));
}

// POST REQUEST
function addTodo() {
	console.log('POST Request');
	// axios.post('https://jsonplaceholder.typicode.com/posts')
	// axios({
	//     method: 'post',
	//     url: 'https://jsonplaceholder.typicode.com/posts',
	//     data: {
	//         userId: 1,
	//         id: 1,
	//         title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
	//         body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
	//     }
	// }).then(res => showOutput(res))
	// .catch(err => console.log(err, 'error'))

	// method 2
	// axios.post('https://jsonplaceholder.typicode.com/posts')
	axios
		.post('https://jsonplaceholder.typicode.com/posts', {
			userId: 1,
			id: 1,
			title: 'Ray',
			body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
		})
		.then((res) => showOutput(res))
		.catch((err) => console.log(err, 'error'));
}

// note PATCH applies a partial update to the resource
// PUT is for checking if resource exists then update, else create new resource
// PATCH is always for updating a resource

// PUT/PATCH REQUEST
function updateTodo() {
	console.log('PUT/PATCH Request');
	// method 1
	// axios({
	//     method: 'put',
	//     url: 'https://jsonplaceholder.typicode.com/posts/1',
	//     data: {
	//         id: 1,
	//         title: 'put',
	//         body: 'put body'
	//     }
	// }).then(res => console.log(res))
	// .catch(err => console.log(err))

	// 2
	// axios.put('https://jsonplaceholder.typicode.com/posts/1',{
	//     id: 1,
	//     title: 'updated title with put',
	//     body: 'updated body'
	// })
	// .then(res =>  showOutput(res))
	// .catch(err => console.log(err))

	// patch method
	axios
		.patch('https://jsonplaceholder.typicode.com/posts/1', {
			id: 1,
			title: 'updated title with put',
			body: 'updated body',
		})
		.then((res) => showOutput(res))
		.catch((err) => console.log(err));
}

// DELETE REQUEST
function removeTodo() {
	console.log('DELETE Request');
	// axios({
	// 	method: 'delete',
	// 	url: 'https://jsonplaceholder.typicode.com/posts/1',
	// 	data: {
	// 		id: 1,
	// 		title: 'deleted title',
	// 		body: 'deleted body',
	// 	},
	// })
	// 	.then((res) => showOutput(res))
	// 	.catch((err) => console.error(err));

	// 2
	axios.delete('https://jsonplaceholder.typicode.com/posts/1', {
		id: 1,
		title: 'deleted title',
		body: 'deleted body',
	}).then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// SIMULTANEOUS DATA
function getData() {
	console.log('Simultaneous Request');
}

// CUSTOM HEADERS
function customHeaders() {
	console.log('Custom Headers');
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
	console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
	console.log('Error Handling');
}

// CANCEL TOKEN
function cancelToken() {
	console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
	document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
	.getElementById('transform')
	.addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
