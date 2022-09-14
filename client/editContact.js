const editContact = document.querySelectorAll('input');
const editContactButton = document.getElementById('editContact')

async function getData() {
    let response = await fetch('/api/contact', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let contact;
    let result = await response.json().then(res => res);
    for(let i = 0; i < result.length; i++){
        if(result[i]._id === localStorage.id){
            contact = result[i]
            break
        }
    }
        editContact[0].value = contact.name;
        editContact[1].value = contact.lastname;
        editContact[2].value = contact.phone;
        editContact[3].value = contact.location;
        editContact[4].value = contact.nationality;
        editContact[5].value = contact.picture;
        editContact[6].value = contact.dob;
}

async function editData(data, id) {
    await fetch(`/api/contact/edit/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
       body: JSON.stringify(data)
    });
}

editContactButton.addEventListener('click', ()=> {
    let editedData = {}
    for(let i = 0; i < editContact.length; i++){
        editedData[editContact[i].id] = editContact[i].value;
    }   
    editData(editedData, localStorage.id)
    alert('your contact edited')
})

    getData()