/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Testimony, ValueCard, HouseRole, EmergencyContact } from './types';

export const SACRED_VALUES: ValueCard[] = [
  {
    letter: "S",
    word: "Spiritual Growth",
    description: "Developing a deep, active relationship with God, diving into the Scriptures, prayer, and local church service as our ultimate reference point.",
    quote: "Put God first, and live your life in line with His Word."
  },
  {
    letter: "A",
    word: "Adventure",
    description: "A life filled with purpose and adventure, living in the present while actively preparing for the future and stepping into new horizons.",
    quote: "Adventure is living the life of purpose Christ has designed for you."
  },
  {
    letter: "C",
    word: "Called in Courage",
    description: "Standing bold and strong in our calling, stepping outside comfort zones to preach the Gospel and serve our communities without fear.",
    quote: "Be bold and courageous, for the Lord your God is with you wherever you go."
  },
  {
    letter: "R",
    word: "Real",
    description: "Being authentic, true to our identity in Christ, and rejecting superficial masks to cultivate deep, genuine, and transparent peer relationships.",
    quote: "Real community is built when transparency and alignment replace passive compliance."
  },
  {
    letter: "E",
    word: "Eternal Mindset",
    description: "Living with our eyes set on eternity, seeking things above, and anchoring our daily effort in what has long-term value for the Kingdom.",
    quote: "Set your mind on things above, not on earthly things."
  },
  {
    letter: "D",
    word: "Discipleship",
    description: "Walking closely together as a team of twelve, being mentored, pursuing accountability, and training to raise the next generation of leaders.",
    quote: "As the twelve disciples walked alongside Jesus, we run together."
  }
];

export const ASH_VALUES: ValueCard[] = [
  {
    letter: "A",
    word: "Authentic",
    description: "Living out our true identity, being honest and real about who we are under Christ without pretenses or superficial performance.",
    quote: "Being authentic and true to our identity in Christ."
  },
  {
    letter: "S",
    word: "Servant Hearted",
    description: "Demonstrating deep humility and dedication, eager to support others, execute behind-the-scenes needs, and put others first.",
    quote: "A servant-hearted leader is measured by their active contributions to the team."
  },
  {
    letter: "H",
    word: "Honesty",
    description: "Upholding absolute integrity and transparency in our relationships, finances, and guidelines, remaining above approach.",
    quote: "Honesty and integrity in all areas of life."
  }
];

export const HOUSE_ROSTER: HouseRole[] = [
  {
    day: "Monday",
    cookingTeam: ["Andrew", "Micaella"],
    cleaningTeam: ["Jarryd", "Tehillah"],
    dutyDetail: "Traditional dinner preparation / Curfew at 10:00 PM"
  },
  {
    day: "Tuesday",
    cookingTeam: ["Ben", "Tehillah"],
    cleaningTeam: ["James", "Caelyn"],
    dutyDetail: "Weekly Leadership Workshop setup / Mandatory seminar attendance at CityHill Hall"
  },
  {
    day: "Wednesday",
    cookingTeam: ["Jarryd", "James"],
    cleaningTeam: ["Andrew", "Ben"],
    dutyDetail: "Team peer-review sessions / Curfew at 10:00 PM"
  },
  {
    day: "Thursday",
    cookingTeam: ["Micaella", "Tehillah"],
    cleaningTeam: ["Jarryd", "Caelyn"],
    dutyDetail: "Analysis memo submission / Resident progress review panel"
  },
  {
    day: "Friday",
    cookingTeam: ["Andrew", "Caelyn"],
    cleaningTeam: ["Ben", "Micaella"],
    dutyDetail: "Youth Outreach & Empowerment workshop prep / Curfew at 12:00 Midnight"
  },
  {
    day: "Saturday",
    cookingTeam: ["Team Effort (Rostered)"],
    cleaningTeam: ["Whole Team (Facility Maintenance)"],
    dutyDetail: "Local community development programs & development logistics / Flexible evening hours"
  },
  {
    day: "Sunday",
    cookingTeam: ["Team dining events"],
    cleaningTeam: ["Kitchen Team A"],
    dutyDetail: "General assembly, team presentation block, and goal setting session"
  }
];

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    role: "Program Director / Captain",
    name: "David Hunter",
    phone: "081 541 1335",
    email: "david@thetwelve.co.za"
  },
  {
    role: "Community Relations Board Rep",
    name: "Robbie Krause",
    phone: "0861122331",
    email: "hello@cityhill.co.za"
  },
  {
    role: "South African Police Services",
    name: "Local Hillcrest SAPS",
    phone: "10111",
    secondary: "031 761 5898 (Hillcrest Station)"
  },
  {
    role: "Medical Emergency & Hospital",
    name: "Hillcrest Private Hospital",
    phone: "031 761 5898",
    secondary: "Ambulance: 10177"
  }
];

export const INITIAL_TESTIMONIES: Testimony[] = [
  {
    id: "t1",
    name: "Andrew",
    classYear: "Team 2026",
    homeProvince: "Gauteng",
    category: "Professional Growth",
    testimonyText: "Connecting deeply in fellowship at The Twelve has entirely transformed my walk. Studying the Word together with the guys and sharing in community chore rosters has built a grit in me that I didn't know I possessed. It is about laying up treasures in Heaven rather than chasing earthly comforts.",
    keyVerse: "Treasures in Heaven",
    avatarSeed: "andrew",
    soundWavePulse: [10, 40, 20, 60, 80, 45, 90, 70, 30, 50, 10, 65, 80, 20, 95, 40, 20],
    dateAdded: "2026-03-15"
  },
  {
    id: "t2",
    name: "Jarryd",
    classYear: "Team 2026",
    homeProvince: "KwaZulu-Natal",
    category: "Radical Resilience",
    testimonyText: "Playing rugby and practicing sportsmanship taught me to tackle physical resistance, but here at The Twelve, I've learned spiritual perseverance. Responding to trials with a sense of humor and standing strong under pressure is how true discipleship is modeled. It's about how hard you can get hit and keep moving forward.",
    keyVerse: "Grit & Perseverance",
    avatarSeed: "jarryd",
    soundWavePulse: [30, 20, 50, 70, 40, 60, 50, 90, 80, 30, 40, 60, 20, 70, 50, 90, 40],
    dateAdded: "2026-04-10"
  },
  {
    id: "t3",
    name: "Caelyn",
    classYear: "Team 2026",
    homeProvince: "KwaZulu-Natal",
    category: "Civic Empowerment",
    testimonyText: "Being part of our regional youth outreaches and cooking alongside others has made me realize how called and set-apart we really are. As an only child, navigating this large, energetic sibling circle showed me the deep beauty of Christian family. There is absolutely nothing that can separate us from His love.",
    keyVerse: "Set-Apart Devotion",
    avatarSeed: "caelyn",
    soundWavePulse: [20, 50, 40, 30, 80, 90, 100, 70, 50, 80, 60, 30, 45, 90, 75, 40, 30],
    dateAdded: "2026-05-18"
  }
];
