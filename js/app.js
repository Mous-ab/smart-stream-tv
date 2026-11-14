import { channelsData } from "../data/data.js";
import { renderChannelList } from "../js/ui.js";

document.addEventListener('DOMContentLoaded', () => {
    renderChannelList(channelsData, 'channel-list');
});