# CDL-BOT Website

This repository contains a nextjs website template for [cdl-bot.at](https://cdl-bot.at).

![Screenshot](img/Screenshot.png)

## The following description describes changes relative to or in the `web` folder!

### Add team member
1. Add a photo in the folder `public/images/team/` that approximately fits the aspect ratio 3:4 in portrait-mode (rest will be cut off) (be careful that the images are not too big in size, i.e. < 500 KB or even less).
2. Add an entry to `public/content/team.json` like so:
```
{
    "imagePath": "/images/team/john.jpg", // path to image in public folder without the 'public' folder in path
    "name": "PhD. John Doe", // name of the person
    "info": "John is Associate Professor at TU Wien and head of CDL-BOT." // fallback-info of the person if the right language is not specified
    "en-info": "John is Associate Professor...", // (optional) info of the person in english - if not specified, delete the property completely so no emtpy text will be rendered
    "de-info": "John ist Associate Professor...", // (optional) same as above for german
}
```
3. Commit the changes and push (will trigger deploy):
```
git add *
git commit -m "added new team member"
git push
```
4. Wait about 1-2min until Vercel redeployed the page.

### Add news
1. Add an entry to `public/content/news.json` like so:
```
{
    "date": "22.10.2020", // date of the work or publication
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
    "download": "https://...../paper.pdf" // download-link of the paper - if no download is available, simply remove the whole property, so no empty download button will be rendered
}
```
> If there is no external link for a paper, it is also possible to upload documents to the web space. For this, simply add the document to the folder `public/documents/name-of-document.pdf` and change the download link to `/documents/name-of-document.pdf` and commit all files and changes.
3. Commit the changes and push (will trigger deploy):
```
git add *
git commit -m "added news"
git push
```
4. Wait about 1-2min until Vercel redeployed the page.

### Add publications
1. Add an entry to `public/content/publications.json` like so:
```
{
    "text": "Doe, J.Some Topic etc.",
    "abstract": "https://...../abstract.pdf" // link to the abstract of the paper - if no abstract is available, simply remove the whole property, so no empty download button will be rendered
    "paper": "https://...../paper.pdf" // link to the paper - if no paper is available, simply remove the whole property, so no empty download button will be rendered
    "preprint": "https://...../preprint.pdf" // link to the preprint - if no preprint is available, simply remove the whole property, so no empty download button will be rendered
}
```
> If there is no external link for a paper, it is also possible to upload documents to the web space. For this, simply add the document to the folder `public/documents/name-of-document.pdf` and change the download link to `/documents/name-of-document.pdf` and commit all files and changes.
> Be careful to list the publications in a standardized format like the publications are listed under the "Conference and Workshop Papers" section at [this website](https://dsg.tuwien.ac.at/team/sschulte/publications.html)
3. Commit the changes and push (will trigger deploy):
```
git add *
git commit -m "added publication"
git push
```
4. Wait about 1-2min until Vercel redeployed the page.

### Remarks
* If you want to use special chars like '"', use escape chars in the JSON files like: '\"'
* Use "‑" instead of "-" to prevent line-breaks (different ascii char)
* This project uses nextjs with the next-i18next extension from [here](https://github.com/isaachinman/next-i18next)
* Even there already exists nextjs v10 with i18n support, there is no automatic prefix-redirection so we stick to this solution
* If the redirection from [here](https://github.com/vercel/next.js/discussions/18419) is implemented, we could change to this approach and make use of [this](https://github.com/vinissimus/next-translate) library (this approach brings also performance benefits)
* There is also a discussion going on if static export should be supported with nextjs, maybe implement this if its integrated
* Until now an old solution is beeing used and for merging server-side data fetching and translating, a hacky solution from [here](https://github.com/isaachinman/next-i18next/issues/652#issuecomment-644618517) is used
* Currently, the DNS requests to `http://cdl-bot.at` is resolved to a web space containing the `.htaccess` file from the miscellaneous folder that redirects to the subdomain `http://www.cdl-bot.at`.

### TODO
* [ ] If a second domain is used, a `canonical` tag must be specified to prevent search engines from blocking duplicate content
* [x] It is better if the default domain redirects to the `www` subdomain
* [ ] Add sameAs-links in the meta-component
* [ ] Insert nice titles and descriptions for meaningful indexing (mention TU Vienna somewhere etc...)
* [ ] Change data like needed (contact, email etc.)
