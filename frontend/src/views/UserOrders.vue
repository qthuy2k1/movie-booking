<template>
  <div class="mt-28">
    <h1 class="font-bold text-2xl uppercase text-center">Hóa đơn của bạn</h1>
    <span class="text-blue-400 font-semibold" v-if="msg">{{ msg }}</span>
    <div class="grid grid-cols-6 gap-10">
      <user-dashboard dashboard="orders" />
      <table class="col-span-5 mt-4 w-full text-left">
        <thead class="text-left bg-gray-300">
          <tr>
            <th>Thời gian mua</th>
            <th>Phòng chiếu</th>
            <th>Tên phim</th>
            <th>Thời gian chiếu</th>
            <th>Ghế</th>
            <th>Tổng tiền</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="userOrder in userOrders" :key="userOrder._id">
            <td>{{ userOrder.createdAt }}</td>
            <td>{{ userOrder.CinemaName }}</td>
            <td>{{ userOrder.MovieTitle }}</td>
            <td>{{ userOrder.Time }} {{ userOrder.Date }}</td>
            <td>
              <span v-for="seat in userOrder.SeatNumber" :key="seat"
                >{{ seat }},
              </span>
            </td>
            <td>
              {{
                new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(userOrder.Price)
              }}
            </td>
            <td
              :class="
                userOrder.Status == 'Chưa thanh toán'
                  ? 'text-red-400'
                  : 'font-bold'
              "
            >
              {{ userOrder.Status }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import UserDashboard from "@/components/UserDashboard.vue";
import { useUser } from "@/composables/useUser";
import { ref } from "vue";
import { useRoute } from "vue-router";
import moment from "moment";
export default {
  components: {
    UserDashboard,
  },
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();

    const route = useRoute();

    console.log(route.params.msg);

    const msg = ref(null);

    const userOrders = ref([]);

    fetch(`http://localhost:3000/api/orders`)
      .then((response) => response.json())
      .then((orders) => {
        orders.forEach((order) => {
          if (order.UserID == user.value.uid) {
            order.createdAt = moment(order.createdAt).format(
              "HH:mm:ss YYYY-MM-DD"
            );
            userOrders.value.push(order);
          }
        });
      });

    return {
      msg,
      userOrders,
    };
  },
};
</script>

<style>
td {
  padding: 4px 6px;
}
th {
  padding: 3px 6px;
}

tr {
  border-bottom-width: 1px;
}
</style>
