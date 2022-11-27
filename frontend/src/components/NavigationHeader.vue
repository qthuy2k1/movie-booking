<template>
  <header id="header" class="container h-14 bg-black fixed top-0 left-0 z-50">
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
            placeholder="Nhập để tìm kiếm..."
            v-model="search"
            @keyup.enter="
              this.$router.push({ name: 'NowShowing', query: { search } })
            "
          />
          <span class="absolute right-2 top-1/2 -translate-y-1/2"
            ><i class="fa-solid fa-magnifying-glass text-xl"></i
          ></span>
        </div>
        <span class="text-white h-full relative py-2">
          <!-- Check that the SDK client is not currently loading before accessing is methods -->
          <div>
            <!-- show login when not authenticated -->
            <router-link v-if="!user" to="/sign-in" class="hover:text-red-400"
              >Đăng nhập
            </router-link>
            <div v-else class="pl-10 group">
              <div class="hover:text-red-400">
                Xin chào, {{ user.displayName }}
              </div>

              <ul
                class="w-44 h-100 absolute bg-white shadow-md text-black rounded-md z-50 right-0 hidden group-hover:block"
              >
                <li class="pt-3 pl-3 hover:text-red-400">
                  <router-link to="/user-profile"
                    >Thông tin tài khoản</router-link
                  >
                </li>
                <li class="pt-2 pl-3 hover:text-red-400">
                  <router-link to="/user-orders">Hóa đơn của tôi</router-link>
                </li>
                <li
                  class="pt-2 pb-3 pl-3 hover:text-red-400"
                  @click="signOut()"
                >
                  Đăng xuất
                </li>
              </ul>
            </div>
          </div>
        </span>
      </div>
    </nav>
  </header>
</template>

<script>
import { useUser } from "@/composables/useUser";
import { useSignOut } from "@/composables/useSignOut";
import { ref } from "vue";
export default {
  setup() {
    const { getUser } = useUser();
    const { error, signOut } = useSignOut();
    const { user } = getUser();
    const search = ref(null);

    function movieSearch(event, value) {
      if (event.code == "Enter") {
        console.log(value);
      }
    }

    return {
      user,
      error,
      signOut,
      movieSearch,
      search,
    };
  },
};
</script>
