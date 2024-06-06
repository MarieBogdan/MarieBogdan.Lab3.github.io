<template>

    <div class="mb-3">
      <label for="userName" class="form-label-username">Your Full Name</label>
      <input type="text" class="form-control" id="userName" required>
    </div>
    
      <h1>Recipes</h1>
      <ol id='olRecipe'></ol>
      <div class="container mt-5 pt-5">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <h3 class="mb-4">Create Recipe</h3>
            <form id="create-recipe-form">
              <div class="mb-3">
                <label for="recipeName" class="form-label">Recipe Name</label>
                <input type="text" class="form-control" id="recipeName" required>
              </div>
              <div class="mb-3">
                <label for="recipeSteps" class="form-label">Steps</label>
                <textarea class="form-control" id="recipeSteps" rows="5" required></textarea>
              </div>
              <div class="mb-3">
                <label for="recipeAuthor" class="form-label">Author</label>
                <input type="text" class="form-control" id="recipeAuthor" required>
              </div>
              <div class="mb-3">
                <label for="recipeCalories" class="form-label">Calories</label>
                <input type="number" class="form-control" id="recipeCalories" required>
              </div>
              <button type="submit" class="btn btn-primary">Submit Recipe</button>
            </form>
          </div>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      mounted() {
    
        
    
        document.getElementById("create-recipe-form").addEventListener("submit", this.handleSubmit.bind(this));
    
        const userName = prompt("Please enter your full name:");
        if (userName) {
          document.getElementById("userName").value = userName;
           this.readRecipes();
        } else {
          alert("Name is required to view recipes.");
        }
        
      },
      methods: {
        async handleSubmit(e) {
          e.preventDefault();
          const recipeName = document.getElementById("recipeName").value;
          const recipeSteps = document.getElementById("recipeSteps").value;
          const recipeAuthor = document.getElementById("recipeAuthor").value;
          const recipeCalories = document.getElementById("recipeCalories").value;
    
          const recipe = {
            Name: recipeName,
            Steps: recipeSteps,
            Author: recipeAuthor,
            Calories: recipeCalories
          };
    
          try {
            const response = await fetch("http://localhost:8080/recipes", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(recipe)
            });
    
            const result = await response.json();
            if (result.success) {
              alert("Recipe created successfully!");
              console.log("Calling readRecipes");
               await this.readRecipes();
            } else {
              alert("Error creating recipe: " + (result.error || "Unknown error"));
            }
          } catch (error) {
            alert("Error creating recipe: " + error.message);
          }
        },
        async readRecipes() {
          try {
            const olRecipe = document.getElementById("olRecipe");
            olRecipe.innerHTML = '';
            const userName = document.getElementById("userName").value;
            const response = await fetch(`http://localhost:8080/recipes?author=${userName}`, { method: "GET" });
            const recipes = await response.json();
    
            if (recipes.length === 0) {
              olRecipe.innerHTML = '<li>No recipes found</li>';
            } else {
            recipes.forEach(t => {
              const li = document.createElement("li");
              li.textContent = `${t.Name} by ${t.Author}`;
              li.id = t.Name;
              li.addEventListener("click", async (e) => {
                const jsonRequest = { Name: e.target.id };
                const result = await fetch("http://localhost:8080/recipes", {
                  method: "DELETE",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(jsonRequest)
                });
                const success = await result.json();
                if (success.success) {
                  alert("Deleted");
                  await this.readRecipes();
                }
              });
              olRecipe.appendChild(li);
            });
          }
          } catch (e) {
            console.log("Error reading recipes", e);
          }
        }
      }
    };
    </script>
    <style scoped>
          
    body {
    background-color: #00457E;
    }
    
    h1 {
        text-align: center;
        margin-top: 45px;
        font-family: 'Allura';
        font-size: 50px;
        color: #fff;
      }
    h3 {
    
        font-family: 'Allura';
        font-size: 60px;
        color: #fff;
      }
    .row {
        margin-top: 70px;
        padding: 50px;
        text-align: center;
        background-color:#02315E;
        color: white;
        box-shadow: 7px 7px 7px rgba(0, 0, 0, .3);
        border: 3px solid #806491; 
        margin-bottom: 10px;
    
      }
      ol{
              color: #fff;
              font-family: 'Courier New', monospace;
            }
    
    label{
        font-family: 'Courier New', monospace;
        
    }
    .form-label-username{
            color: #fff;
            font-family: 'Allura';
            font-size: 40px;
            margin-top: 45px;
          }
    .btn {
    cursor: pointer;
    outline: 0;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    background-color: #806491;
    border: 1px solid #806491;
    padding: 6px 12px;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    color: #ffffff;
    border-color: #ffffff;
    }
    .btn:hover {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
    }
    
    
    footer{
        background-color: #2F70AF;
        color:#fff;
        font-family: 'Oswald';
    }
    
    
    </style>