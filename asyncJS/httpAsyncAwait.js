import axios from "axios";

export default async (initialLink) => {
    const response = await axios.get(initialLink);
    const links = extractLinks(response.data);
    const request = (link) => axios.get(link).then(() => null).catch(() => link);
    const promises = links.map(request);
    const results = await Promise.all(promises);
    return results.filter((result) => result !== null);
};