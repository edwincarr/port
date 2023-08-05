import { ref, watch } from 'vue';

export const isDarkMode = ref(false);

watch(isDarkMode, (newValue) => {
  document.body.style.backgroundColor = newValue ? '#1a1a1a' : '#ede7de';
})

export const toggleDarkMode = () => {
  if (isDarkMode.value) {
    localStorage.theme = 'light';
    isDarkMode.value = false;
  } else {
    localStorage.theme = 'dark';
    isDarkMode.value = true;
  }
}
