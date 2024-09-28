import http from '../../shared/http-common';

export class RecetApiService {
    getAll() {
        return http.get("/recipes");
    }
    create(data) {
        return http.post(`/recipes`, data);
    }

    getRecipeById(id) {
        return http.get(`/recipes/${id}`);
    }
}
