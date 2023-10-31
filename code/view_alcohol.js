function viewDrinks() {
	fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php`)
		.then(res => {
			return res.json();
		})
		.then((data) => {
      console.log(data);
			const drinks = data.drinks;
			if (!drinks) {
				return;
			}

			let drinksElement = document.getElementById("drinks");
			let drinksHTML = "";
  for (let i = 0; i < drinks.length; i++) {
				let drink = drinks[i];
				const isAlcoholic = drink.strAlcoholic == "Alcoholic";
				drinksHTML += `
					<div class="drink-item">
						<h3>${drink.strDrink}</h3>
						<h5 class="${isAlcoholic ? 'red' : 'purple'}">${drink.strAlcoholic} - ${drink.strCategory}</h5>
						<img src="${drink.strDrinkThumb}" width=150 height=150>
					</div>
				`;
			}

			drinksElement.innerHTML = drinksHTML;
		});
}
function viewRecents() {
    fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/latest.php`)
		.then(res => {
			return res.json();
		})
		.then((data) => {
      console.log(data);
			const drinks = data.drinks;
			if (!drinks) {
				return;
			}

			let drinksElement = document.getElementById("recents");
			let drinksHTML = "";
  for (let i = 0; i < drinks.length; i++) {
				let drink = drinks[i];
				const isAlcoholic = drink.strAlcoholic == "Alcoholic";
				drinksHTML += `
					<div class="drink-item">
						<h3>${drink.strDrink}</h3>
						<h5 class="${isAlcoholic ? 'red' : 'purple'}">${drink.strAlcoholic} - ${drink.strCategory}</h5>
						<img class="photos" src="${drink.strDrinkThumb}">
					</div>
				`;
			}

			drinksElement.innerHTML = drinksHTML;
		});
}
function viewPopular() {
    fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/popular.php`)
		.then(res => {
			return res.json();
		})
		.then((data) => {
      console.log(data);
			const drinks = data.drinks;
			if (!drinks) {
				return;
			}

			let drinksElement = document.getElementById("popular");
			let drinksHTML = "";
  for (let i = 0; i < drinks.length; i++) {
				let drink = drinks[i];
				const isAlcoholic = drink.strAlcoholic == "Alcoholic";
				drinksHTML += `
					<div class="drink-item">
						<h3>${drink.strDrink}</h3>
						<h5 class="${isAlcoholic ? 'red' : 'purple'}">${drink.strAlcoholic} - ${drink.strCategory}</h5>
						<img src="${drink.strDrinkThumb}" width=150 height=150>
					</div>
				`;
			}

			drinksElement.innerHTML = drinksHTML;
		});
}
window.onload=viewDrinks();
window.onload=viewPopular();
window.onload=viewRecents();