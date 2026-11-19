import heroStill from '../assets/images/hero-kitchen-still.jpg';
import kitchenPhoto from '../assets/images/editorial-kitchen.jpg';
import bathroomPhoto from '../assets/images/editorial-bathroom.jpg';
import wholeHomePhoto from '../assets/images/editorial-whole-home.jpg';
import aboutKitchenPhoto from '../assets/images/about-walnut-kitchen.jpg';
import processDrawing from '../assets/images/process-kitchen-drawing.jpg';
import kitchenGathering from '../assets/images/portfolio/kitchen-gathering.jpg';
import kitchenRange from '../assets/images/portfolio/kitchen-range.jpg';
import kitchenIsland from '../assets/images/portfolio/kitchen-island.jpg';
import livingStair from '../assets/images/portfolio/living-stair.jpg';
import livingSofas from '../assets/images/portfolio/living-sofas.jpg';
import livingWide from '../assets/images/portfolio/living-wide.jpg';
import officeShelves from '../assets/images/portfolio/office-shelves.jpg';
import officeDesk from '../assets/images/portfolio/office-desk.jpg';
import bathVanity from '../assets/images/portfolio/bath-vanity.jpg';
import bathTub from '../assets/images/portfolio/bath-tub.jpg';
import bathShower from '../assets/images/portfolio/bath-shower.jpg';
import outdoorHearth from '../assets/images/portfolio/outdoor-hearth.jpg';
import outdoorPool from '../assets/images/portfolio/outdoor-pool.jpg';
import outdoorFront from '../assets/images/portfolio/outdoor-front.jpg';
import marblePhoto from '../assets/images/materials/marble-shower.jpg';
import quartzitePhoto from '../assets/images/materials/quartzite-slab.jpg';
import naturalStonePhoto from '../assets/images/materials/natural-stone.jpg';
import walnutPhoto from '../assets/images/materials/walnut.jpg';
import whiteOakPhoto from '../assets/images/materials/white-oak.jpg';
import cabinetryPhoto from '../assets/images/materials/european-cabinetry.jpg';
import investmentKitchen from '../assets/images/investment-kitchen.jpg';

export const company = {
	name: 'Oak & Marble',
	mark: 'Design · Build · Remodel',
	email: 'hello@oakandmarble.com',
	place: 'Colleyville and North Texas',
};

export const heroPhoto = {
	src: heroStill.src,
	width: heroStill.width,
	height: heroStill.height,
	alt: 'A kitchen with a marble island, a dark bowl, a brass faucet, walnut cabinets, and an arched opening into a living room.',
};

export const heroVideo = {
	src: '/hero-kitchen.mp4',
	poster: '/hero-kitchen-poster.jpg',
	width: 2560,
	height: 1440,
	label: 'A view from oak kitchen cabinets across a marble island toward a living room and stair.',
};

export const aboutPhoto = {
	image: aboutKitchenPhoto,
	alt: 'A kitchen with walnut cabinets, a marble island, and two dome pendants.',
	focus: 'center',
};

export const processPhoto = {
	image: processDrawing,
	alt: 'A line drawing of a kitchen with an island, three stools, globe pendants, and glass-front cabinets.',
	focus: 'center',
};

export const processIntro = {
	title: 'From Vision to Reality.',
	text: 'The consultation is complimentary for a limited time. The design fee is separate and is not credited toward construction.',
};

export const processPoints = [
	{
		index: '01',
		name: 'Initial consultation',
		text: 'Complimentary for a limited time. We learn how you live, and what the home can become.',
	},
	{
		index: '02',
		name: 'Concept and design',
		text: 'A separate design phase, with its own fee. That fee is not credited toward construction.',
	},
	{
		index: '03',
		name: 'Material selection',
		text: 'Visualizations, cabinetry, fixtures, and finishes, in one design.',
	},
	{
		index: '04',
		name: 'Construction',
		text: 'An estimate follows the approved design and the agreed scope. Financing is not currently offered.',
	},
];

export const processClose = {
	index: '05',
	name: 'The final reveal',
	text: 'A walkthrough, then the home is ready. A two-year warranty covers labor and materials, subject to the project warranty terms.',
	link: 'Get in touch',
};

export const editorial = [
	{
		title: 'The Kitchen & Cabinetry',
		image: kitchenPhoto,
		alt: 'A kitchen with a marble island, globe pendants, light wood cabinets, and three stools.',
		focus: 'center 62%',
	},
	{
		title: 'The Bathroom',
		image: bathroomPhoto,
		alt: 'A bathroom with a walnut vanity, arched mirrors, marble walls, a glass shower, and a freestanding tub.',
		focus: 'center',
	},
	{
		title: 'The Whole Home',
		image: wholeHomePhoto,
		alt: 'A living room with curved sofas, a fireplace, tall windows, and a stair.',
		focus: 'center 42%',
	},
];

