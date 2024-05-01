let gstarPath = "/images/gstar/";
let desperadosPath = "/images/desperados/";
let vidatePath = "/images/vidate/";

export let projects = [
  {
    name: "G-Star Certified Tailors",
    shortName: "G-star",
    category: "Website",
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
  {
    name: "Desperados Dance Club",
    shortName: "Desperados",
    category: "Application",
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
    name: "Vidate",
    shortName: "Vidate",
    category: "Application",
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
        src: vidatePath + "vidate.jpg",
        alt: "Vidate",
      },
    ],
    previewImage: {
      src: vidatePath + "vidate.jpg",
      alt: "Vidate preview",
    },
    route: "vidate",
  },
];
