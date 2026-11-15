// export function createChannelElement(channel, onChannelClick) {
//     const div = document.createElement('div');

//     div.className = "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors";

//     div.setAttribute('data-id', channel.id);

//     div.innerHTML = `
//         <span class="text-[#FCC62D] font-mono text-sm font-bold">
//             ${channel.channelNumber}
//         </span>
        
//         <img src="${channel.logo}" alt="${channel.name}" class="w-10 h-10 rounded bg-white p-1 object-contain">

//         <div class="flex flex-col">
//             <span class="text-white font-medium text-sm">${channel.name}</span>
//             <span class="text-gray-400 text-xs">${channel.category}</span>
//         </div>
//     `;

//     div.addEventListener('click', () => {
//         onChannelClick(channel, div);
//     });

//     return div;
// }

// export function renderChannelList(channels, containerId, onChannelClick) {
//     const container = document.getElementById(containerId);
//     container.innerHTML = "";

//     channels.forEach(channel => {
//         const channelElement = createChannelElement(channel, onChannelClick);
//         container.appendChild(channelElement);
//     });
// }

// export function updatePreview(channel) {
//     document.getElementById('preview-image').src = channel.previewImage;
//     document.getElementById('preview-title').textContent = channel.name;
//     document.getElementById('preview-category').textContent = channel.category;
// }

// export function setActiveChannel(clickedElement) {
//     const allChannels = document.querySelectorAll('#channel-list > div');
//     allChannels.forEach(el => {
//         el.classList.remove('bg-[#2F6FED]/40', 'border', 'border-[#2F6FED]');
//     });

//     clickedElement.classList.add('bg-[#2F6FED]/40', 'border', 'border-[#2F6FED]');
// }

const ACTIVE_CLASSES = ['bg-purple-600', 'text-white'];
const INACTIVE_CLASSES = ['bg-transparent', 'text-gray-300', 'hover:bg-[#2F6FED]/20'];

export function createChannelElement(channel, onChannelClick) {
    const div = document.createElement('div');

    div.className = "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors border-l-4 border-transparent hover:bg-[#2F6FED]/20";

    div.setAttribute('data-id', channel.id);

    div.innerHTML = `
        <span class="text-[#FCC62D] font-mono text-sm font-bold">
            ${channel.channelNumber}
        </span>

        <img src="${channel.logo}" alt="${channel.name}" loading="lazy" class="w-10 h-10 rounded bg-white p-1 object-contain">

        <div class="flex flex-col">
            <span class="text-white font-medium text-sm">${channel.name}</span>
            <span class="text-gray-300 text-xs">${channel.category}</span>
        </div>
    `;

    div.addEventListener('click', () => {
        onChannelClick(channel, div);
    });

    return div;
}

export function renderChannelList(channels, containerId, onChannelClick) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    channels.forEach(channel => {
        const channelElement = createChannelElement(channel, onChannelClick);
        container.appendChild(channelElement);
    });
}

export function updatePreview(channel) {

    // Mise à jour de l'image et des textes de base
    document.getElementById('preview-image').src = channel.previewImage;
    document.getElementById('preview-title').textContent = channel.name;
    document.getElementById('preview-category').textContent = channel.category;

    // Mise à jour des infos du programme (EPG)
    if (channel.epg) {
        document.getElementById('program-title').textContent = channel.epg.currentProgram;
        document.getElementById('program-time').textContent = `${channel.epg.startTime} - ${channel.epg.endTime}`;
        
        // La barre de progression
        const progressBar = document.getElementById('program-progress');
        progressBar.style.width = `${channel.epg.progressPercentage}%`;
        
        // Optionnel : Changer la couleur de la barre si le programme est presque fini (ex: > 80%)
        if (channel.epg.progressPercentage > 80) {
            progressBar.classList.replace('bg-[#F04438]', 'bg-[#FCC62D]'); // Passe du rouge au jaune
        } else {
            progressBar.classList.replace('bg-[#FCC62D]', 'bg-[#F04438]'); // Reste rouge
        }
    }
}

export function setActiveChannel(clickedElement) {
    const allChannels = document.querySelectorAll('#channel-list > div');

    allChannels.forEach(el => {
        el.classList.remove(...ACTIVE_CLASSES);
        el.classList.add(...INACTIVE_CLASSES);
    });

    clickedElement.classList.remove(...INACTIVE_CLASSES);
    clickedElement.classList.add(...ACTIVE_CLASSES);
}