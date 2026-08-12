export type ProjectCategory =
  | "Photography"
  | "Cinematography"
  | "Commercial Ads"
  | "Reels";

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  description: string;
  cover: string;
  photos: ProjectMedia[];
  videos: ProjectMedia[];
};

export const projects: Project[] = [

  // =========================
  // PHOTOGRAPHY
  // =========================

  {
  id: "mcs-world-cup-event",
  title: "MCS World Cup Event",
  category: "Photography",
  year: "2026",
  description:
    "Event photography coverage for the MCS World Cup Event, capturing the atmosphere, people, and key moments of the event.",

  cover: "/projects/photography/MCS%20World%20cup%20event/1%20(1).jpg",

  photos: [
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(1).jpg",
      alt: "MCS World Cup Event — Photo 01",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(2).jpg",
      alt: "MCS World Cup Event — Photo 02",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(3).jpg",
      alt: "MCS World Cup Event — Photo 03",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(4).jpg",
      alt: "MCS World Cup Event — Photo 04",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(5).jpg",
      alt: "MCS World Cup Event — Photo 05",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(6).jpg",
      alt: "MCS World Cup Event — Photo 06",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(7).jpg",
      alt: "MCS World Cup Event — Photo 07",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(8).jpg",
      alt: "MCS World Cup Event — Photo 08",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(9).jpg",
      alt: "MCS World Cup Event — Photo 09",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(10).jpg",
      alt: "MCS World Cup Event — Photo 10",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(11).jpg",
      alt: "MCS World Cup Event — Photo 11",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(12).jpg",
      alt: "MCS World Cup Event — Photo 12",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(13).jpg",
      alt: "MCS World Cup Event — Photo 13",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(14).jpg",
      alt: "MCS World Cup Event — Photo 14",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(15).jpg",
      alt: "MCS World Cup Event — Photo 15",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(16).jpg",
      alt: "MCS World Cup Event — Photo 16",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(17).jpg",
      alt: "MCS World Cup Event — Photo 17",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(18).jpg",
      alt: "MCS World Cup Event — Photo 18",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(19).jpg",
      alt: "MCS World Cup Event — Photo 19",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(20).jpg",
      alt: "MCS World Cup Event — Photo 20",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(21).jpg",
      alt: "MCS World Cup Event — Photo 21",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(22).jpg",
      alt: "MCS World Cup Event — Photo 22",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(23).jpg",
      alt: "MCS World Cup Event — Photo 23",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(24).jpg",
      alt: "MCS World Cup Event — Photo 24",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(25).jpg",
      alt: "MCS World Cup Event — Photo 25",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(26).jpg",
      alt: "MCS World Cup Event — Photo 26",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(27).jpg",
      alt: "MCS World Cup Event — Photo 27",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(28).jpg",
      alt: "MCS World Cup Event — Photo 28",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(29).jpg",
      alt: "MCS World Cup Event — Photo 29",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(30).jpg",
      alt: "MCS World Cup Event — Photo 30",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(31).jpg",
      alt: "MCS World Cup Event — Photo 31",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(32).jpg",
      alt: "MCS World Cup Event — Photo 32",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(33).jpg",
      alt: "MCS World Cup Event — Photo 33",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(34).jpg",
      alt: "MCS World Cup Event — Photo 34",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(35).jpg",
      alt: "MCS World Cup Event — Photo 35",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(36).jpg",
      alt: "MCS World Cup Event — Photo 36",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(37).jpg",
      alt: "MCS World Cup Event — Photo 37",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(38).jpg",
      alt: "MCS World Cup Event — Photo 38",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(39).jpg",
      alt: "MCS World Cup Event — Photo 39",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(40).jpg",
      alt: "MCS World Cup Event — Photo 40",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(41).jpg",
      alt: "MCS World Cup Event — Photo 41",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(42).jpg",
      alt: "MCS World Cup Event — Photo 42",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(43).jpg",
      alt: "MCS World Cup Event — Photo 43",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(44).jpg",
      alt: "MCS World Cup Event — Photo 44",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(45).jpg",
      alt: "MCS World Cup Event — Photo 45",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(46).jpg",
      alt: "MCS World Cup Event — Photo 46",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(47).jpg",
      alt: "MCS World Cup Event — Photo 47",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(48).jpg",
      alt: "MCS World Cup Event — Photo 48",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(49).jpg",
      alt: "MCS World Cup Event — Photo 49",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(50).jpg",
      alt: "MCS World Cup Event — Photo 50",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(51).jpg",
      alt: "MCS World Cup Event — Photo 51",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(52).jpg",
      alt: "MCS World Cup Event — Photo 52",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(53).jpg",
      alt: "MCS World Cup Event — Photo 53",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(54).jpg",
      alt: "MCS World Cup Event — Photo 54",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(55).jpg",
      alt: "MCS World Cup Event — Photo 55",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(56).jpg",
      alt: "MCS World Cup Event — Photo 56",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(57).jpg",
      alt: "MCS World Cup Event — Photo 57",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(58).jpg",
      alt: "MCS World Cup Event — Photo 58",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(59).jpg",
      alt: "MCS World Cup Event — Photo 59",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(60).jpg",
      alt: "MCS World Cup Event — Photo 60",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(61).jpg",
      alt: "MCS World Cup Event — Photo 61",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(62).jpg",
      alt: "MCS World Cup Event — Photo 62",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(63).jpg",
      alt: "MCS World Cup Event — Photo 63",
    },
    {
      type: "image",
      src: "/projects/photography/MCS%20World%20cup%20event/1%20(64).jpg",
      alt: "MCS World Cup Event — Photo 64",
    },
  ],

  videos: [],
},

