import { projectAuth } from "@/configs/firebase";
import { ref } from "vue";

const error = ref(null);
const isPending = ref(false);

async function signIn(email, password) {
  error.value = null;
  isPending.value = true;
  try {
    await projectAuth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignIn() {
  return { error, isPending, signIn };
}
