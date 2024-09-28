export class ShrinkageRecord {
    constructor(date = '', ingredient = '', lostQuantity = '', reason = '', productionCost = '') {
        this.date = date;
        this.ingredient = ingredient;
        this.lostQuantity = lostQuantity;
        this.reason = reason;
        this.productionCost = productionCost;
    }

    static fromApiResponse(apiData) {
        return new ShrinkageRecord(
            apiData.date,
            apiData.ingredient,
            apiData.lostQuantity,
            apiData.reason,
            apiData.productionCost
        );
    }
}