{
  id: "pilatu-africa-health-excon",
  title: "Pilatu AFRICA HEALTH ExCon",
  category: "Photography",
  year: "2026",
  description:
    "Event photography coverage for Pilatu AFRICA HEALTH ExCon, capturing the atmosphere, activities, and key moments of the event.",

  cover: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(1).jpg",

  photos: [
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(1).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 01",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(2).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 02",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(3).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 03",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(4).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 04",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(5).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 05",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(6).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 06",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(7).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 07",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(8).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 08",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(9).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 09",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(10).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 10",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(11).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 11",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(12).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 12",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(13).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 13",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(14).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 14",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(15).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 15",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(16).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 16",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(17).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 17",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(18).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 18",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(19).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 19",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(20).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 20",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(21).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 21",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(22).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 22",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(23).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 23",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(24).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 24",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(25).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 25",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(26).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 26",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(27).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 27",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(28).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 28",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(29).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 29",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(30).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 30",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(31).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 31",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(32).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 32",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(33).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 33",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(34).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 34",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(35).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 35",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(36).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 36",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(37).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 37",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(38).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 38",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(39).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 39",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(40).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 40",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(41).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 41",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(42).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 42",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(43).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 43",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(44).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 44",
    },
    {
      type: "image",
      src: "/projects/photography/Pilatu%20AFRICA%20HEALTH%20ExCon/1%20(45).jpg",
      alt: "Pilatu AFRICA HEALTH ExCon — Photo 45",
    },
  ],

  videos: [],
  
},
{
  id: "mcs-africa-health-excon",
  title: "MCS AFRICA HEALTH ExCon",
  category: "Photography",
  year: "2026",
  description:
    "A photography project covering the MCS AFRICA HEALTH ExCon event, capturing key moments, people, and visual highlights throughout the event.",

  cover: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (1).jpg",

  photos: [
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (1).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 01",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (2).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 02",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (3).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 03",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (4).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 04",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (5).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 05",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (6).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 06",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (7).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 07",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (8).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 08",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (9).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 09",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (10).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 10",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (11).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 11",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (12).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 12",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (13).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 13",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (14).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 14",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (15).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 15",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (16).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 16",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (17).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 17",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (18).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 18",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (19).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 19",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (20).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 20",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (21).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 21",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (22).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 22",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (23).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 23",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (24).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 24",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (25).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 25",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (26).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 26",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (27).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 27",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (28).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 28",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (29).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 29",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (30).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 30",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (31).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 31",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (32).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 32",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (33).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 33",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (34).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 34",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (35).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 35",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (36).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 36",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (37).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 37",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (38).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 38",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (39).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 39",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (40).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 40",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (41).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 41",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (42).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 42",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (43).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 43",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (44).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 44",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (45).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 45",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (46).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 46",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (47).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 47",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (48).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 48",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (49).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 49",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (50).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 50",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (51).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 51",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (52).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 52",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (53).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 53",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (54).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 54",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (55).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 55",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (56).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 56",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (57).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 57",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (58).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 58",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (59).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 59",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (60).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 60",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (61).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 61",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (62).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 62",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (63).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 63",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (64).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 64",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (65).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 65",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (66).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 66",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (67).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 67",
    },
    {
      type: "image",
      src: "/projects/photography/MCS AFRICA HEALTH ExCon/1 (68).jpg",
      alt: "MCS AFRICA HEALTH ExCon — Photo 68",
    },
  ],

  videos: [],
},

 // =========================
