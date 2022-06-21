<template>
  <footer class="bg-white pb-6 dark:bg-gray-900 container mx-auto px-4">
    <hr class="border-gray-200 sm:mx-auto dark:border-gray-700" />
    <div class="pt-6 sm:flex sm:items-center sm:justify-between">
      <span
        class="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex justify-center"
      >
        © 2022 {{ '\xa0' }}
        <a
          href="https://baklai.github.io"
          target="_blank"
          rel="noopener noreferrer"
          title="Dmitrii Baklai"
          name="Dmitrii Baklai"
          class="text-gray-500 hover:text-primary-500 dark-hover:text-primary-500"
        >
          Dmitrii Baklai </a
        >{{ '\xa0' }}. All rights reserved.
      </span>
      <div
        class="flex mt-4 space-x-6 sm:justify-center sm:mt-0 flex justify-center"
      >
        <a
          href="https://www.facebook.com/dmitrii.baklai"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
          name="Facebook"
          class="text-gray-500 hover:text-primary-500 dark-hover:text-primary-500 ml-4"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        <a
          href="https://github.com/baklai"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
          name="Github"
          class="text-gray-500 hover:text-primary-500 dark-hover:text-primary-500 ml-4"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/dmitrii-baklai"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin"
          name="Linkedin"
          class="text-gray-500 hover:text-primary-500 dark-hover:text-primary-500 ml-4"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 50 50"
            width="24px"
            height="24px"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>

    <a href="#" class="totop" :class="show">
      <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M7.4,15.4L12,10.8L16.6,15.4L18,14L12,8L6,14L7.4,15.4Z"
        />
      </svg>
    </a>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      show: null
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(e) {
      if (typeof window === 'undefined') return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.show = top > 60 ? 'totop-visibility' : '';
    }
  }
};
</script>

<style scoped>
.totop {
  position: fixed;
  right: 20px;
  bottom: 20px;
  place-self: end;
  margin-top: 0;
  border: #333;
  text-decoration: none;
  padding: 10px;
  font-family: sans-serif;
  color: #fff;
  background: #00a2e9;
  border-radius: 100px;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 300ms, opacity 300ms;
}

.totop:hover {
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.totop-visibility {
  visibility: visible;
  opacity: 1;
  transition: visibility 0s linear 0s, opacity 300ms;
}
</style>
