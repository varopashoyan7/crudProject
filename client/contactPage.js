async function singleData(id) {
    let response = await fetch(`/api/contact/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    let result = await response.json().then(res => res);
    let htmlSegment = `
                <img src='${result.picture}'/>
                <div>
                    <p class='head'>Name:</p>
                    <p>${result.name}</p>
                </div>
                <div>
                    <p class='head'>Lastname:</p>
                    <p>${result.lastname}</p>
                </div>
                <div>
                    <p class='head'>Phone:</p>
                    <p>${result.phone}</p>
                </div> 
                <div>
                    <p class='head'>Location:</p>
                    <p>${result.location}</p>
                </div>
                <div>
                    <p class='head'>Date of Birth:</p>
                    <p>${result.dob}</p>
                </div>
                <div>
                    <p class='head'>Nationality:</p>
                    <p>${result.nationality}</p>
                </div>
        `
    let contacts = document.querySelector('div')
    contacts.innerHTML = htmlSegment
}
singleData(localStorage.id)