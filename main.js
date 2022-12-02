// const { default: axios } = require("axios");

// const { default: axios } = require("axios");


// AXIOS GLOBALS
// if we have encrypted routes and we want to pass like bearer/tokens, authorization , rather than enter constom header config for every endpoint we use a global method below:
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common['Authorization'] = "some AUTH_TOKEN here"; 
// axios.defaults.headers.common['Authorization'] = "https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlJheW1vbmQgSWRlbmdlbGkiLCJpYXQiOjE1MTYyMzkwMjJ9.vfkaK-q5QoJeMLD3gb80GJlI59V51ONA8tkHSLQr60Q";

// headers: {
// 	'Content-type': "application/json",
// 	Authorization: 'Some token here'
// }

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
	axios.post('https://jsonplaceholder.typicode.com/posts', {
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

	//method 2
	axios
		.delete('https://jsonplaceholder.typicode.com/posts/1', {
			id: 1,
			title: 'deleted title',
			body: 'deleted body',
		})
		.then((res) => showOutput(res))
		.catch((err) => console.log(err));
}

// SIMULTANEOUS DATA  -- e.g when we try to perform get, post , delete at the same time,
// to achieve this, we use axios.all
function getData() {
	console.log('Simultaneous Request');
	axios
		.all([
			axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3'),
			axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3'),
		])
		// .then(res => {
		//     console.log(res[0])
		//     console.log(res[1])
		//     showOutput(res[1])
		// })
		// cleaner method
		.then(axios.spread((todos, posts) => showOutput(posts)))
		.catch((err) => console.log(err));
}

// CUSTOM HEADERS - allows us customize headers like in the case of logins or tokens 
function customHeaders() {
	console.log('Custom Headers');
	let config = {
		headers: {
			'Content-type': "application/json",
			Authorization: 'Some token here'
		}
	}
	axios.post('https://jsonplaceholder.typicode.com/posts', {
			userId: 1,
			id: 1,
			title: 'Ray',
			body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
		}, config)
		.then((res) => showOutput(res))
		.catch((err) => console.log(err, 'error'));

}

// TRANSFORMING REQUESTS & RESPONSES -allows us transorm requests in certain ways (learn later)
function transformResponse() {
	console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
	console.log('Error Handling');
	axios
		.get('https://jsonplaceholder.typicode.com/todoss')
		.then((res) => showOutput(res))
		.catch(function (error) {
			if (error.response) {
			  // The request was made and the server responded with a status code
			  // that falls out of the range of 2xx
			  console.log(error.response.data);
			  console.log(error.response.status);
			  console.log(error.response.headers);
			}})
}

// CANCEL TOKEN
function cancelToken() {
	console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES - allows us to run special(any) functions before the request/response runs
axios.interceptors.request.use(
	(config) => {
		console.log(
			`**Testing interceptors ${config.method.toUpperCase()} request sent to ${
				config.url
			} at ${new Date().getTime()}`
		);
		return config;
	},
	// function (error) {
	//     // Do something with request error
	//     return Promise.reject(error);
	//   }
	(error) => {
		return Promise.reject(error);
	}
);

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
