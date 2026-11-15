import { channelsData } from "../data/data.js";
import { renderChannelList, updatePreview, setActiveChannel } from "./ui.js";
import { initSearch } from "./search.js";

document.addEventListener('DOMContentLoaded', () => {
    const onChannelClick = (channel, element) => {
        updatePreview(channel);
        setActiveChannel(element);
        localStorage.setItem('lastChannelId', channel.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    renderChannelList(channelsData, 'channel-list', onChannelClick);

    initSearch(channelsData, renderChannelList, onChannelClick);

    const savedId = localStorage.getItem('lastChannelId');
    const initialChannel = channelsData.find(channel => channel.id === savedId) || channelsData[0];
    const initialElement = document.querySelector(`#channel-list > [data-id="${initialChannel.id}"]`);

    if (initialElement) {
        updatePreview(initialChannel);
        setActiveChannel(initialElement);
    }
});