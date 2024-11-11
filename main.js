const skills = [
    { name: "Roblox Building", description: "Advanced proficiency in Low & High Poly Roblox building themes." },
    { name: "Roblox UI Design", description: "Learning low-poly/medium-poly Graphical User Interface Design." },
    { name: "Luau Programmer", description: "Learning/Intermediate Luau Programmer." },
    { name: "Clothing Designer", description: "Learning/Intermediate Clothing Designer for the Roblox Platform." },
];

const categories = {
    'Building': ['Low-Poly', 'High-Poly', 'Environmental Design'],
    'Scripting': ['Luau', 'Menu', 'Database', 'User Interface'],
    'UI Design': ['Low-Poly UI', 'Medium-Poly UI'],
    'Clothing Design': ['Staff Shirts', 'Plain Shirts'],
};

const previousWork = [
    { name: "High-Poly Road", Image: "HighPoly1.png", category: "Building", type: "High-Poly" },
    { name: "High-Poly Entrance", Image: "HighPoly2.png", category: "Building", type: "High-Poly" },
    { name: "High-Poly Entrance 2", Image: "HighPoly3.png", category: "Building", type: "High-Poly" },
    { name: "High-Poly Interior", Image: "HighPoly4.png", category: "Building", type: "High-Poly" },
    { name: "Medium-Poly Radio", Image: "MediumPolyRadio.png", category: "UI Design", type: "Medium-Poly UI" },
    { name: "Low-Poly Cave", Image: "LowPolyCave.png", category: "Building", type: "Low-Poly" },
    { name: "Low-Poly Cave Entrance", Image: "LowPolyCaveEntrance.png", category: "Building", type: "Low-Poly" },
    { name: "Low-Poly Map Design", Image: "LowPolyMapDesign.png", category: "Building", type: "Low-Poly" },
    { name: "Low-Poly Cabin", Image: "LowPolyCabin.png", category: "Building", type: "Low-Poly" },
    { name: "Low-Poly Snowman", Image: "LowPolySnowMan.png", category: "Building", type: "Low-Poly" },
    { name: "Low-Poly Cabin", Image: "LowPolyRNGCabin.png", category: "Building", type: "Low-Poly" },
    { name: "Low-Poly Map Design", Image: "LowPolyRNGMapDesign.png", category: "Building", type: "Low-Poly" },
    { name: "Low-Poly Cave Entrance", Image: "LowPolyRNGCaveEntrance.png", category: "Building", type: "Low-Poly" },
];

const commissions = [
    {
        name: "Voice Control",
        logo: "VoiceControl.png",
        payout: "200K Robux",
        description: "Tasked with the building of World 3 for Voice Control & RunUp Studios",
        tags: ["Building"],
        link: "https://www.roblox.com/games/17800309532/Voice-Control"
    },
    {
        name: "Al's RNG",
        logo: "AlsRNG.png",
        payout: "20K Robux",
        description: "Tasked with building the main map for AL's Rng and GreenBey56's Studio.",
        tags: ["Building"],
        link: "https://www.roblox.com/games/16638124623/Als-RNG"
    },
];

const skillsContainer = document.getElementById('skills-container');
const commissionsContainer = document.getElementById('commissions-container');
const loadMoreCommissionsBtn = document.getElementById('load-more-commissions');
const showLessCommissionsBtn = document.getElementById('show-less-commissions');
const loadMorePreviousBtn = document.getElementById('load-more-previous');
const showLessPreviousBtn = document.getElementById('show-less-previous');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalLogo = document.getElementById('modal-logo');
const modalPayout = document.getElementById('modal-payout');
const modalDescription = document.getElementById('modal-description');
const categoryFilter = document.getElementById('category-filter');
const typeFilter = document.getElementById('type-filter');
const galleryContainer = document.getElementById('previous-container');
document.getElementById('current-year').textContent = new Date().getFullYear();

const commissionsPerPage = 4;
let currentCommissionsPage = 1;

function loadCommissions(page) {
    const start = (page - 1) * commissionsPerPage;
    const end = start + commissionsPerPage;
    const commissionSlice = commissions.slice(start, end);

    commissionSlice.forEach(commission => {
        const commissionItem = document.createElement('div');
        commissionItem.className = 'commission-item';
        commissionItem.innerHTML = `
            <img src="Images/${commission.logo}" alt="${commission.name}">
            <div class="commission-name">${commission.name}</div>
        `;
        commissionItem.addEventListener('click', () => showModal(commission));
        commissionsContainer.appendChild(commissionItem);
    });

    updateCommissionButtons();
}

function showModal(commission) {
    modalTitle.innerHTML = `<a href="${commission.link}" target="_blank">${commission.name}</a>`;
    modalLogo.src = `Images/${commission.logo}`;
    modalPayout.textContent = `Payout: ${commission.payout}`;
    modalDescription.textContent = commission.description;

    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 10);
}

function loadWork(page) {
    const start = (page - 1) * 4;
    const end = start + 4;
    const workSlice = previousWork.slice(start, end);

    workSlice.forEach(work => {
        const workItem = document.createElement('div');
        workItem.className = 'work-item';
        workItem.innerHTML = `
            <img src="Images/${work.Image}" alt="${work.name}" class="work-image">
            <div class="work-name">${work.name}</div>
        `;
        workItem.querySelector('img').addEventListener('click', () => showWorkModal(work));
        galleryContainer.appendChild(workItem);
    });
}

function showWorkModal(work) {
    modalTitle.textContent = work.name;
    modalLogo.src = `Images/${work.Image}`;
    modalDescription.textContent = `Category: ${work.category}, Type: ${work.type}`;
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 10);
}

loadCommissions(currentCommissionsPage);
