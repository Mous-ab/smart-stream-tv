export function createChannelElement(channel) {
    const div = document.createElement('div');

    div.className = "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors hover:bg-[#2F6FED]/200";

    div.setAttribute('data-if', channel.id);

    div.innerHTML = `
        <span class="text-[#FCC62D] font-mono text-sm font-bold">${channel.channelNumber}
    </span>
        
        <img src="${channel.logo}" alt="${channel.name}" class="w-10 h-10 rounded bg-white p-1 object-contain">

        <div class="flex flex-col">
            <span class="text-white font-medium text-sm">${channel.name}</span>
            <span class="text-gray-400 text-xs">${channel.category}</span>
        </div>
    `;

    return div;
}

export function renderChannelList(channels, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    channels.forEach(channels => {
        const channelElement = createChannelElement(channel);
        container.appendChild(channelElement);
    });
}