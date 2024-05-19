<template>
    <div class="salary-calculation">
        <p>一か月あたり {{ month }}</p>
        <p>一日あたり {{ perDay }}</p>

        <table>
            <thead>
                <tr>
                    <th>現在</th>
                    <th>残り</th>
                    <th>支給</th>
                    <th>再就職手当</th>
                    <th>合計</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in results" :key="item.currentDay">
                    <td>{{ item.currentDay }}</td>
                    <td>{{ item.daysRemaining }}</td>
                    <td>{{ item.salary }}</td>
                    <td>{{ item.bonus }}</td>
                    <td>{{ item.total }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
    setup() {
        const salary = 1070000;
        const days = 180;
        const month = computed(() => salary / 30);
        const perDay = computed(() => salary / days);

        const results = Array.from({ length: days + 1 }, (_, currentDay) => {
            const daysRemaining = days - currentDay;
            let bonus = 0;

            if (daysRemaining >= (days * 2) / 3) {
                bonus = daysRemaining * perDay.value * 0.7;
            } else if (daysRemaining >= days / 3) {
                bonus = daysRemaining * perDay.value * 0.6;
            }

            return {
                currentDay,
                daysRemaining,
                salary: (currentDay * perDay.value).toFixed(0),
                bonus: bonus.toFixed(0),
                total: (currentDay * perDay.value + bonus).toFixed(0),
            };
        });

        return {
            month,
            perDay,
            results,
        };
    },
});
</script>

<style scoped>
.salary-calculation {
    margin: 20px;
}

.salary-calculation p {
    font-size: 0.6em;
    margin-bottom: 2px;
}

.salary-calculation table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 4px;
}

.salary-calculation th,
.salary-calculation td {
    border: 1px solid #ddd;
    padding: 2px;
    text-align: center;
}

.salary-calculation th {
    background-color: #f2f2f2;
    font-weight: bold;
}

.salary-calculation tr:nth-child(even) {
    background-color: #f9f9f9;
}

.salary-calculation tr:hover {
    background-color: #ddd;
}
</style>