export const portfolio = [
	{
		room: 'Kitchen design & Remodel',
		title: 'The kitchen',
		text: 'Light wood, a stone island, and brass fittings. Cooking and gathering share the room.',
		photos: [
			{
				image: kitchenGathering,
				alt: 'A kitchen with a light wood island, brass stools, a dining table, and wood upper cabinets.',
				caption: 'Island, dining table, and light wood cabinets.',
			},
			{
				image: kitchenRange,
				alt: 'A gas range in a stone backsplash, with a brass faucet and a marble counter.',
				caption: 'Stone backsplash and a brass faucet.',
			},
			{
				image: kitchenIsland,
				alt: 'A kitchen island with a brass faucet, light wood cabinets, and the dining table beyond.',
				caption: 'The island, seen from the range.',
			},
		],
	},
	{
		room: 'Whole home design & remodel',
		title: 'The living room',
		text: 'Tall windows, a fireplace, and a stair that stays part of the room.',
		photos: [
			{
				image: livingStair,
				alt: 'A living room with white sofas, a stone fireplace, light wood floors, and a stair.',
				caption: 'Sofas, a fireplace, and the stair.',
			},
			{
				image: livingSofas,
				alt: 'A living room with curved white sofas, a fireplace, and a stair under a tall ceiling.',
				caption: 'Curved seating under a tall ceiling.',
			},
			{
				image: livingWide,
				alt: 'A wide living room with white sofas, a loft above, and glass doors to the yard.',
				caption: 'The room opening toward the yard.',
			},
		],
	},
	{
		room: 'Whole home design & remodel',
		title: 'The office',
		text: 'Charcoal walls, a glass desk, and light wood shelves.',
		photos: [
			{
				image: officeShelves,
				alt: 'An office with charcoal walls, a glass desk, a light chair, and light wood built-in shelves.',
				caption: 'A glass desk facing light wood shelves.',
			},
			{
				image: officeDesk,
				alt: 'An office with a glass desk, a patterned chair, charcoal walls, and open shelves.',
				caption: 'The desk, the chair, and a doorway to the hall.',
			},
		],
	},
	{
		room: 'Bathroom design & remodel',
		title: 'The bathroom',
		text: 'Oak, marble, and a freestanding tub. A quiet room at the end of the day.',
		photos: [
			{
				image: bathVanity,
				alt: 'A bathroom with a light oak double vanity, a marble top, and two mirrors.',
				caption: 'Oak vanity and paired mirrors.',
			},
			{
				image: bathTub,
				alt: 'A freestanding tub against a marble wall.',
				caption: 'A freestanding tub against marble.',
			},
			{
				image: bathShower,
				alt: 'A glass shower and a freestanding tub in a marble bathroom.',
				caption: 'Glass shower and the tub beyond.',
			},
		],
	},
	{
		room: 'Whole home design & remodel',
		title: 'Beside the pool',
		text: 'A covered room next to the water, with a fireplace for the evening.',
		photos: [
			{
				image: outdoorHearth,
				alt: 'A covered patio with a fireplace, blue seating, and a pool beyond.',
				caption: 'Fireplace, seating, and the pool.',
			},
			{
				image: outdoorPool,
				alt: 'A swimming pool lit at dusk, with lounge chairs along the water.',
				caption: 'The pool, lit for the evening.',
			},
			{
				image: outdoorFront,
				alt: 'The front of a stone house at dusk, with a wood door and warm windows.',
				caption: 'The front of the house at dusk.',
			},
		],
	},
];

export const services = [
	{
		title: 'Whole-home',
		kicker: 'Design & remodeling',
		text: 'Unified planning and remodeling across the rooms that shape everyday life.',
	},
	{
		title: 'Kitchen',
		kicker: 'Primary focus',
		text: 'Personalized layouts, cabinetry, surfaces, finishes, and construction. A thoughtfully designed center of the home.',
		primary: true,
	},
	{
		title: 'Bathroom',
		kicker: 'Design & remodeling',
		text: 'Thoughtful materials, refined fixtures, and a considered use of space.',
	},
];

export const principles = [
	{
		title: 'Thoughtful design',
		text: 'We begin with lifestyle, function, and a tailored design vision.',
	},
	{
		title: 'Personal service',
		text: 'A Sales Director and Lead Designer guide each client through the journey.',
	},
	{
		title: 'Complete delivery',
		text: 'From design approval and permitting to construction and the final walkthrough.',
	},
];

export const statement = {
	missionLabel: 'Mission Statement',
	mission:
		"To transform homes through thoughtful design, quality craftsmanship, and a personalized remodeling experience that brings every client's vision to life.",
};

export const assurance = [
	{
		title: '10+ years',
		text: 'Residential design and remodeling experience on the team.',
	},
	{
		title: 'Personal guidance',
		text: 'A Sales Director and Lead Designer are the primary contacts.',
	},
	{
		title: '2-year warranty',
		text: 'Labor and materials, subject to the project warranty terms.',
	},
];

