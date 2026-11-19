import { ref, toValue, watchEffect } from "vue";

export async function fetchCall(url: Ref | string) {
  const data = ref(null);
  const error:any = ref(null);
  console.log("url", toValue(url));
  watchEffect(async () => {
		data.value = null
		error.value = null
		try {
    	const res = await fetch(toValue(url))
	    data.value = await res.json()
			console.log("data", data.value![0]);
			console.log("error: ", error.value);
    } catch (e: unknown) {
      error.value = e
    }
  });

  return { data, error };
}