// CINEMATOGRAPHY
// =========================

{
  id: "a-and-m",
  title: "A&M",
  category: "Cinematography",
  year: "2026",
  description:
    "A cinematic visual project created for A&M, focused on visual storytelling and cinematic production.",

  cover: "/projects/cinematography/A&M/cover.jpg",

  photos: [],

  videos: [
    {
      type: "video",
      src: "https://play.gumlet.io/embed/6a7b1c928fd90b58aa3889b8",
      alt: "A&M — Cinematography Film",
    },
  ],
},
{
  id: "seimens",
  title: "Seimens",
  category: "Photography",
  year: "2026",
  description:
    "A photography project capturing visual moments, atmosphere, and details from Seimens.",

  cover: "/projects/photography/Seimens/1 (1).jpg",

  photos: [
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (1).jpg",
      alt: "Seimens — Photo 01",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (2).jpg",
      alt: "Seimens — Photo 02",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (3).jpg",
      alt: "Seimens — Photo 03",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (4).jpg",
      alt: "Seimens — Photo 04",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (5).jpg",
      alt: "Seimens — Photo 05",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (6).jpg",
      alt: "Seimens — Photo 06",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (7).jpg",
      alt: "Seimens — Photo 07",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (8).jpg",
      alt: "Seimens — Photo 08",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (9).jpg",
      alt: "Seimens — Photo 09",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (10).jpg",
      alt: "Seimens — Photo 10",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (11).jpg",
      alt: "Seimens — Photo 11",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (12).jpg",
      alt: "Seimens — Photo 12",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (13).jpg",
      alt: "Seimens — Photo 13",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (14).jpg",
      alt: "Seimens — Photo 14",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (15).jpg",
      alt: "Seimens — Photo 15",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (16).jpg",
      alt: "Seimens — Photo 16",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (17).jpg",
      alt: "Seimens — Photo 17",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (18).jpg",
      alt: "Seimens — Photo 18",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (19).jpg",
      alt: "Seimens — Photo 19",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (20).jpg",
      alt: "Seimens — Photo 20",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (21).jpg",
      alt: "Seimens — Photo 21",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (22).jpg",
      alt: "Seimens — Photo 22",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (23).jpg",
      alt: "Seimens — Photo 23",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (24).jpg",
      alt: "Seimens — Photo 24",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (25).jpg",
      alt: "Seimens — Photo 25",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (26).jpg",
      alt: "Seimens — Photo 26",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (27).jpg",
      alt: "Seimens — Photo 27",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (28).jpg",
      alt: "Seimens — Photo 28",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (29).jpg",
      alt: "Seimens — Photo 29",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (30).jpg",
      alt: "Seimens — Photo 30",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (31).jpg",
      alt: "Seimens — Photo 31",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (32).jpg",
      alt: "Seimens — Photo 32",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (33).jpg",
      alt: "Seimens — Photo 33",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (34).jpg",
      alt: "Seimens — Photo 34",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (35).jpg",
      alt: "Seimens — Photo 35",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (36).jpg",
      alt: "Seimens — Photo 36",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (37).jpg",
      alt: "Seimens — Photo 37",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (38).jpg",
      alt: "Seimens — Photo 38",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (39).jpg",
      alt: "Seimens — Photo 39",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (40).jpg",
      alt: "Seimens — Photo 40",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (41).jpg",
      alt: "Seimens — Photo 41",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (42).jpg",
      alt: "Seimens — Photo 42",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (43).jpg",
      alt: "Seimens — Photo 43",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (44).jpg",
      alt: "Seimens — Photo 44",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (45).jpg",
      alt: "Seimens — Photo 45",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (46).jpg",
      alt: "Seimens — Photo 46",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (47).jpg",
      alt: "Seimens — Photo 47",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (48).jpg",
      alt: "Seimens — Photo 48",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (49).jpg",
      alt: "Seimens — Photo 49",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (50).jpg",
      alt: "Seimens — Photo 50",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (51).jpg",
      alt: "Seimens — Photo 51",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (52).jpg",
      alt: "Seimens — Photo 52",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (53).jpg",
      alt: "Seimens — Photo 53",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (54).jpg",
      alt: "Seimens — Photo 54",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (55).jpg",
      alt: "Seimens — Photo 55",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (56).jpg",
      alt: "Seimens — Photo 56",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (57).jpg",
      alt: "Seimens — Photo 57",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (58).jpg",
      alt: "Seimens — Photo 58",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (59).jpg",
      alt: "Seimens — Photo 59",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (60).jpg",
      alt: "Seimens — Photo 60",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (61).jpg",
      alt: "Seimens — Photo 61",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (62).jpg",
      alt: "Seimens — Photo 62",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (63).jpg",
      alt: "Seimens — Photo 63",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (64).jpg",
      alt: "Seimens — Photo 64",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (65).jpg",
      alt: "Seimens — Photo 65",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (66).jpg",
      alt: "Seimens — Photo 66",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (67).jpg",
      alt: "Seimens — Photo 67",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (68).jpg",
      alt: "Seimens — Photo 68",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (69).jpg",
      alt: "Seimens — Photo 69",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (70).jpg",
      alt: "Seimens — Photo 70",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (71).jpg",
      alt: "Seimens — Photo 71",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (72).jpg",
      alt: "Seimens — Photo 72",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (73).jpg",
      alt: "Seimens — Photo 73",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (74).jpg",
      alt: "Seimens — Photo 74",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (75).jpg",
      alt: "Seimens — Photo 75",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (76).jpg",
      alt: "Seimens — Photo 76",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (77).jpg",
      alt: "Seimens — Photo 77",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (78).jpg",
      alt: "Seimens — Photo 78",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (79).jpg",
      alt: "Seimens — Photo 79",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (80).jpg",
      alt: "Seimens — Photo 80",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (81).jpg",
      alt: "Seimens — Photo 81",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (82).jpg",
      alt: "Seimens — Photo 82",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (83).jpg",
      alt: "Seimens — Photo 83",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (84).jpg",
      alt: "Seimens — Photo 84",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (85).jpg",
      alt: "Seimens — Photo 85",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (86).jpg",
      alt: "Seimens — Photo 86",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (87).jpg",
      alt: "Seimens — Photo 87",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (88).jpg",
      alt: "Seimens — Photo 88",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (89).jpg",
      alt: "Seimens — Photo 89",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (90).jpg",
      alt: "Seimens — Photo 90",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (91).jpg",
      alt: "Seimens — Photo 91",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (92).jpg",
      alt: "Seimens — Photo 92",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (93).jpg",
      alt: "Seimens — Photo 93",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (94).jpg",
      alt: "Seimens — Photo 94",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (95).jpg",
      alt: "Seimens — Photo 95",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (96).jpg",
      alt: "Seimens — Photo 96",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (97).jpg",
      alt: "Seimens — Photo 97",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (98).jpg",
      alt: "Seimens — Photo 98",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (99).jpg",
      alt: "Seimens — Photo 99",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (100).jpg",
      alt: "Seimens — Photo 100",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (101).jpg",
      alt: "Seimens — Photo 101",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (102).jpg",
      alt: "Seimens — Photo 102",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (103).jpg",
      alt: "Seimens — Photo 103",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (104).jpg",
      alt: "Seimens — Photo 104",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (105).jpg",
      alt: "Seimens — Photo 105",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (106).jpg",
      alt: "Seimens — Photo 106",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (107).jpg",
      alt: "Seimens — Photo 107",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (108).jpg",
      alt: "Seimens — Photo 108",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (109).jpg",
      alt: "Seimens — Photo 109",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (110).jpg",
      alt: "Seimens — Photo 110",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (111).jpg",
      alt: "Seimens — Photo 111",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (112).jpg",
      alt: "Seimens — Photo 112",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (113).jpg",
      alt: "Seimens — Photo 113",
    },
    {
      type: "image",
      src: "/projects/photography/Seimens/1 (114).jpg",
      alt: "Seimens — Photo 114",
    },
  ],

  videos: [],
},

