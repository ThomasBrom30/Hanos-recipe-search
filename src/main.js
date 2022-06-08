import axios from "axios";

const ingredientInputField = document.getElementById("input-field");
const form = document.getElementById("onsubmit-form");
const firstRecipeCard = document.getElementById("first-recipe-card");



async function fetchRecipeByIngredients( query ){

    try {

        const response = await axios.get("https://api.edamam.com/api/recipes/v2", {
            params: {
                type: "public",
                app_id: "009506a1",
                app_key: "75b4c94ffbafb4cd084d4d9e06e1e174",
                q: query,

            },

            headers:{
                "Content-Type": "application/json"
            }
        } );
        const  searchByTitle = response.data.hits;
        createRecipeList (searchByTitle)
        console.log(searchByTitle)


    } catch (error) {
        console.log(error);
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    fetchRecipeByIngredients(ingredientInputField.value);
})



function createRecipeList (recipesArray){
    console.log(recipesArray)



    const firstRecipeCardImage = recipesArray[0].recipe.image
    let ingredientsArrayOne = recipesArray[0].recipe.ingredientLines
    let numbersToString = ingredientsArrayOne.toString();






    firstRecipeCard.innerHTML =`
        ${recipesArray[0].recipe.label}
       
	<img id="first-recipe-card-image" src="${firstRecipeCardImage}" alt="hier hoort een image">
	    <p class="recipe-card-text">Ingredients: ${numbersToString}</p>
	   
`;



}
