import http from '../../shared/http-common';

export class ShrinkageHistoryApiService {
    getAll() {
        return http.get("/shrinkageHistory");

    }

}