{
  id: "the-paddelers",
  title: "The Paddelers",
  category: "Photography",
  year: "2026",
  description:
    "A photography project capturing visual moments, atmosphere, and details from The Paddelers.",

  cover: "/projects/photography/The paddelers/1 (1).jpg",

  photos: [
    {
      type: "image",
      src: "/projects/photography/The paddelers/1 (1).jpg",
      alt: "The Paddelers — Photo 01",
    },
    {
      type: "image",
      src: "/projects/photography/The paddelers/1 (2).jpg",
      alt: "The Paddelers — Photo 02",
    },
    {
      type: "image",
      src: "/projects/photography/The paddelers/1 (3).jpg",
      alt: "The Paddelers — Photo 03",
    },
    {
      type: "image",
      src: "/projects/photography/The paddelers/1 (4).jpg",
      alt: "The Paddelers — Photo 04",
    },
    {
      type: "image",
      src: "/projects/photography/The paddelers/1 (5).jpg",
      alt: "The Paddelers — Photo 05",
    },
    {
      type: "image",
      src: "/projects/photography/The paddelers/1 (6).jpg",
      alt: "The Paddelers — Photo 06",
    },
    {
      type: "image",
      src: "/projects/photography/The paddelers/1 (7).jpg",
      alt: "The Paddelers — Photo 07",
    },
    {
      type: "image",
      src: "/projects/photography/The paddelers/1 (8).jpg",
      alt: "The Paddelers — Photo 08",
    },
    {
      type: "image",
      src: "/projects/photography/The paddelers/1 (9).jpg",
      alt: "The Paddelers — Photo 09",
    },
    {
      type: "image",
      src: "/projects/photography/The paddelers/1 (10).jpg",
      alt: "The Paddelers — Photo 10",
    },
    {
      type: "image",
      src: "/projects/photography/The paddelers/1 (11).jpg",
      alt: "The Paddelers — Photo 11",
    },
    {
      type: "image",
      src: "/projects/photography/The paddelers/1 (12).jpg",
      alt: "The Paddelers — Photo 12",
    },
    {
      type: "image",
      src: "/projects/photography/The paddelers/1 (13).jpg",
      alt: "The Paddelers — Photo 13",
    },
    {
      type: "image",
      src: "/projects/photography/The paddelers/1 (14).jpg",
      alt: "The Paddelers — Photo 14",
    },
    {
      type: "image",
      src: "/projects/photography/The paddelers/1 (15).jpg",
      alt: "The Paddelers — Photo 15",
    },
    {
      type: "image",
      src: "/projects/photography/The paddelers/1 (16).jpg",
      alt: "The Paddelers — Photo 16",
    },
  ],

  videos: [],
},

