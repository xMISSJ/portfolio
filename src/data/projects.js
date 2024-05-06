import { categories } from "../constants/categories";

let gstarPath = "/images/gstar/";
let desperadosPath = "/images/desperados/";
let bloemenBureauPath = "/images/bloemenbureau/";
let vidatePath = "/images/vidate/";
let disneyPath = "/images/disney/";

export let projects = [
  {
    name: "Desperados Dance Club",
    shortName: "Desperados DC",
    category: categories.APPLICATION,
    year: 2023,
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
    links: ["https://wearepi.com/project/desperados-dance-club"],
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
        src: desperadosPath + "desperados-dance-club-1.jpg",
        alt: "Desperados Wall",
      },
      {
        src: desperadosPath + "desperados-dance-club-2.jpg",
        alt: "Desperados Party 1",
      },
      {
        src: desperadosPath + "desperados-dance-club-3.jpg",
        alt: "Desperados Party 2",
      },
    ],
    previewImage: {
      src: desperadosPath + "desperados-dance-club-preview.jpg",
      alt: "G-Star preview",
    },
    route: "desperados-dance-club",
  },
  {
    name: "Cuisinons en Famille",
    shortName: "Disney",
    category: categories.WEB_APPLICATION,
    year: 2023,
    description: `A web application created for a special campaign commemorating Disney's
        100th anniversary. In the app, the ultimate goal is to collect all
        cards and complete the digital collection! The cards are categorised
        into two types: A and B. A cards feature recipes while B cards showcase
        Disney characters. Collecting recipe cards unlocks not only culinary
        secrets but also cooking tutorials for your digital cookbook. The
        user can take pictures of their culinary creations and decorate them
        with stickers, earned by collecting both character and recipe cards.
        <br/><br/>
        Note: Web Application is in French.`,
    links: [
      "https://www.brandloyalty.com/en/make-every-mealtime-magical-with-disney-carrefour",
      "https://www.linkedin.com/posts/brandloyalty_make-every-meal-time-magical-with-disney-activity-7033699336999858176-qz4S/?originalSubdomain=nl",
    ],
    appStoreLink: "",
    playStoreLink: "",
    websiteLink: "https://cuisinonsenfamille.carrefour.fr/",
    appIcon: {
      src: disneyPath + "/app-icon.jpg",
      alt: "Web Application Icon",
    },
    skills: ["Javascript", "Typescript", "CSS", "ZIMjs"],
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
    route: "disney-cuisinons-en-famille",
  },
  {
    name: "Bloemenbureau Botanical Wonders",
    shortName: "Bloemenbureau",
    category: categories.WEB_APPLICATION,
    year: 2023,
    description: `Bloemenbureau Holland gave my team and I the opportunity to create the 'Botanical
        Wonders' web application, designed to unveil the uplifting influence of flowers
        and plants through Augmented Reality (AR). This engaging platform allows users
        to experience the enchanting growth and bloom of flora right in their own surroundings.
        Their mission is to inspire and educate about the crucial role flowers and plants
        play not just in beautifying our environments, but also in enhancing our health
        and well-being. The Botanical Wonders experience offers users a unique opportunity
        to witness the positive effects of plants and flowers on mood and understand their
        indispensable value in our lives. Join us in exploring how these natural wonders
        can transform everyday spaces into places of beauty and tranquility.`,
    links: [
      "https://www.bloemenbureauholland.nl/campagne/mood-garden-amsterdam-laat-consument-bloemen-en-planten-echt-ervaren",
    ],
    appStoreLink: "",
    playStoreLink: "",
    websiteLink: "http://botanicalwonders.online/",
    appIcon: { src: "", alt: "" },
    skills: ["JavaScript", "Svelte", "HTML", "CSS"],
    images: [
      {
        src: bloemenBureauPath + "bloemenbureau-botanical-wonders-1.jpg",
        alt: "Bloemen Bureau Showcase 1",
      },
      {
        src: bloemenBureauPath + "bloemenbureau-botanical-wonders-2.jpg",
        alt: "Bloemen Bureau Showcase 2",
      },
      {
        src: bloemenBureauPath + "bloemenbureau-botanical-wonders-3.jpg",
        alt: "Bloemen Bureau Showcase 3",
      },
      {
        src: bloemenBureauPath + "bloemenbureau-botanical-wonders-4.jpg",
        alt: "Bloemen Bureau Showcase 4",
      },
      {
        src: bloemenBureauPath + "bloemenbureau-botanical-wonders-5.jpg",
        alt: "Bloemen Bureau Showcase 5",
      },
    ],
    previewImage: {
      src: bloemenBureauPath + "bloemenbureau-qr-3.jpg",
      alt: "Bloemen Bureau Preview",
    },
    route: "bloemenbureau-botanical-wonders",
  },
  {
    name: "Vidate",
    shortName: "Vidate",
    category: categories.APPLICATION,
    year: 2022,
    description: `This is a dating app with a unique twist. Instead of scrolling
      through carefully curated profiles and staged photos, in this app, you'll
      skip straight to the real deal: video calls. When you're matched with
      someone, you'll have the opportunity to schedule a video call. It's a
      chance to see and interact with your match in real-time, allowing you to
      gauge chemistry and connection firsthand. If the video call goes well, you
      can then decide whether to take things to the next level and exchange
      phone numbers. It's a more authentic and efficient way to find meaningful
      connections in the digital age.`,
    links: ["https://www.youtube.com/watch?v=VYgpnTof-q4&t=1s"],
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
        alt: "Vidate Showcase 1",
      },
      {
        src: vidatePath + "vidate-2.jpg",
        alt: "Vidate Showcase 2",
      },
      {
        src: vidatePath + "vidate-3.jpg",
        alt: "Vidate Showcase 3",
      },
      {
        src: vidatePath + "vidate-4.jpg",
        alt: "Vidate Showcase 4",
      },
    ],
    previewImage: {
      src: vidatePath + "vidate-3.jpg",
      alt: "Vidate preview",
    },
    route: "vidate",
  },
  {
    name: "G-Star Certified Tailors",
    shortName: "G-star",
    category: categories.WEBSITE,
    year: 2021,
    description: `This is my first ever website and I had the priviledge to create one
        for G-Star. This initiative is driven by a commitment to sustainability,
        urging customers to choose repair over replacement for their denim. The website
        I created not only connects customers with these expert tailors but does so
        through an engaging, user-friendly platform. Key features include a stylishly
        integrated Google Maps for locating tge tailors, alongside a dynamic  parallax
        carousel that adds a layer of depth and engagement to the browsing experience.
        These creative elements ensure the website not only functions smoothly but also
        captivates and inspires visitors with its design.`,
    links: [""],
    appStoreLink: "",
    playStoreLink: "",
    websiteLink: "https://www.g-star.com/en_nl/certified-tailors",
    appIcon: {
      src: "",
      alt: "",
    },
    skills: ["JavaScript", "Svelte", "HTML", "CSS"],
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
    route: "gstar-certified-tailors",
  },
  {
    name: "Desperados Rave To Save",
    shortName: "Desperados RTS",
    category: categories.APPLICATION,
    year: 2021,
    description: `Rave to Save was created during the COVID-19 pandemic, aimed at supporting
      struggling at these times. This innovative app allows the user to
      participate in club events without leaving the comfort of your home. With
      just a few taps you can virtually attend your favourite club's events and
      show your support through the power of dance. Every dance move you make,
      accumulates “steps” which translates to monetary donations for the
      designated clubs.
      <br/><br/>
      The campaign achieved some incredible, mind-blowing
      results. The experience totalled 14,386,971,00 dance steps, translating
      into an incredible €137,312,65 raised for inclusive charities including
      Women in Music and Stonewall.`,
    links: [
      "https://jackmorton.com/work/rave-to-save/",
      "https://wearepi.com/webbies-ravetosave",
    ],
    appStoreLink: "",
    playStoreLink: "",
    websiteLink: "",
    appIcon: {
      src: "",
      alt: "",
    },
    skills: ["Unity", "C#"],
    images: [
      {
        src: desperadosPath + "desperados-rave-to-save-1.jpg",
        alt: "Desperados Rave To Save Showcase 1",
      },
      {
        src: desperadosPath + "desperados-rave-to-save-2.jpg",
        alt: "Desperados Rave To Save Showcase 2",
      },
      {
        src: desperadosPath + "desperados-rave-to-save-3.jpg",
        alt: "Desperados Rave To Save Showcase 3",
      },
      {
        src: desperadosPath + "desperados-rave-to-save-4.jpg",
        alt: "Desperados Rave To Save Showcase 4",
      },
      {
        src: desperadosPath + "desperados-rave-to-save-5.jpg",
        alt: "Desperados Rave To Save Showcase 5",
      },
      {
        src: desperadosPath + "desperados-rave-to-save-6.jpg",
        alt: "Desperados Rave To Save Showcase 6",
      },
      {
        src: desperadosPath + "desperados-rave-to-save-7.jpg",
        alt: "Desperados Rave To Save Showcase 7",
      },
      {
        src: desperadosPath + "desperados-rave-to-save-8.jpg",
        alt: "Desperados Rave To Save Showcase 8",
      },
    ],
    previewImage: {
      src: desperadosPath + "desperados-rave-to-save-8.jpg",
      alt: "G-Star preview",
    },
    route: "desperados-rave-to-save",
  },
];
