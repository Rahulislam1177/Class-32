const searchfood=()=>{

    document.getElementById('error').style.display ='none'
    const searchInput = document.getElementById('search-input');
    const searchText =searchInput.value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then(res => res.json())
    .then(data=>displayFood(data.meals))
    searchInput.value="";
}
document.getElementById('error').style.display ='none';
const displayFood =(foods) => {
  console.log(foods);
if(foods == null || foods.length == -1){
     document.getElementById('error').style.display ='block';
}
else{
    const cardRow =document.getElementById('display');

    foods.forEach(food => {
        const div = document.createElement('div');
          div.classList.add('col')
          div.innerHTML = `

            <div onclick="loadSingleFoodDetails(${food.idMeal})" class="card">
                <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${food.strMeal}</h5>
                  <p> class="card-text">${food.strInstructions.slice(0, 250)}...</p>
                  <button type="button" class="btn btn-outline-primary w-100">Show Details</button>
                </div>
              
            </div>
            `
 cardRow.appendChild(div);

  })
}




const loadSingleFoodDetails = (id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
     .then(res=> res.json())
     .then(data=>showFoodDetails(data.meals[0]))
}

const showFoodDetails=(food)=>{

    const detailsDiv =document.getElementById('details');
    detailsDiv.textContent =""
    const Div = document.createElement('div');
   
    Div.classList.add('col')
    Div.innerHTML = `

      <div onclick="loadSingleFoodDetails(${food.idMeal})" class="card">
          <img src="${food.strMealThumb}" class="img-top " alt="...">
          <div class="card-body">
            <h5 class="card-title">${food.strMeal}</h5>
            <p> class="card-text">${food.strInstructions}...</p>
            <button type="button" class="btn btn-outline-primary w-100">Go YouTube</button>
          </div>
        
      </div>
      `
      detailsDiv.appendChild(Div)
}}
