let gstarPath = "/images/gstar/";
let desperadosPath = "/images/desperados/";
let vidatePath = "/images/vidate/";
let disneyPath = "/images/disney/";

export let projects = [
  {
    name: "Desperados Dance Club",
    shortName: "Desperados",
    category: "Application",
    year: "2023",
    description: `An app created for Desperados, and a succesor of the original 
        'Rave to Save' project. Imagine this: you're at an event, phone in hand, 
        grooving to the beat. With our app running, every move you make racks up steps. 
        But here's where it gets interesting. Hit certain step goals and you're in for 
        a treat — free beer and other event goodies. Plus, you can dance for a cause,
        turning those steps into donations, all on Desperados' tab. It's not
        just an app; it's a party with a purpose. We've taken fundraising to a
        whole new level, making giving back as fun as hitting the dance floor.
        Get ready to dance, donate, and make a difference, all with a swipe
        and a shimmy.`,
    link: "https://wearepi.com/project/desperados-dance-club",
    appStoreLink:
      "https://apps.apple.com/nl/app/desperados-dance-club/id1553438452",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.heineken.ravetosave&hl=en&gl=US",
    websiteLink: "",
    appIcon: {
      src: desperadosPath + "app-icon.jpg",
      alt: "Desperados App Icon",
    },
    skills: ["Flutter", "JavaScript", "Dart"],
    images: [
      {
        src: desperadosPath + "we-are-pi-desperados-1.jpg",
        alt: "Desperados Wall",
      },
      {
        src: desperadosPath + "we-are-pi-desperados-2.jpg",
        alt: "Desperados Party 1",
      },
      {
        src: desperadosPath + "we-are-pi-desperados-3.jpg",
        alt: "Desperados Party 2",
      },
    ],
    previewImage: {
      src: desperadosPath + "we-are-pi-desperados-preview.jpg",
      alt: "G-Star preview",
    },
    route: "desperados",
  },
  {
    name: "Cuisinons en Famille",
    shortName: "Disney",
    category: "Web Application",
    year: "2023",
    description: `A web application created for a special campaign commemorating Disney's 100th
        anniversary. Dive into a world where you collect cards, each offering a unique
        experience. The ultimate goal is to collect all cards and complete your
        digital collection! The cards are categorised into two types: A and B. A cards
        feature recipes while B cards showcase beloved Disney characters. Collecting
        recipe cards unlocks not only culinary secrets but also cooking tutorials for
        your digital cookbook. Capture your culinary creations with photos and
        embellish them with stickers, earned by collecting both character and recipe
        cards. Every recipe comes with step-by-step guidance, fostering quality family
        time in the kitchen. The ultimate goal of this web application (and campaign)
        is to bring family together and cook together with family.
        
        Note: Web Application is in French.`,
    link: "https://www.brandloyalty.com/en/make-every-mealtime-magical-with-disney-carrefour",
    appStoreLink: "",
    playStoreLink: "",
    websiteLink: "https://cuisinonsenfamille.carrefour.fr/",
    appIcon: {
      src: "",
      alt: "",
    },
    skills: ["Typescript", "Javascript", "CSS", "ZIMjs"],
    images: [
      {
        src: disneyPath + "disney-food-lovers-1.jpg",
        alt: "Disney Food Lovers 1",
      },
      {
        src: disneyPath + "disney-food-lovers-2.jpg",
        alt: "Disney Food Lovers 2",
      },
    ],
    previewImage: {
      src: disneyPath + "disney-food-lovers-preview.jpg",
      alt: "Disney Food Lovers preview",
    },
    route: "disney",
  },
  {
    name: "Vidate",
    shortName: "Vidate",
    category: "Application",
    year: "2022",
    description: `      This is a dating app with a unique twist. Instead of scrolling
      through carefully curated profiles and staged photos, in this app, you'll
      skip straight to the real deal: video calls. When you're matched with
      someone, you'll have the opportunity to schedule a video call. It's a
      chance to see and interact with your match in real-time, allowing you to
      gauge chemistry and connection firsthand. If the video call goes well, you
      can then decide whether to take things to the next level and exchange
      phone numbers. It's a more authentic and efficient way to find meaningful
      connections in the digital age.`,
    link: "https://www.youtube.com/watch?v=VYgpnTof-q4&t=1s",
    appStoreLink: "",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=app.vidate.vidate&hl=en&gl=US",
    websiteLink: "",
    appIcon: {
      src: vidatePath + "app-icon.png",
      alt: "Vidate App Icon",
    },
    skills: ["Unity", "C#"],
    images: [
      {
        src: vidatePath + "vidate-1.jpg",
        alt: "Vidate",
      },
      {
        src: vidatePath + "vidate-2.jpg",
        alt: "Vidate",
      },
      {
        src: vidatePath + "vidate-3.jpg",
        alt: "Vidate",
      },
      {
        src: vidatePath + "vidate-4.jpg",
        alt: "Vidate",
      },
    ],
    previewImage: {
      src: vidatePath + "vidate-4.jpg",
      alt: "Vidate preview",
    },
    route: "vidate",
  },
  {
    name: "G-Star Certified Tailors",
    shortName: "G-star",
    category: "Website",
    year: "2021",
    description: `This is my first ever website and I had the priviledge to create one
        for G-Star. The website serves as the digital cornerstone for their
        pioneering campaign, 'G-Star Certified Tailors.' This initiative is
        driven by a commitment to sustainability, urging customers to choose
        repair over replacement for their denim.By really getting behind this
        idea, G-Star aims to significantly reduce waste and encourage a more
        sustainable fashion cycle. Located across the Netherlands, G-Star
        Certified Tailors are skilled artisans ready to breathe new life into
        your beloved jeans. The website I created not only connects customers
        with these expert tailors but does so through an engaging,
        user-friendly platform. Key features include a stylishly integrated
        Google Maps for effortlessly locating tailors, alongside a dynamic
        parallax carousel that adds a layer of depth and engagement to the
        browsing experience. These creative elements ensure the website not
        only functions smoothly but also captivates and inspires visitors with
        its design.`,
    link: "",
    appStoreLink: "",
    playStoreLink: "",
    websiteLink: "https://www.g-star.com/en_nl/certified-tailors",
    appIcon: {
      src: "",
      alt: "",
    },
    skills: ["JavaScript", "Svelte", "CSS", "HTML"],
    images: [
      {
        src: gstarPath + "g-star-certified-tailors-1.jpg",
        alt: "G-Star Example 1",
      },
    ],
    previewImage: {
      src: gstarPath + "g-star-certified-tailors-preview.jpg",
      alt: "G-Star preview",
    },
    route: "gstar",
  },
];
