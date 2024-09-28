import http from '../../shared/http-common';

export class UsersApiService {
    getAll() {
        return http.get(`/users`);
    }

    create(data) {
        return http.post(`/users`, data);
    }
}
