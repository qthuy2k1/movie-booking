<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <form action="" class="px-96 mt-28">
    <h1 class="text-3xl font-bold text-center mb-2">ĐĂNG KÍ</h1>
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
        />
      </div>

      <div class="flex flex-col mt-2">
        <input
          class="rounded-lg px-4 py-3 placeholder:italic bg-gray-100 focus:border-0 focus:outline-0 focus:bg-white focus:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] mb-2"
          type="text"
          placeholder="Tên người dùng"
        />
      </div>

      <div class="flex flex-col mt-2">
        <input
          class="rounded-lg px-4 py-3 placeholder:italic bg-gray-100 focus:border-0 focus:outline-0 focus:bg-white focus:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] mb-2"
          type="text"
          placeholder="Số điện thoại"
        />
      </div>

      <div class="flex flex-col mt-2">
        <input
          class="rounded-lg px-4 py-3 placeholder:italic bg-gray-100 focus:border-0 focus:outline-0 focus:bg-white focus:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] mb-2"
          type="password"
          placeholder="Mật khẩu"
        />
      </div>

      <div class="flex flex-col mt-2">
        <input
          class="rounded-lg px-4 py-3 placeholder:italic bg-gray-100 focus:border-0 focus:outline-0 focus:bg-white focus:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]"
          type="password"
          placeholder="Nhập lại mật khẩu"
        />
      </div>

      <div class="flex justify-end">
        <button
          type="submit"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-500"
        >
          Đăng kí
        </button>
      </div>
    </div>
  </form>
</template>
