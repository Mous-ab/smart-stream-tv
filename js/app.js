import { channelsData } from "../data/data.js";
import { renderChannelList } from "./ui.js";

console.log(channelsData);

document.addEventListener('DOMContentLoaded', () => {
    renderChannelList(channelsData, 'channel-list');
});