export const materials = [
	{
		title: 'Marble',
		text: 'Natural veining',
		image: marblePhoto,
		alt: 'A marble shower wall with soft gray veining and a bronze rain shower.',
		focus: 'center',
	},
	{
		title: 'Quartzite',
		text: 'Distinctive stone',
		image: quartzitePhoto,
		alt: 'The corner of a polished quartzite slab with gray and cream movement.',
		focus: 'center',
	},
	{
		title: 'Natural stone',
		text: 'Organic variation',
		image: naturalStonePhoto,
		alt: 'A warm travertine niche with a recessed shelf and soft light across the stone.',
		focus: '62% center',
	},
	{
		title: 'White oak',
		text: 'Light warmth',
		image: whiteOakPhoto,
		alt: 'A light oak drawer front with a recessed pull and a stone countertop.',
		focus: 'center',
	},
	{
		title: 'Walnut',
		text: 'Rich texture',
		image: walnutPhoto,
		alt: 'Walnut cabinet doors with a warm vertical grain.',
		focus: 'center top',
	},
	{
		title: 'European cabinetry',
		text: 'Modern form',
		image: cabinetryPhoto,
		alt: 'A flat-panel cabinet in a warm taupe finish with a recessed pull and a lit niche.',
		focus: 'center 42%',
	},
];

export const investmentPhoto = {
	image: investmentKitchen,
	alt: 'A dark kitchen with brass hardware, a white stone island, globe pendants, and a herringbone wood floor.',
};

export const investmentGuide = {
	title: 'Clarity before construction.',
	text: 'Every project is unique. A typical project cost depends on the design, materials, and scope. It is not a starting price, a minimum budget, or a fixed quote.',
};

const kitchenInvestment = '$120,000–$170,000';
const bathroomInvestment = '$75,000';

const kitchenRows = [
	{
		title: 'Cabinetry',
		text: 'Standard cabinets, with little decorative detail and a limited choice of color and finish.',
	},
	{
		title: 'Countertops',
		text: 'Entry-level quartz, or a surface in a similar range, with a standard edge. Slab choice and pattern matching are limited.',
	},
	{
		title: 'Layout & Structural',
		text: 'The kitchen footprint stays largely as it is. Appliances, plumbing, walls, windows, and doorways generally remain where they are.',
	},
	{
		title: 'Lighting',
		text: 'Recessed lights or replacement fixtures on the existing electrical layout. Layering, extra controls, and cabinet lighting are limited.',
	},
	{
		title: 'Tile & Backsplash',
		text: 'Ceramic, porcelain, or subway tile in a straightforward pattern, with little custom detailing.',
	},
	{
		title: 'Fixtures',
		text: 'Standard faucets, sinks, cabinet hardware, and plumbing fixtures, chosen for fit and availability.',
	},
	{
		title: 'Design & Project Management',
		text: 'A designer and a project manager, drawings, a defined scope, and an agreed project price, for a smaller, finish-focused project. The consultation is complimentary. The design fee is separate and is not credited toward construction.',
	},
	{
		title: 'Appliances',
		text: 'Design and specification for a standard package, often in the existing locations, without custom panels or major utility changes. The purchase cost is not included in this range.',
	},
];

export const investmentSheets = [
	{
		id: 'kitchen',
		label: 'Kitchen',
		amount: kitchenInvestment,
		text: 'A large, finish-only kitchen at a basic level. Typical cost range for this scope, not a quote or a starting price. Appliance purchase is not included.',
		image: kitchenPhoto,
		alt: 'A kitchen with a marble island, globe pendants, light wood cabinets, and three stools.',
		focus: 'center 46%',
		rows: kitchenRows,
	},
	{
		id: 'bathroom',
		label: 'Bathroom',
		amount: bathroomInvestment,
		text: 'Typical project cost, not a starting price, a minimum budget, or a fixed quote.',
		image: bathroomPhoto,
		alt: 'A bathroom with a walnut vanity, arched mirrors, marble walls, a glass shower, and a freestanding tub.',
		focus: 'center',
		rows: [] as { title: string; text: string }[],
	},
	{
		id: 'whole-home',
		label: 'Whole home',
		amount: 'Custom quote',
		text: 'Whole-home remodeling is priced according to the scope of the project and the approved design.',
		image: wholeHomePhoto,
		alt: 'A living room with curved sofas, a fireplace, tall windows, and a stair.',
		focus: 'center 42%',
		rows: [] as { title: string; text: string }[],
	},
];

export const investmentTerms = [
	'These figures are typical project costs. They are not starting prices, minimum budgets, or fixed quotes.',
	'For a limited time, the initial consultation is complimentary.',
	'Design is a separate phase. The design fee is not credited toward construction.',
	'Construction is priced separately, from the approved design and the agreed scope.',
	'Financing is not currently offered.',
];

export const investments = [
	{
		title: 'Kitchen design & remodeling',
		amount: kitchenInvestment,
		note: 'Typical cost range. Not a quote or a starting price.',
	},
	{
		title: 'Bathroom design & remodeling',
		amount: bathroomInvestment,
		note: 'Typical project cost. Not a quote or a starting price.',
	},
	{
		title: 'Whole-home design & remodeling',
		amount: 'Custom quote',
		note: 'Priced from the scope and the approved design.',
	},
];

export const projectTypes = [
	'Kitchen design & remodeling',
	'Bathroom design & remodeling',
	'Whole-home design & remodeling',
	'Not sure yet',
];
