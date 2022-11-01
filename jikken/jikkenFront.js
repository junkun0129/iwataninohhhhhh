fetch("http://localhost:3000/",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({a: 1, b: 2})
})
.then(function(res){ return res.json() })
.then(function(res){ console.log(res) })

// .catch(function(res){ console.log(res) })

