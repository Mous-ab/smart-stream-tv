export function initSearch(channels, renderFunction, onChannelClick) {
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase().trim();

        const filteredChannels = channels.filter(channel => {
            const nameMatch = channel.name.toLowerCase().includes(searchTerm);
            const numberMatch = channel.channelNumber.includes(searchTerm);

            return nameMatch || numberMatch;
        });

        renderFunction(filteredChannels, 'channel-list', onChannelClick);
    });
}