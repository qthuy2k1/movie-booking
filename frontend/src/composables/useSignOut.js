import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);

async function signOut() {
  error.value = null;
  try {
    const response = await projectAuth.signOut();
    location.reload();
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
}

export function useSignOut() {
  return { error, signOut };
}
