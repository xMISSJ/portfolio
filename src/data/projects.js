import { categories } from "../constants/categories";

const imagePath = "/images";
const paths = {
  gstar: `${imagePath}/gstar/`,
  desperados: `${imagePath}/desperados/`,
  bloemenBureau: `${imagePath}/bloemenbureau/`,
  msNosy: `${imagePath}/msnosy/`,
  vidate: `${imagePath}/vidate/`,
  disney: `${imagePath}/disney/`,
  unga: `${imagePath}/unga/`,
};

const mobileWidth = 300;
const mobileHeight = 533.6;

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
      src: paths.desperados + "app-icon.jpg",
      alt: "Desperados App Icon",
    },
    skills: ["Flutter", "JavaScript", "Dart"],
    images: Array.from({ length: 3 }, (_, index) => ({
      src: paths.desperados + `desperados-dance-club-${index + 1}.jpg`,
      alt: `Desperados DDC ${index + 1}`,
    })),
    mobileScreens: Array.from({ length: 22 }, (_, index) => ({
      src:
        paths.desperados +
        `mobile/desperados-dance-club-mobile-${index + 1}.jpg`,
      alt: `Mobile screen ${index + 1}`,
      dimensions: { width: mobileWidth, height: mobileHeight },
    })),
    mobileScreens2: [],
    previewImage: {
      src: paths.desperados + "desperados-dance-club-preview.jpg",
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
      src: paths.disney + "app-icon.jpg",
      alt: "Disney Cuisinons en Famille App Icon",
    },
    skills: ["Javascript", "Typescript", "CSS", "React"],
    images: Array.from({ length: 2 }, (_, index) => ({
      src: paths.disney + `disney-food-lovers-${index + 1}.jpg`,
      alt: `Disney Food Lovers ${index + 1}`,
    })),
    mobileScreens: Array.from({ length: 14 }, (_, index) => ({
      src:
        paths.disney +
        `mobile/disney-food-lovers-collection-mobile-${index + 1}.jpg`,
      alt: `Mobile screen ${index + 1}`,
      dimensions: { width: mobileWidth, height: mobileHeight },
    })),
    mobileScreens2: [],
    previewImage: {
      src: paths.disney + "disney-food-lovers-preview.jpg",
      alt: "Disney Food Lovers preview",
    },
    route: "disney-cuisinons-en-famille",
  },
  {
    name: "Bloemenbureau<br/>Botanical Wonders",
    shortName: "Bloemenbureau",
    category: categories.WEB_APPLICATION,
    year: 2023,
    description: `Bloemenbureau Holland gave my team and I the opportunity to create the 'Botanical
        Wonders' web application, designed to express the uplifting influence of flowers
        and plants through Augmented Reality (AR). This web application allows users to
        experience the growth and bloom of flora right in their own surroundings.
        The mission is to inspire and educate about the crucial role flowers and plants
        play not just in beautifying our environments, but also in enhancing our health
        and well-being.`,
    links: [
      "https://www.bloemenbureauholland.nl/campagne/mood-garden-amsterdam-laat-consument-bloemen-en-planten-echt-ervaren",
    ],
    appStoreLink: "",
    playStoreLink: "",
    websiteLink: "http://botanicalwonders.online/",
    appIcon: { src: paths.bloemenBureau + "app-icon.png", alt: "Web App Icon" },
    skills: ["JavaScript", "Svelte", "HTML", "CSS"],
    images: Array.from({ length: 5 }, (_, index) => ({
      src:
        paths.bloemenBureau +
        `bloemenbureau-botanical-wonders-${index + 1}.jpg`,
      alt: `Bloemenbureau ${index + 1}`,
    })),
    mobileScreens: Array.from({ length: 7 }, (_, index) => ({
      src: paths.bloemenBureau + `mobile/bloemenbureau-mobile-${index + 1}.jpg`,
      alt: `Mobile screen ${index + 1}`,
      dimensions: { width: mobileWidth, height: mobileHeight },
    })),
    mobileScreens2: [],
    previewImage: {
      src: paths.bloemenBureau + "bloemenbureau-qr-3.jpg",
      alt: "Bloemen Bureau Preview",
    },
    route: "bloemenbureau-botanical-wonders",
  },
  {
    name: "MsNosy",
    shortName: "MsNosy",
    category: categories.APPLICATION,
    year: 2022,
    description: `MsNosy is an app designed to make long car drives more engaging for children. It
        encourages kids to be active during the journey by interacting with their surroundings.
        The app includes games that trigger at specific locations, requiring users to answer
        quiz questions or perform similar tasks.
        <br/><br/>
        A second, adapted version of MsNosy has been created specifically for adults. This
        version features a more sophisticated layout, making it appealing for an older audience
        while retaining the same engaging games as the original.`,
    links: [
      "https://www.bloemenbureauholland.nl/campagne/mood-garden-amsterdam-laat-consument-bloemen-en-planten-echt-ervaren",
    ],
    appStoreLink: "https://apps.apple.com/nl/app/msnosy/id1563556091?l=en",
    playStoreLink: "",
    websiteLink: "",
    appIcon: { src: paths.msNosy + "app-icon.png", alt: "MsNosy App Icon" },
    skills: ["Unity", "C#"],
    images: [
      {
        src: paths.msNosy + "msnosy-1.jpg",
        alt: "MsNosy Showcase",
      },
    ],
    mobileScreens: Array.from({ length: 24 }, (_, index) => ({
      src: paths.msNosy + `mobile/msnosy-mobile-${index + 1}.jpg`,
      alt: `MsNosy Mobile screen ${index + 1}`,
      dimensions: { width: mobileWidth, height: mobileHeight },
    })),
    mobileScreens2: Array.from({ length: 21 }, (_, index) => ({
      src: paths.msNosy + `mobile/msnosy-mobile2-${index + 1}.jpg`,
      alt: `Msnosy Mobile screen 2 ${index + 1}`,
      dimensions: { width: mobileWidth, height: mobileHeight },
    })),
    previewImage: {
      src: paths.msNosy + "msnosy-preview.jpg",
      alt: "MsNosy Preview",
    },
    route: "msnosy",
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
      src: paths.vidate + "app-icon.png",
      alt: "Vidate App Icon",
    },
    skills: ["Unity", "C#"],
    images: Array.from({ length: 4 }, (_, index) => ({
      src: paths.vidate + `vidate-${index + 1}.jpg`,
      alt: `Vidate ${index + 1}`,
    })),
    mobileScreens: Array.from({ length: 29 }, (_, index) => ({
      src: paths.vidate + `mobile/vidate-mobile-${index + 1}.jpg`,
      alt: `Mobile screen ${index + 1}`,
      dimensions: { width: mobileWidth, height: mobileHeight },
    })),
    mobileScreens2: [],
    previewImage: {
      src: paths.vidate + "vidate-3.jpg",
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
        src: paths.gstar + "g-star-certified-tailors-1.jpg",
        alt: "G-Star Example 1",
      },
    ],
    mobileScreens: [],
    mobileScreens2: [],
    previewImage: {
      src: paths.gstar + "g-star-certified-tailors-preview.jpg",
      alt: "G-Star preview",
    },
    route: "gstar-certified-tailors",
  },
  {
    name: "Desperados Rave To Save",
    shortName: "Desperados RTS",
    category: categories.APPLICATION,
    year: 2021,
    description: `Rave to Save was created during the COVID-19 pandemic, 
      to help clubs at these hard times. This innovative app allows the user to
      participate in club events digitally. With just a few taps you can
      virtually attend your favourite club's events and show your support
      through the power of dance. Every dance move you make, accumulates “steps”
      which translates to donations for the designated clubs.
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
      src: paths.desperados + "app-icon-2.jpg",
      alt: "Desperados RTS App Icon",
    },
    skills: ["Unity", "C#"],
    images: Array.from({ length: 8 }, (_, index) => ({
      src: paths.desperados + `desperados-rave-to-save-${index + 1}.jpg`,
      alt: `Desperados RTS ${index + 1}`,
    })),
    mobileScreens: Array.from({ length: 18 }, (_, index) => ({
      src:
        paths.desperados +
        `mobile/desperados-rave-to-save-mobile-${index + 1}.jpg`,
      alt: `Mobile screen V1 ${index + 1}`,
      dimensions: { width: mobileWidth, height: mobileHeight },
    })),
    mobileScreens2: Array.from({ length: 18 }, (_, index) => ({
      src:
        paths.desperados +
        `mobile/desperados-rave-to-save-mobile2-${index + 1}.jpg`,
      alt: `Mobile screen V2 ${index + 1}`,
      dimensions: { width: mobileWidth, height: mobileHeight },
    })),
    previewImage: {
      src: paths.desperados + "desperados-rave-to-save-8.jpg",
      alt: "G-Star preview",
    },
    route: "desperados-rave-to-save",
  },
  {
    name: "UNGA Bricks",
    shortName: "UNGA",
    category: categories.APPLICATION,
    year: 2021,
    description: `To express gratitude to their loyal Portuguese customers, Intermarché launched
      a special promotion through their home brand, Porsi. Partnering with UNGA, they
      delighted families with a unique loyalty program. For every €20 spent on groceries,
      shoppers received a free surprise pack of collectible bricks. With 40 different
      bricks available, each pack contained up to 6 unique pieces, bringing joy to parents
      and kids alike.
      <br/><br/>
      This campaign, part of the 'My Intermarché Store' series, invites
      users on an exciting journey. Users can scan the collectable bricks and make it
      part of their virtual collection. With interactive features and games, users manage
      their personalized supermarkets, becoming the ultimate store managers.
    `,
    links: [
      "https://unga.nl/cases/intermarche-bricks-builds-a-community-of-brick-lovers-in-portugal/",
      "https://www.linkedin.com/feed/update/urn:li:activity:6877177624284712961/",
      "https://www.instagram.com/p/CW6M4YtM3H-/?utm_source=ig_embed&ig_rid=0ab97143-b026-4f12-b2be-141e1ccdae8e",
    ],
    appStoreLink: "",
    playStoreLink: "",
    websiteLink: "",
    appIcon: {
      src: paths.unga + "app-icon.jpg",
      alt: "Desperados RTS App Icon",
    },
    skills: ["Unity", "C#"],
    images: Array.from({ length: 3 }, (_, index) => ({
      src: paths.unga + `unga-bricks-${index + 1}.jpg`,
      alt: `Desperados RTS ${index + 1}`,
    })),
    mobileScreens: [],
    previewImage: {
      src: paths.unga + "unga-bricks-3.jpg",
      alt: "UNGA preview",
    },
    route: "unga-bricks",
  },
];