{
  id: "f-and-m",
  title: "F&M",
  category: "Cinematography",
  year: "2026",
  description:
    "A cinematic visual project created for F&M, focused on visual storytelling and cinematic production.",

  cover: "/projects/cinematography/F&M/cover.jpg",

  photos: [],

  videos: [
    {
      type: "video",
      src:"https://play.gumlet.io/embed/6a7b18478fd90b58aa37ff6c"
,
      alt: "F&M — Cinematography Film",
    },
  ],
},

{
  id: "m-and-j",
  title: "M&J",
  category: "Cinematography",
  year: "2026",
  description:
    "A cinematic visual project created for M&J, focused on visual storytelling and cinematic production.",

  cover: "/projects/cinematography/M&J/cover.jpg",

  photos: [],

  videos: [
    {
      type: "video",
      src: "https://play.gumlet.io/embed/6a7b0df28fd90b58aa36bfd0",
      alt: "M&J — Cinematography Film",
    },
  ],
},

  // =========================
  // REELS
  // =========================

  {
    id: "el-asatza-lawyers",
    title: "El Asatza Lawyers",
    category: "Reels",
    year: "2026",
    description:
      "A collection of short-form visual content created for El Asatza Lawyers.",

    cover: "/projects/reels/el-asatza-lawyers/cover.jpg",

    photos: [],

    videos: [
      {
        type: "video",
        src: "https://play.gumlet.io/embed/6a7b26cd8fd90b58aa39c16a",
        alt: "El Asatza Lawyers — Reel 01",
      },
      {
        type: "video",
        src: "https://play.gumlet.io/embed/6a7b26cdcb5da34c77613b5e",
        alt: "El Asatza Lawyers — Reel 02",
      },
      {
        type: "video",
        src: "https://play.gumlet.io/embed/6a7b26cd8fd90b58aa39c16c",
        alt: "El Asatza Lawyers — Reel 03",
      },
      {
        type: "video",
        src: "https://play.gumlet.io/embed/6a7b26cd97f243488d751f0d",
        alt: "El Asatza Lawyers — Reel 04",
      },
    ],
  },


  {
    id: "firnas-agency",
    title: "Firnas Agency",
    category: "Reels",
    year: "2026",
    description:
      "Short-form visual content created for Firnas Agency.",

    cover: "/projects/reels/firnas-agency/cover.jpg",

    photos: [],

    videos: [
      {
        type: "video",
        src: "https://play.gumlet.io/embed/6a7b228b8fd90b58aa3941dc",
        alt: "Firnas Agency — Reel 01",
      },
      {
        type: "video",
        src: "https://play.gumlet.io/embed/6a7b228b8fd90b58aa3941da",
        alt: "Firnas Agency — Reel 02",
      },
      {
        type: "video",
        src: "https://play.gumlet.io/embed/6a7b228b8fd90b58aa3941e1",
        alt: "Firnas Agency — Reel 03",
      },
      {
        type: "video",
        src: "https://play.gumlet.io/embed/6a7b228bcb5da34c7760bf9b",
        alt: "Firnas Agency — Reel 04",
      },
      {
        type: "video",
        src: "https://play.gumlet.io/embed/6a7b228bcb5da34c7760bf9d",
        alt: "Firnas Agency — Reel 05",
      },
      {
        type: "video",
        src: "https://play.gumlet.io/embed/6a7b228b97f243488d74a3b2",
        alt: "Firnas Agency — Reel 06",
      },
      {
        type: "video",
        src: "https://play.gumlet.io/embed/6a7b228b97f243488d74a3ad",
        alt: "Firnas Agency — Reel 07",
      },
    ],
  },


  {
    id: "foxy-box",
    title: "Foxy Box",
    category: "Reels",
    year: "2026",
    description:
      "Short-form visual content created for Foxy Box.",

    cover: "/projects/reels/foxy-box/cover.jpg",

    photos: [],

    videos: [
      {
        type: "video",
        src: "https://play.gumlet.io/embed/6a7b24dfcb5da34c776102cb",
        alt: "Foxy Box — Reel 01",
      },
      {
        type: "video",
        src: "https://play.gumlet.io/embed/6a7b24dfcb5da34c776102ce",
        alt: "Foxy Box — Reel 02",
      },
      {
        type: "video",
        src: "https://play.gumlet.io/embed/6a7b24df97f243488d74e628",
        alt: "Foxy Box — Reel 03",
      },
      {
        type: "video",
        src: "https://play.gumlet.io/embed/6a7b24dfcb5da34c776102c9",
        alt: "Foxy Box — Reel 04",
      },
      {
        type: "video",
        src: "https://play.gumlet.io/embed/6a7b24df8fd90b58aa39854d",
        alt: "Foxy Box — Reel 05",
      },
      {
        type: "video",
        src: "https://play.gumlet.io/embed/6a7b24dfcb5da34c776102c7",
        alt: "Foxy Box — Reel 06",
      },
    ],
  },


  {
    id: "modelage",
    title: "Modelage",
    category: "Reels",
    year: "2026",
    description:
      "Short-form visual content created for Modelage.",

    cover: "/projects/reels/modelage/cover.jpg"
,

    photos: [],

    videos: [
      {
        type: "video",
        src: "https://play.gumlet.io/embed/6a7b2bbf97f243488d75af8b",
        alt: "Modelage — Reel 01",
      },
    ],
  },


  {
    id: "property-maker",
    title: "Property Maker",
    category: "Reels",
    year: "2026",
    description:
      "Short-form visual content created for Property Maker.",

    cover: "/projects/reels/property-maker/cover.jpg",

    photos: [],

    videos: [
      {
        type: "video",
        src: "https://play.gumlet.io/embed/6a7b21168fd90b58aa391a6e",
        alt: "Property Maker — Reel 01",
      },
      {
        type: "video",
        src: "https://play.gumlet.io/embed/6a7b211697f243488d747aa2",
        alt: "Property Maker — Reel 03",
      },
      {
        type: "video",
        src: "https://play.gumlet.io/embed/6a7b2116cb5da34c7760970e",
        alt: "Property Maker — Reel 04",
      },
      
    ],
  },
 {
  id: "floor-hub-reel",
  title: "Floor Hub",
  category: "Reels",
  year: "2026",
  description: "Short-form visual content created for Flor Hub.",

  cover: "/projects/reels/floor-hub/cover.jpg",

  photos: [],

  videos: [
    {
      type: "video",
      src: "https://play.gumlet.io/embed/6a7bba8ccb5da34c776d0a34",
      alt: "Flor Hub — Reel 01",
    },
    {
      type: "video",
      src: "https://play.gumlet.io/embed/6a7bba8ccb5da34c776d0a3a",
      alt: "Flor Hub — Reel 02",
    },
    {
      type: "video",
      src: "https://play.gumlet.io/embed/6a7bba8c8fd90b58aa458b79",
      alt: "Flor Hub — Reel 03",
    },
    {
      type: "video",
      src: "https://play.gumlet.io/embed/6a7bba8ccb5da34c776d0a37",
      alt: "Flor Hub — Reel 04",
    },
    {
      type: "video",
      src: "https://play.gumlet.io/embed/6a7bba8c97f243488d80dcd4",
      alt: "Flor Hub — Reel 05",
    },
    {
      type: "video",
      src: "https://play.gumlet.io/embed/6a7bba8c8fd90b58aa458b73",
      alt: "Flor Hub — Reel 06",
    },
    {
      type: "video",
      src: "https://play.gumlet.io/embed/6a7bc9658fd90b58aa4668fb",
      alt: "Flor Hub — Reel 07",
    },
  ],
},
  // =========================
