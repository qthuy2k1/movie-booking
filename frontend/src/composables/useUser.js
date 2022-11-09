import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const user = ref(projectAuth.currentUser);

const msg = ref(null);

projectAuth.onAuthStateChanged((_user) => {
  if (_user) user.value = _user;
});

function getUser() {
  return { user };
}

async function updateUserProfile(fullname) {
  msg.value = null;
  try {
    await projectAuth.currentUser.updateProfile({ displayName: fullname });

    console.log(projectAuth.currentUser);
    msg.value = "Cập nhật hồ sơ thành công";
  } catch (err) {
    console.log(err);
    msg.value = err.message;
  }
}

export function useUser() {
  return { msg, getUser, updateUserProfile };
}
