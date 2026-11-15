import { channelsData } from "../data/data.js";
import { renderChannelList, updatePreview, setActiveChannel } from "./ui.js";

console.log(channelsData);

document.addEventListener('DOMContentLoaded', () => {
    const onChannelClick = (channel, element) => {
        updatePreview(channel);
        setActiveChannel(element);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    renderChannelList(channelsData, 'channel-list', onChannelClick);

    const firstElement = document.querySelector('#channel-list > div');
    const firstChannel = channelsData[0];

    if (firstElement && firstChannel) {
        updatePreview(channelsData[0]);
        setActiveChannel(firstElement);
    }
});