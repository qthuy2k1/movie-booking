import { projectAuth } from "@/configs/firebase";
import { ref } from "vue";

const error = ref(null);
const isPending = ref(false);

async function signUp(email, password, fullname) {
  isPending.value = true;
  error.value = null;
  try {
    const response = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!response) {
      throw new Error("Could not create a new user.");
    }
    await response.user.updateProfile({
      displayName: fullname,
    });
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, signUp };
}
