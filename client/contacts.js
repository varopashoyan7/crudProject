let elementID = document.querySelector('table');

async function getData() {
    let response = await fetch('/api/contact', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let html = `<tr id='headerCol'>
    <td class='header'></td>
    <td class='header'>name</td>
    <td class='header'>lastname</td>
    <td class='header'>pdone</td>
    <td class='header'>location</td>
    <td class='header'>dob</td>
    <td class='header'>nationality</td>
    <td class='header'></td>
</tr>`;
    let result = await response.json().then(res => res);
    if (result.length) {
        result.forEach(element => {
            let htmlSegment = `
        
            <tr class='columns' id='${element._id}'>
                <td><img src='${element.picture}' /></td>
                <td>${element.name}</td>
                <td>${element.lastname}</td>
                <td>${element.phone}</td>
                <td>${element.location}</td>
                <td>${element.dob}</td>
                <td>${element.nationality}</td> 
                <td><button id='edit'>edit</button> <button id='delete'>delete</button> </td> 
                
            </tr>
        `
            html += htmlSegment
        })
    }
    else {
        html = '<h3> your contact list is empty</h3>'
    }
    let contacts = document.querySelector('table')
    contacts.innerHTML = html
}

async function deleteData(id) {
    await fetch(`/api/contact/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

elementID.addEventListener('click', (e) => {
    localStorage.setItem('id', e.path[1].id)
    if (e.path[1].id !== 'headerCol' && e.path[0].nodeName != 'BUTTON') {
        localStorage.setItem('id', e.path[1].id)
        location.href = 'contactPage.html'
    }
    else if (e.path[0].innerText === 'edit') {
        localStorage.setItem('id', e.path[2].id)
        location.href = 'editContact.html'
    }
    else if (e.path[0].innerText === 'delete') {
        deleteData(e.path[2].id)
        getData()
    }
})

getData()