import { channelsData } from "../data/data.js";
import { renderChannelList, updatePreview, setActiveChannel } from "./ui.js";

console.log(channelsData);

document.addEventListener('DOMContentLoaded', () => {
    const onChannelClick = (channel, element) => {
        updatePreview(channel);

        setActiveChannel(element);
    }

    renderChannelList(channelsData, 'channel-list', onChannelClick);
});