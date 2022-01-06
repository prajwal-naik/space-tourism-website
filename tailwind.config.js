module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "home":"url('/assets/home/background-home-desktop.jpg')",
        "crew" :"url('/assets/crew/background-crew-desktop.jpg')",
        "destination":"url('/assets/destination/background-destination-desktop.jpg')",
        "technology":"url('/assets/technology/background-technology-desktop.jpg')",
        "douglas": "url('/assets/crew/image-douglas-hurley.png')",
        "mark":"url('/assets/crew/image-mark-shuttleworth.png')",
        "anoushe":"url('/assets/crew/image-anousheh-ansari.png')",
        "victor":"url('/assets/crew/image-victor-glover.png')",
        "launch":"url('/assets/technology/image-launch-vehicle-portrait.jpg')",
        "spaceport":"url('/assets/technology/image-spaceport-portrait.jpg')",
        "space":"url('/assets/technology/image-space-capsule-portrait.jpg')",
        
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}