// COMMERCIAL ADS
// =========================

{
  id: "floor-hub",
  title: "Floor Hub",
  category: "Commercial Ads",
  year: "2026",
  description:
    "A commercial visual project created for Floor Hub, focused on product presentation and cinematic visual storytelling.",

  cover: "/projects/commercial-ads/floor-hub/cover.jpg",

  photos: [],

  videos: [
    {
      type: "video",
      src: "https://play.gumlet.io/embed/6a7b2237cb5da34c7760b66d",
      alt: "Floor Hub — Commercial Film",
    },
    {
      type: "video",
      src: "https://play.gumlet.io/embed/6a7bba5ccb5da34c776d06d3",
      alt: "Floor Hub — Commercial Film",
    },
  ],
},



{
  id: "m-a-factory",
  title: "M & A Factory",
  category: "Commercial Ads",
  year: "2026",
  description:
    "A commercial visual project created for M & A Factory with a cinematic approach to brand storytelling.",

  cover: "/projects/commercial-ads/m-a-factory/cover.jpg",

  photos: [],

  videos: [
    {
      type: "video",
      src: "https://play.gumlet.io/embed/6a7b2fe597f243488d7627ff",
      alt: "M & A Factory — Commercial Film",
    },
  ],
},

{
  id: "modelage-commercial",
  title: "Modelage",
  category: "Commercial Ads",
  year: "2026",
  description:
    "A commercial visual project created for Modelage, combining cinematic visuals with modern brand storytelling.",

  cover: "/projects/commercial-ads/modelage/cover.jpg",

  photos: [],

  videos: [
    {
      type: "video",
      src: "https://play.gumlet.io/embed/6a7b307a8fd90b58aa3adbde",
      alt: "Modelage — Commercial Film 01",
    },
    {
      type: "video",
      src: "https://play.gumlet.io/embed/6a7b323297f243488d766d14",
      alt: "Modelage — Commercial Film 02",
    },
    {
      type: "video",
      src: "https://play.gumlet.io/embed/6a7b331a97f243488d768c22",
      alt: "Modelage — Commercial Film 03",
    },
    {
      type: "video",
      src: "https://play.gumlet.io/embed/6a7b36898fd90b58aa3b9865",
      alt: "Modelage — Commercial Film 04",
    },
    {
      type: "video",
      src: "https://play.gumlet.io/embed/6a7bb48397f243488d808a57",
      alt: "Modelage — Commercial Film 05",
    },
  ],
},

];
