function searchCocktail() {
	let letter = document.getElementById("search-text").value;
	if (!letter) {
		return;
	}

	fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
		.then(res => {
			return res.json();
		})
		.then((data) => {
			const drinks = data.drinks;
			if (!drinks) {
				return;
			}

			let drinksElement = document.getElementById("drinks");
			let drinksHTML = "";
  			for (let i = 0; i < drinks.length; i++) {
				let drink = drinks[i];
				const is_Alcoholic = drink.strAlcoholic == "Alcoholic";
				drinksHTML += `
					<div class="drink-item" text-align=center>
						<h3>${drink.strDrink}</h3>
						<p>Type: ${drink.strAlcoholic}</p>
						<p>Category: ${drink.strCategory}</p>
						<img class="photos" src="${drink.strDrinkThumb}">
					</div>
				`;
			}
			drinksElement.innerHTML = drinksHTML;
		});
}