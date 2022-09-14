const name = document.querySelectorAll('.data');
const newContactData = document.querySelector('#newContactData');

async function postData(data) {
    await fetch('/api/contact/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

newContactData.addEventListener('click', () => {
    let data = {};
    for (let i = 0; i < name.length; i++) {
        if (name[i].value) {
            data[name[i].id] = name[i].value;
        }
        else {
            alert('your data is not Completed')
            data = null;
            break;
        }
    }
    if (data != null) {
        for (let i = 0; i < name.length; i++) {
            name[i].value = ''
        }
        alert('new contact is added');
        postData(data);
    }
})