import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const style = {
  postcss: {
    plugins: [
      tailwindcss('./tailwind.config.js'),
      autoprefixer,
    ],
  },
};

export default style;
