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

    await fetch(`http://localhost:3000/api/roles/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id: response.user.uid,
        displayName: response.user.displayName,
        email: response.user.email,
        role: "user",
      }),
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
