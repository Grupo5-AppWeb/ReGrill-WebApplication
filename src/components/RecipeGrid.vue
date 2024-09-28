<script>
import {RecetApiService} from "@/services/service/recet-api.service";
import {Recipe} from "@/services/model/recet.entity";

export default {
    data() {
        return {
            recipes: []
        };
    },
    methods: {
        addRecipe(index) {
            alert(`Añadir receta: ${this.recipes[index].name}`);
        },
        deleteRecipe(index) {
            alert(`Eliminar receta: ${this.recipes[index].name}`);
        }
    },

    async mounted() {
        const apiRecipeService = new RecetApiService();
        try {
            const response = await apiRecipeService.getAll();
            this.recipes = response.data.map(recipesData => Recipe.fromApiResponse(recipesData)); // Cambia a ShrinkageRecord
            console.log(this.recipes);
        } catch (error) {
            console.error('Error fetching shrinkage history:', error);
        }
    }
};
</script>

<template>
    <div class="container">
        <h1>Admi. Kitchen</h1>
        <h2>Recetas</h2>
        <button @click="addRecipe(index)" class="action-button">Añadir receta</button>
        <button @click="deleteRecipe(index)" class="action-button">Eliminar receta</button>
        <div class="recipe-grid">
            <div v-for="(recipe, index) in recipes" :key="index" class="recipe-card">
                <router-link :to="{ path: '/recipeView', query: { id: recipe.id } }">
                    <img :src="recipe.image" :alt="recipe.name" class="recipe-image" />
                </router-link>
                <h3>{{ recipe.name }}</h3>

            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    text-align: center;
    padding: 20px;
}

.recipe-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 20px;
}

.recipe-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
}

.recipe-image {
    max-width: 100%; /* Asegura que la imagen no desborde */
    height: 320px;
    width: auto;
    border-radius: 8px;
    cursor: pointer;
}

.action-button {
    margin-top: 10px;
    padding: 8px 16px;
    border: none;
    background-color: #FF7300;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}

.action-button:hover {
    background-color: #FF7300;
}

/* Responsividad para tabletas */
@media (max-width: 768px) {
    .recipe-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Responsividad para móviles */
@media (max-width: 480px) {
    .recipe-grid {
        grid-template-columns: repeat(1, 1fr);
    }

    .recipe-card {
        padding: 12px; /* Reduce el padding en pantallas pequeñas */
    }

    .action-button {
        padding: 6px 12px; /* Botones más pequeños en pantallas pequeñas */
    }
}
</style>
