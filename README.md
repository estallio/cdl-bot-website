# CDL-BOT Website

This repository contains a nextjs website template for [cdl-bot.at](https://cdl-bot.at).

![Screenshot](img/Screenshot.png)

## Add team member
1. Add a photo in the folder `public/images/team/` that approximately fits the aspect ratio 3:4 in portrait-mode.
2. Add an entry to `public/content/team.json` like so:
```
{
    "imagePath": "/images/team/stefan.jpg", // path to image in public folder without the 'public' folder in path
    "name": "Dr.-Ing. Stefan Schulte", // name of the person
    "info": "Stefan is Associate Professor at TU Wien and head of CDL-BOT." // fallback-info of the person if the right language is not specified
    "en-info": "Stefan is Associate Professor...", // (optional) info of the person in english - if not specified, delete the property completely so no emtpy text will be rendered
    "de-info": "Stefan ist Associate Professor...", // (optional) same as above for german
}
```
3. Commit the changes and push (will trigger deploy):
```
git add *
git commit -m "added new team member"
git push
```
4. Wait about 1-2min until Vercel redeployed the page.

## Add research work
1. Add an entry to `public/content/research.json` like so:
```
{
    "date": "22.10.2020",
    "title": "Smart Contract Interoperability",
    "en-title": "Smart Contract Interoperability", // (optional) info of the person in english - if not specified, delete the property completely
    "de-title": "Smart Contract Interoperabilität", // (optional) same as above for german
    "en-info": "Smart Contract Interoperability is important...", // (optional) info of the person in english - if not specified, delete the property completely so no emtpy text will be rendered
    "de-info": "Smart Contract Interoperabilität ist wichtig...", // (optional) same as above for german
    "announcements": [
        "1st price somewhere...",
        "2st price somewhere else..."
    ],
    "en-announcements": [
        "1st price somewhere...",
        "2st price somewhere else..."
    ],
    "de-announcements": [
        "1. Platz irgendwo...",
        "2. Platz irgendwo anders..."
    ],
    "download": "https://...../paper.pdf" // download-link of the paper - if no download is availabl, simply remove the whole property completly, so no empty download button will be rendered
}
```
> If there is no external link for a paper, it is also possible to upload documents to the web space. For this, simply add the document to the folder `public/documents/name-of-document.pdf` and change the download link to `/documents/name-of-document.pdf` and commit all files and changes.
3. Commit the changes and push (will trigger deploy):
```
git add *
git commit -m "added new work"
git push
```
4. Wait about 1-2min until Vercel redeployed the page.
