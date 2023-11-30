// Add your code here


function submitData (name, email){
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
         
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    })

    .then(res => res.json())
    .then(user => {
       const h1 = document.createElement('h1')
       h1.textContent = user.id
       document.body.appendChild(h1)

        console.log(user.id)
    })
    .catch(error =>{
        alert("ERROR!");
        const h2 = document.createElement('h2')
        h2.textContent = error.message
        document.body.appendChild(h2)
        
    })
}
// submitData('bob','bob@bob.com')