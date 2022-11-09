<template>
  <div class="mt-28">
    <h1 class="font-bold text-2xl uppercase text-center">
      Thông tin tài khoản
    </h1>
    <div class="grid grid-cols-6 gap-10">
      <user-dashboard dashboard="profile" />
      <div class="col-span-5">
        <form>
          <span class="text-red-400">{{ msg }}</span>
          <div class="mt-4">
            <div class="flex flex-col mt-2">
              <label class="font-bold" for="">Email</label>
              <input
                class="rounded-lg px-4 py-3 placeholder:italic bg-gray-100 focus:border-0 focus:outline-0 focus:bg-white focus:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] mb-2 cursor-not-allowed"
                type="email"
                id="email"
                :value="user.email"
                disabled
              />
            </div>

            <div class="flex flex-col mt-2">
              <label class="font-bold" for="fullname">Tên người dùng</label>
              <input
                class="rounded-lg px-4 py-3 placeholder:italic bg-gray-100 focus:border-0 focus:outline-0 focus:bg-white focus:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] mb-2 placeholder:text-gray-400 focus:placeholder:text-gray-500"
                type="text"
                id="fullname"
                :placeholder="
                  user.displayName ? user.displayName : 'Nhập tên người dùng'
                "
                v-model="fullname"
              />
            </div>

            <div class="flex flex-col mt-2">
              <label class="font-bold" for="phoneNumber">Số điện thoại</label>
              <input
                class="rounded-lg px-4 py-3 placeholder:italic bg-gray-100 focus:border-0 focus:outline-0 focus:bg-white focus:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] mb-2 placeholder:text-gray-400 focus:placeholder:text-gray-500"
                type="text"
                id="phoneNumber"
                :placeholder="
                  user.phoneNumber ? user.phoneNumber : 'Nhập số điện thoại'
                "
                v-model="phoneNumber"
              />
            </div>

            <div class="flex justify-end">
              <div
                class="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600"
                @click="updateUserProfile(fullname, phoneNumber)"
              >
                Lưu
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useUser } from "@/composables/useUser";
import UserDashboard from "@/components/UserDashboard.vue";
export default {
  components: {
    UserDashboard,
  },
  setup() {
    const { msg, getUser, updateUserProfile } = useUser();

    const { user } = getUser();
    const fullname = ref(user.value.displayName);
    const phoneNumber = ref(user.value.phoneNumber);

    return {
      user,
      fullname,
      phoneNumber,
      msg,
      updateUserProfile,
    };
  },
};
</script>
