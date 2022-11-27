<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Start Form -->
  <form action="" class="px-96 mt-28" @submit.prevent="onSubmit">
    <h1 class="text-3xl font-bold text-center mb-2">ĐĂNG KÝ</h1>
    <h3 class="text-center">
      Đã có tài khoản?
      <router-link
        class="text-blue-500 underline hover:cursor-pointer"
        to="/sign-in"
        >Đăng nhập ngay</router-link
      >
    </h3>
    <div class="mt-8">
      <div class="flex flex-col mt-2">
        <input
          class="rounded-lg px-4 py-3 placeholder:italic bg-gray-100 focus:border-0 focus:outline-0 focus:bg-white focus:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] mb-2"
          type="email"
          placeholder="Email"
          v-model="email"
          required
        />
      </div>

      <div class="flex flex-col mt-2">
        <input
          class="rounded-lg px-4 py-3 placeholder:italic bg-gray-100 focus:border-0 focus:outline-0 focus:bg-white focus:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] mb-2"
          type="text"
          placeholder="Tên người dùng"
          minlength="3"
          required
          v-model="fullname"
        />
      </div>

      <div class="flex flex-col mt-2">
        <input
          class="rounded-lg px-4 py-3 placeholder:italic bg-gray-100 focus:border-0 focus:outline-0 focus:bg-white focus:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] mb-2"
          type="text"
          placeholder="Số điện thoại"
          v-model="phoneNumber"
        />
      </div>

      <div class="flex flex-col mt-2">
        <input
          class="rounded-lg px-4 py-3 placeholder:italic bg-gray-100 focus:border-0 focus:outline-0 focus:bg-white focus:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] mb-2"
          type="password"
          placeholder="Mật khẩu"
          v-model="password"
          minlength="6"
          required
        />
      </div>

      <div class="flex justify-end">
        <button
          v-if="!isPending"
          type="submit"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-500"
        >
          Đăng ký
        </button>
        <button
          class="bg-gray-800 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-500 cursor-not-allowed"
          v-else
          disabled
        >
          Đang đăng ký...
        </button>
      </div>
    </div>
  </form>
  <!-- Start Error -->
  <div class="text-center mt-5">
    <span class="text-red-400" v-if="error"> {{ error }}</span>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSignUp } from "@/composables/useSignUp";
export default {
  setup() {
    const { error, isPending, signUp } = useSignUp();

    const router = useRouter();

    const email = ref("");
    const password = ref("");
    const fullname = ref("");
    const phoneNumber = ref("");

    async function onSubmit() {
      await signUp(email.value, password.value, fullname.value);
      if (!error.value) {
        router.push({ name: "HomePage", params: {} });
      }
    }

    return {
      fullname,
      email,
      password,
      phoneNumber,
      error,
      isPending,
      onSubmit,
    };
  },
};
</script>
