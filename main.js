//Homework

/*----------------------------------------------------------------
1.  Deal all the asynchronous action in promise pattern after watching and practicing thr youtube series properly
  For demonstration I converted get and post method
2. Deal all the asynchronous action in Async await pattern after watching and practicing thr youtube series properly
----------------------------------------------------------------*/

const http = {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data.splice(0, 20)))
        .catch((err) => reject(new Error('Problem in getting data')))
    })
  },
  getOne(url, callback) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((err) => callback(null, err))
  },
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(new Error('problem in adding data')))
    })
  },
  update(url, data, callback) {
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((err) => callback(null, err))
  },
  delete(url, callback) {
    fetch(url, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((err) => callback(null, err))
  }
}

function getTodos() {
  http
    .get('https://jsonplaceholder.typicode.com/todos')
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}

function getTodo(id) {
  http.getOne(`https://jsonplaceholder.typicode.com/todos/${id}`, function (
    data,
    error
  ) {
    if (error) {
      console.log('err', error)
    } else {
      console.log(data)
    }
  })
}

function addTodo() {
  http
    .post('https://jsonplaceholder.typicode.com/todos', {
      userId: 1,
      title: 'walking Around',
      completed: true
    })
    .then((data) => {
      //one async result is dependent on other
      //after adding todos we want to add todo
      console.log(data, data.id)
      //getTodo(data.id) produce error as there is no id:201
    })
    .catch((err) => console.log(err))
}

function updateTodo() {
  http.update(
    'https://jsonplaceholder.typicode.com/todos/1',
    {
      title: 'walking around update'
    },
    function (data) {
      console.log(data)
    }
  )
}

function deleteTodo() {
  http.delete('https://jsonplaceholder.typicode.com/todos/1', function (data) {
    console.log(data)
  })
}

//add a todo
//get the todo
getTodos()
addTodo()
// getTodo()
updateTodo()
deleteTodo()
