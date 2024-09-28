<script>
export default {
    data() {
        return {
            recipes: [
                { name: "Pulpo a la gallega", image: "path_to_image1.jpg" },
                { name: "Cordero Ahumado", image: "path_to_image2.jpg" },
                { name: "Risotto de camarones", image: "path_to_image3.jpg" },
                { name: "Cordero al ajo", image: "path_to_image4.jpg" },
                { name: "Noche sangrienta", image: "path_to_image5.jpg" },
                { name: "Primavera del 93'", image: "path_to_image6.jpg" },
                { name: "Minicheesecakes con mermelada", image: "path_to_image7.jpg" },
                { name: "Mouse de chocolate blanco", image: "path_to_image8.jpg" }
            ]
        };
    },
    methods: {
        addRecipe(index) {
            alert(`Añadir receta: ${this.recipes[index].name}`);
        },
        deleteRecipe(index) {
            alert(`Eliminar receta: ${this.recipes[index].name}`);
        }
    }
};
</script>

<template>
    <div class="container">
        <h1>Admi. Kitchen</h1>
        <h2>Recetas</h2>

        <div class="recipe-grid">
            <div v-for="(recipe, index) in recipes" :key="index" class="recipe-card">
                <img :src="recipe.image" :alt="recipe.name" class="recipe-image" />
                <h3>{{ recipe.name }}</h3>
                <button @click="addRecipe(index)" class="action-button">Añadir receta</button>
                <button @click="deleteRecipe(index)" class="action-button">Eliminar receta</button>
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
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.action-button {
    margin-top: 10px;
    padding: 8px 16px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}

.action-button:hover {
    background-color: #0056b3;
}

@media (max-width: 768px) {
    .recipe-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .recipe-grid {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
