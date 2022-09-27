<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <form action="" class="px-96">
    <h1 class="text-3xl font-bold text-center mb-2">ĐĂNG NHẬP</h1>
    <h3 class="text-center">
      Chưa có tài khoản?
      <router-link
        class="text-blue-500 underline hover:cursor-pointer"
        to="/sign-up"
        >Đăng ký ngay</router-link
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
          class="rounded-lg px-4 py-3 placeholder:italic bg-gray-100 focus:border-0 focus:outline-0 focus:bg-white focus:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]"
          type="password"
          placeholder="Mật khẩu"
        />
      </div>

      <div class="flex items-center justify-between mt-2">
        <div>
          <input type="checkbox" name="" id="remember" class="mr-1" />
          <label for="remember">Nhớ tài khoản</label>
        </div>
        <div>
          <a href="#" class="text-blue-500 hover:text-red-500"
            >Quên mật khẩu?</a
          >
        </div>
      </div>

      <div class="flex justify-end">
        <button
          type="submit"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-500"
        >
          Đăng nhập
        </button>
      </div>
    </div>
  </form>
</template>
