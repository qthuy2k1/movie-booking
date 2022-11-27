<template>
  <div class="grid grid-cols-6">
    <div class="col-span-1 bg-slate-500 text-white h-screen">
      <suspense>
        <admin-sidebar dashboard="orders" />
      </suspense>
    </div>
    <div class="col-span-5">
      <div class="container p-10 overflow-x-hidden">
        <div class="flex justify-between items-center mb-2">
          <h1 class="font-bold text-xl">Quản lý hóa đơn</h1>
          <router-link
            class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md"
            :to="{ name: 'OrdersPaid' }"
          >
            Xem hóa đơn đã thanh toán
          </router-link>
        </div>
        <div class="text-bold text-red-400" v-if="msg">{{ msg }}</div>
        <div class="relative mb-2">
          <table class="w-full text-left">
            <thead class="font-bold text-gray-700 uppercase bg-gray-50">
              <tr>
                <th class="py-3 px-6">Tên phim</th>
                <th></th>
                <th class="py-3 px-6">Tên rạp</th>
                <th class="py-3 px-6">Thời gian chiếu</th>
                <th class="py-3 px-6">Ghế</th>
                <th class="py-3 px-6">Giá tiền</th>
                <th class="py-3 px-6">Tên người đặt</th>
                <th class="py-3 px-6">Trạng thái</th>
                <th class="py-3 px-6">Thời gian tạo</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(order, index) in orders"
                :key="order._id"
                class="bg-white border-b"
              >
                <td colspan="2" class="py-4 px-6 font-bold text-gray-900">
                  {{ order.MovieTitle }}
                </td>
                <td class="py-4 px-6 font-bold text-gray-900">
                  {{ order.CinemaName }}
                </td>
                <td class="py-4 px-6 text-gray-900">
                  {{ order.Date + " " + order.Time }}
                </td>
                <td class="py-4 px-6">
                  <span
                    v-for="(seatnumber, index) in order.SeatNumber"
                    :key="index"
                    >{{ seatnumber }},
                  </span>
                </td>
                <td class="py-4 px-6 font-bold text-gray-900">
                  {{
                    new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(order.Price)
                  }}
                </td>
                <td class="py-4 px-6 font-bold text-gray-900">
                  {{ order.userDisplayName }}
                </td>
                <td
                  class="py-4 px-6 font-bold"
                  :class="
                    order.Status == 'Đã thanh toán'
                      ? 'text-red-400'
                      : 'text-gray-900'
                  "
                >
                  {{ order.Status }}
                </td>
                <td class="py-4 px-6 text-gray-900">
                  {{ moment(order.createdAt).format("HH:mm:ss YYYY-MM-DD") }}
                </td>
                <td class="py-4 px-6">
                  <button @click.prevent="confirmOrder(order._id, index)">
                    <i
                      class="fa-solid fa-check text-xl text-white rounded-sm px-1 bg-green-500 hover:bg-green-400"
                    ></i>
                  </button>
                  <button
                    class="mt-3"
                    @click.prevent="removeOrder(order._id, index)"
                  >
                    <i
                      class="fa-solid fa-trash-can text-xl text-white rounded-sm px-1 bg-red-500 hover:bg-red-400"
                    ></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar.vue";
import { ref } from "vue";
import moment from "moment";
export default {
  components: {
    AdminSidebar,
  },
  setup() {
    const orders = ref([]);
    const userDisplayName = ref([]);
    const msg = ref(null);

    fetch(`http://localhost:3000/api/orders`)
      .then((response) => response.json())
      .then((data) => (orders.value = data))
      .then(() => {
        orders.value = orders.value.filter((order) => {
          return order.Status == "Chưa thanh toán";
        });
      });

    fetch(`http://localhost:3000/api/roles`)
      .then((response) => response.json())
      .then((data) => {
        orders.value.forEach((order) => {
          data.forEach((d) => {
            if (order.UserID == d._id) {
              Object.assign(order, { userDisplayName: d.displayName });
            }
          });
        });
      });

    async function confirmOrder(orderId, index) {
      try {
        await fetch(`http://localhost:3000/api/orders/${orderId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Status: "Đã thanh toán",
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            orders.value.splice(index, 1);
            msg.value = "Xác nhận hóa đơn thành công";
          });
      } catch (error) {
        msg.value = error.message;
      }
    }

    async function removeOrder(orderId, index) {
      try {
        await fetch(`http://localhost:3000/api/orders/${orderId}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then(() => {
            orders.value.splice(index, 1);
            msg.value = "Xóa hóa đơn thành công";
          });
      } catch (err) {
        msg.value = err.message;
      }
    }

    return {
      orders,
      userDisplayName,
      confirmOrder,
      msg,
      moment,
      removeOrder,
    };
  },
};
</script>
