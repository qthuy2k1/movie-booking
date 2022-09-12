<template>
  <header id="header" class="container h-14 bg-black overflow-hidden">
    <nav class="flex items-center justify-between h-full max-w-7xl mx-auto">
      <ul
        class="flex items-center justify-between text-xl h-full text-white font-semibold flex-grow-2"
      >
        <li class="mr-8">
          <router-link class="hover:text-red-400" to="/">Home</router-link>
        </li>
        <li class="mr-8 hover:text-red">
          <router-link class="hover:text-red-400" to="/showing"
            >Phim đang chiếu</router-link
          >
        </li>
        <li class="mr-8 hover:text-red">
          <router-link class="hover:text-red-400" to="/coming"
            >Phim sắp chiếu</router-link
          >
        </li>
        <li class="mr-8 hover:text-red">
          <router-link class="hover:text-red-400" to="/about"
            >Về chúng tôi</router-link
          >
        </li>
      </ul>
      <div class="flex">
        <div class="relative mr-6 h-full">
          <input
            type="text"
            class="w-56 h-10 rounded-lg pl-4 pr-9"
            placeholder="Type here to search..."
          />
          <span class="absolute right-2 top-1/2 -translate-y-1/2"
            ><i class="fa-solid fa-magnifying-glass text-xl"></i
          ></span>
        </div>
        <span class="text-white h-full relative py-2">
          <a href="" class="hover:text-red-400">Đăng nhập </a>
        </span>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavigationHeader",
};
</script>

<style></style>
