const ACTIVE_CLASSES = ['bg-purple-600', 'text-white'];
const INACTIVE_CLASSES = ['bg-transparent', 'text-gray-300', 'hover:bg-[#2F6FED]/20'];

let activeChannelId = null;

export function createChannelElement(channel, onChannelClick) {
    const { id, channelNumber, name, category, logo } = channel;

    const div = document.createElement('div');

    div.className = "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors border-l-4 border-transparent hover:bg-[#2F6FED]/20";

    div.setAttribute('data-id', id);

    div.innerHTML = `
        <span class="text-[#FCC62D] font-mono text-sm font-bold">
            ${channelNumber}
        </span>

        <img src="${logo}" alt="${name}" loading="lazy" class="w-10 h-10 rounded bg-white p-1 object-contain">

        <div class="flex flex-col">
            <span class="text-white font-medium text-sm">${name}</span>
            <span class="text-gray-300 text-xs">${category}</span>
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

    if (channels.length === 0) {
        container.innerHTML = `<p class="text-gray-400 text-sm text-center p-4">Aucune chaîne trouvée</p>`;
        return;
    }

    channels.forEach(channel => {
        const channelElement = createChannelElement(channel, onChannelClick);

        if (channel.id === activeChannelId) {
            channelElement.classList.remove(...INACTIVE_CLASSES);
            channelElement.classList.add(...ACTIVE_CLASSES);
        }

        container.appendChild(channelElement);
    });
}

export function updatePreview(channel) {
    const { previewImage, name, category, epg } = channel;

    document.getElementById('preview-image').src = previewImage;
    document.getElementById('preview-title').textContent = name;
    document.getElementById('preview-category').textContent = category;

    if (epg) {
        const { currentProgram, startTime, endTime, progressPercentage } = epg;

        document.getElementById('program-title').textContent = currentProgram;
        document.getElementById('program-time').textContent = `${startTime} - ${endTime}`;

        const progressBar = document.getElementById('program-progress');
        progressBar.style.width = `${progressPercentage}%`;

        if (progressPercentage > 80) {
            progressBar.classList.replace('bg-[#F04438]', 'bg-[#FCC62D]');
        } else {
            progressBar.classList.replace('bg-[#FCC62D]', 'bg-[#F04438]');
        }
    }
}

export function setActiveChannel(clickedElement) {
    activeChannelId = clickedElement.dataset.id;

    const allChannels = document.querySelectorAll('#channel-list > div');

    allChannels.forEach(el => {
        el.classList.remove(...ACTIVE_CLASSES);
        el.classList.add(...INACTIVE_CLASSES);
    });

    clickedElement.classList.remove(...INACTIVE_CLASSES);
    clickedElement.classList.add(...ACTIVE_CLASSES);
}