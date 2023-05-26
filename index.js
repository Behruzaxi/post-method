let inp = document.querySelectorAll('.form-control')
let btn = document.querySelector('.btn')

btn.onclick = () => {
  let inputValueOne = inp[0].value
  let inputValueTwo = inp[1].value
  let obj = { name: inputValueOne, lastname: inputValueTwo }

  fetch('https://for-backend-goldweb-production.up.railway.app/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  }).then(res => {
    res.status === 201 ? alert('Succes') : alert('error')
    inp[0].value = ''
    inp[1].value = ''
  })
}

let tbody = document.querySelector('tbody')

    

fetch('https://for-backend-goldweb-production.up.railway.app/data')
  .then(res => res.json())
  .then(data => {
    data.forEach(elem => {
      tbody.innerHTML += `
      <tr>
      <th scope="row">${elem.id}</th>
      <td>${elem.name}</td>
      <td>${elem.lastname}</td>
      <td><i class="fa-solid fa-trash" onclick="delEte(${elem.id})"></i><td/>
      </tr>
      `
    })
  })

  function delEte(index) { 
    fetch(`https://for-backend-goldweb-production.up.railway.app/data/${index}`, { 
        method: 'DELETE', 
    }).then((res) => { 
        alert(res.statusText) 
    }); 
}