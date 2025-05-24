const tweetsData = {
  forYou: [
    {
      user: "Mailp_PR",
      handle: "@Mailp_PR",
      time: "May 22",
      content:
        "Jennifer Lopez has been sued $300,000 for sharing her own pictures without permission.",
      reactions: { likes: 5, comments: 10, reposts: 8 },
      isFollowing: false,
    },
    {
      user: "SilicondeltaMG",
      handle: "@SilicondeltaMG",
      time: "April 2",
      content:
        "Back end dev hits HARD when it clicks: 💬 It's like unlocking the Internet's 'hidden engine'—invisible but POWERING everything.",
      reactions: { likes: 200, comments: 10, reposts: 8 },
      isFollowing: true,
    },
    {
      user: "TechDaily",
      handle: "@TechDailyNews",
      time: "May 15",
      content:
        "Apple just patented a foldable iPhone design. Do you think it's worth the hype?",
      reactions: { likes: 350, comments: 90, reposts: 65 },
      isFollowing: false,
    },
    {
      user: "SpaceGeek",
      handle: "@astrogeek",
      time: "May 12",
      content:
        "NASA confirms new evidence of water on Europa, one of Jupiter’s moons. Life beyond Earth?",
      reactions: { likes: 900, comments: 120, reposts: 340 },
      isFollowing: false,
    },
    {
      user: "DesignDiva",
      handle: "@uxQueen",
      time: "April 28",
      content:
        "Great UX is like a joke. If you have to explain it, it’s not good enough. #UXDesign",
      reactions: { likes: 1200, comments: 80, reposts: 220 },
      isFollowing: true,
    },
    {
      user: "CryptoTalk",
      handle: "@CryptoTalkNow",
      time: "May 10",
      content:
        "Bitcoin surges past $70k again. Analysts say this is just the beginning of the next bull run.",
      reactions: { likes: 700, comments: 150, reposts: 95 },
      isFollowing: false,
    },
    {
      user: "FitnessGuru",
      handle: "@FitWithMe",
      time: "May 1",
      content:
        "Stop scrolling and do 10 push-ups. Your body will thank you. 💪 #fitness",
      reactions: { likes: 420, comments: 32, reposts: 18 },
      isFollowing: false,
    },
    {
      user: "MindfulTech",
      handle: "@mindfulapps",
      time: "May 4",
      content:
        "Reminder: Your phone isn’t your boss. Take time to unplug and just breathe. 🧘",
      reactions: { likes: 680, comments: 48, reposts: 90 },
      isFollowing: true,
    },
    {
      user: "EcoToday",
      handle: "@eco_today",
      time: "April 30",
      content:
        "A 15-year-old just created a solar-powered water purifier that costs under $50. Innovation starts young!",
      reactions: { likes: 1100, comments: 210, reposts: 330 },
      isFollowing: false,
    },
    {
      user: "AI_Guy",
      handle: "@machineintel",
      time: "May 5",
      content:
        "GPT-5 rumors: multimodal capabilities, memory improvements, and native coding mode. Big things ahead.",
      reactions: { likes: 990, comments: 140, reposts: 200 },
      isFollowing: false,
    },
  ],

  following: [
    {
      user: "SilicondeltaMG",
      handle: "@SilicondeltaMG",
      time: "April 2",
      content:
        "Back end dev hits HARD when it clicks: 💬 It's like unlocking the Internet's 'hidden engine'.",
      reactions: { likes: 200, comments: 10, reposts: 8 },
      isFollowing: true,
    },
    {
      user: "ReactDev",
      handle: "@ReactOfficial",
      time: "May 23",
      content:
        "Just released React 19 beta with exciting new features! Try it out and let us know what you think.",
      reactions: { likes: 1500, comments: 320, reposts: 450 },
      isFollowing: true,
    },
    {
      user: "CodeMaster",
      handle: "@devjunkie",
      time: "May 19",
      content:
        "Stop underestimating CSS. It can make or break your entire app's experience. #webdev",
      reactions: { likes: 420, comments: 70, reposts: 30 },
      isFollowing: true,
    },
    {
      user: "DesignDiva",
      handle: "@uxQueen",
      time: "May 20",
      content:
        "Dark mode isn’t just a trend — it's an accessibility feature. Design with care.",
      reactions: { likes: 800, comments: 90, reposts: 210 },
      isFollowing: true,
    },
    {
      user: "ProductHunt",
      handle: "@producthunt",
      time: "May 22",
      content:
        "A new tool that converts Figma designs straight to React components. Launched today 🚀",
      reactions: { likes: 980, comments: 180, reposts: 140 },
      isFollowing: true,
    },
    {
      user: "OpenAI",
      handle: "@OpenAI",
      time: "May 16",
      content:
        "We’re rolling out GPT-5 preview for selected users. Multimodal and memory-powered AI is here.",
      reactions: { likes: 3200, comments: 670, reposts: 900 },
      isFollowing: true,
    },
    {
      user: "WebWizard",
      handle: "@frontendmagic",
      time: "May 14",
      content:
        "Tip: Use `clamp()` in CSS to create responsive font sizes without media queries!",
      reactions: { likes: 390, comments: 45, reposts: 60 },
      isFollowing: true,
    },
    {
      user: "AI_Guy",
      handle: "@machineintel",
      time: "May 5",
      content:
        "Don’t fear AI replacing you. Learn to use it to enhance your workflow. Adapt and thrive.",
      reactions: { likes: 750, comments: 88, reposts: 130 },
      isFollowing: true,
    },
    {
      user: "MindfulTech",
      handle: "@mindfulapps",
      time: "April 29",
      content:
        "App dev burnout is real. Set work boundaries and protect your time. #mentalhealth",
      reactions: { likes: 680, comments: 48, reposts: 90 },
      isFollowing: true,
    },
    {
      user: "DevHumor",
      handle: "@funnydev",
      time: "May 21",
      content:
        "Me debugging at 2am: 'Why is this semicolon here?' Also me: 'Why is this semicolon missing?' 🤡",
      reactions: { likes: 1300, comments: 220, reposts: 300 },
      isFollowing: true,
    },
    {
      user: "CloudCrusader",
      handle: "@cloudtechguy",
      time: "May 6",
      content:
        "Kubernetes makes you feel like a god… until you break DNS and can't figure out why nothing works. 🧠🔧",
      reactions: { likes: 510, comments: 98, reposts: 77 },
      isFollowing: true,
    },
    {
      user: "EcoToday",
      handle: "@eco_today",
      time: "May 3",
      content:
        "Solar roads are being tested in Germany. Can infrastructure generate power now? 🌞",
      reactions: { likes: 670, comments: 190, reposts: 115 },
      isFollowing: true,
    },
  ],
};

export default tweetsData;
