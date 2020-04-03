const button = document.querySelector('#submit');

button.addEventListener('click', () => {
	// document.querySelector('#userName').removeAttribute('value');
	// document.querySelector('#comment').removeAttribute('value');
	// document.getElementById("userName").value = '';
	// document.getElementById("comment").value = '';
	const form = new FormData(document.querySelector('#commentForm'));
	const request = new Request('../php/addData.php', {
		method: 'POST',
		body: form
	});
	fetch(request)
	.then(response => response.text())
	.then(() => {

		fetch('../php/getData.php').then((res) => res.json())
		.then(response => {
			console.log(response);
			let output ='';

			if ((response.length > 1) && (response[0].id < response[1].id)) {
				response.reverse();
			};
			for(let i in response){
				const img = (response[i].image) ? `<img src=${response[i].image} class="w-100 mb-2">` : '<br>';
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
		}).catch(error => console.log(error));

	}).catch(error => console.log(error));

});
