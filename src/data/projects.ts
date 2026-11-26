import maternityCover from '../assets/projects/maternity-care.webp';
import maternityDetail from '../assets/projects/maternity-volvelle.webp';
import revivrCover from '../assets/projects/classroom-revivr.webp';
import revivrDetail from '../assets/projects/revivr-interface.webp';
import subibajaCover from '../assets/projects/subibaja.webp';
import subibajaDetail from '../assets/projects/subibaja-cards.webp';
import comocomoCover from '../assets/projects/comocomo.webp';
import comocomoDetail from '../assets/projects/comocomo-visual-system.webp';

export const projects = [
  {
    slug: 'respectful-maternity-care-in-colombia',
    title: 'Respectful Maternity Care in Colombia',
    label: 'Participatory design · Healthcare education',
    description: 'A master’s thesis on how traditional midwifery can inform respectful emergency maternity care training in Colombia.',
    context: 'Individual master’s thesis · TU Delft · Bogotá and Chocó, Colombia · 2025–2026',
    credits: 'In collaboration with Laerdal Global Health and AFNEMO.',
    cover: maternityCover,
    coverAlt: 'Illustrated maternity communication volvelles in pink, green, and orange.',
    detail: maternityDetail,
    detailAlt: 'An annotated pink volvelle showing the layers and prompts for a role-play scenario.',
    sections: [
      { title: 'Learning from traditional midwives', body: 'I worked with traditional midwives and community partners in Bogotá and Chocó through fieldwork and co-creation. Their accounts showed how listening and communication help build trust with mothers, especially when traditional and biomedical caregivers come together in an emergency.' },
      { title: 'Turning those insights into training', body: 'I designed a workshop and nine circular role-play tools called Respectful Maternity Communication Volvelles. Each scenario invites participants to explore communication from the perspective of the mother, traditional midwife, or doctor. Medical students, doctors, and community partners gave feedback on the materials.' },
    ],
  },
  {
    slug: 'classroom-revivr',
    title: 'Classroom RevivR',
    label: 'UX research and design · CPR education',
    description: 'A story-driven redesign of classroom CPR training for middle and high school students.',
    context: 'UXAD master’s course · TU Delft · Delft, Netherlands · 2024',
    credits: 'In collaboration with the course team, Laerdal Medical, and the British Heart Foundation.',
    cover: revivrCover,
    coverAlt: 'An illustrated paramedic with four badges for emergency reporting, AED, CPR, and teamwork.',
    detail: revivrDetail,
    detailAlt: 'A Classroom RevivR prototype screen introducing the scenario with an illustrated paramedic.',
    sections: [
      { title: 'Evaluating the classroom experience', body: 'Our team combined a cognitive walkthrough and heuristic evaluation with research involving nine students and four teachers. Teamwork was already a strength. We identified opportunities to clarify when students should act, reduce repeated information, and make feedback easier to follow.' },
      { title: 'Redesigning the lesson as a story', body: 'In Paramedic Bootcamp, a guide takes students through a role-play scenario. Skill badges show progress, visual cues distinguish instructions from actions, and team quizzes and a live compression meter support practice. We tested the prototypes with six students before refining the concept.' },
    ],
  },
  {
    slug: 'subibaja',
    title: 'Subibaja',
    label: 'Physical product · Chronic pain',
    description: 'A tangible seesaw designed to help people living with chronic pain talk about the emotional and social dimensions of their experience.',
    context: 'Individual bachelor’s thesis · Universidad de los Andes · Bogotá and Cali, Colombia · 2022',
    credits: '',
    cover: subibajaCover,
    coverAlt: 'A wooden seesaw prototype surrounded by colorful pieces that represent emotional weights.',
    detail: subibajaDetail,
    detailAlt: 'Hands holding illustrated reflection cards that accompany the Subibaja seesaw.',
    sections: [
      { title: 'Starting with the language of pain', body: 'Interviews and group sessions with people living with chronic pain informed a series of exercises about how pain is described and shared. Metaphors such as weight, pressure, and balance became a way to explore experiences that can be difficult to put into words.' },
      { title: 'Making the metaphor tangible', body: 'The wooden seesaw, movable pieces, and reflection cards turn those metaphors into a hands-on conversation. Participants can name what feels heavy, consider what is within their control, and talk through actions or sources of support they might explore.' },
    ],
  },
  {
    slug: 'comocomo',
    title: 'Cómocomo',
    label: 'Brand design · Food education',
    description: 'A visual food campaign that invites children to explore ingredients through stories about superpowers.',
    context: 'Food and Entrepreneurial Opportunities · Universidad de los Andes · Bogotá, Colombia · 2022',
    credits: 'In collaboration with Juliana Mejía.',
    cover: comocomoCover,
    coverAlt: 'Cómocomo food packaging mockups for snack packs, kiwis, and yogurt.',
    detail: comocomoDetail,
    detailAlt: 'The Cómocomo wordmark, illustrated fruits, and three children imagining food-inspired superpowers.',
    sections: [
      { title: 'Exploring how families talk about food', body: 'We used interviews and photo diaries with five families and two dietitians, then invited children to imagine what powers different ingredients might give them. That playful language shaped a concept that gives children a role in choosing and preparing food with their families.' },
      { title: 'Building a campaign around those stories', body: 'The final visual system pairs food packaging with illustrated characters and food-inspired superpowers. We prototyped the idea at a children’s day camp, where participants chose ingredients based on the powers they wanted to explore.' },
    ],
  },
];
