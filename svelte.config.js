import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess"; 

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    scss: {
      // your scss options here, if any
    }
  }),

  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === "production" ? "/portfolio" : "",
    },
  },
};

export default config;
