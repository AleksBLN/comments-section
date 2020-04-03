fetch('../php/getData.php').then((res) => res.json())
.then(response => {
	if (response.length > 0) {
		let output ='';
		if ((response.length > 1) && (response[0].id < response[1].id)) {
			response.reverse();
		};
		for(let i in response){
			const img = (response[i].image) ? `<img src=${response[i].image} class="w-100 mb-2">` : '';
			output += `
			<div class="card mb-2 w-100">
				<div class="card-header d-flex justify-content-between">
					<p class="mb-n1">${response[i].name}</p>
					<p class="mb-n1">${response[i].cur_date}</p>
				</div>
				<div class="card-body">
					<p class="mb-2">${response[i].message}<br>
					${img}
					<div id="${response[i].id}" class="delete-button btn btn-outline-danger btn-sm py-0 float-right">Delete</div>
					</p>
				</div>
			</div>`;
		}
		document.querySelector('#card-container').innerHTML = output;
	}
}).catch(error => console.log(error));
