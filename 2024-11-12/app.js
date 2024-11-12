// Define the file path
const filePath = '../nmap-datenfiles/2024-11-05T13:12:00+01:00';
try {
    const dirEntries = await Deno.readDir('../nmap-datenfiles');
    for await (const dirEntry of dirEntries) {
        console.log(dirEntry.name);
    }

} catch (err) {
    console.error('Error reading the file:', err);
}