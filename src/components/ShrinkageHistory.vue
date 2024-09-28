<template>
    <div>
        <h2>Shrinkage History</h2>
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Ingredient</th>
                <th>Lost Quantity</th>
                <th>Reason</th>
                <th>Production Cost</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in shrinkageHistory" :key="item.date">
                <td>{{ item.date }}</td>
                <td>{{ item.ingredient }}</td>
                <td>{{ item.lostQuantity }}</td>
                <td>{{ item.reason }}</td>
                <td>{{ item.productionCost }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {ShrinkageHistoryApiService} from "@/restaurant/service/merma-api.service";
import {ShrinkageRecord} from "@/restaurant/model/merma.entity";

export default {
    data() {
        return {
            shrinkageHistory: []
        };
    },

    async mounted() {
        const apiShrinkageService = new ShrinkageHistoryApiService();
        try {
            const response = await apiShrinkageService.getAll();
            this.shrinkageHistory = response.data.map(ShrinkageData => ShrinkageRecord.fromApiResponse(ShrinkageData)); // Cambia a ShrinkageRecord
            console.log(this.shrinkageHistory);
        } catch (error) {
            console.error('Error fetching shrinkage history:', error);
        }
    }

};
</script>

<style scoped>
h2 {
    color: #42b983;
}
table {
    width: 100%;
    border-collapse: collapse;
}
th, td {
    border: 1px solid #ddd;
    padding: 8px;
}
th {
    background-color: #f2f2f2;
}
</style>


