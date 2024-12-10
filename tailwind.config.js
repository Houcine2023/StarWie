/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#772583",
        "light-grey": "#f4f4f4",
        "bluee": "#002855",
      },
      backgroundImage: {
        'community': "url('/Cmominity.jpg')",
        'teachers': "url('/Teacherrs.jpg')",
        'lessons': "url('/lessonsplans1.jpg')",
        'cover': "url('/lessoncover.JPG')",
        'games': "url('/games2.jpg')",
        'logo' : "url('/SiteLogo.svg')",
        'Stem' : "url('/Robtics.jpg')",
        'stem' : "url('/Robtics.jpg')"
      },
      transform: {
        'translate-y-full': "translateY(100%)",
        'translate-y-0': "translateY(0)",
      },
      transitionProperty: {
        transform: "transform",
      },
      transitionDuration: {
        300: "300ms",
      },
    },
  },
  plugins: [],
};
