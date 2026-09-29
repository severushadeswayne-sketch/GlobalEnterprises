# Global Enterprises website

Static site (HTML, CSS, a little JS). No build step. Ready for GitHub Pages.

## Pages
| File | Purpose |
|---|---|
| `index.html` | Home: hero, product catalogue (all marked "Call for price"), sectors, CTA |
| `about.html` | Company story, 4-step ordering process, product range |
| `gallery.html` | Filterable photo gallery with lightbox |
| `contact.html` | Redirects to the WhatsApp chat link |
| `404.html` | Not-found page (GitHub Pages uses it automatically) |

## Deploy on GitHub Pages
1. Create a new repository on GitHub (e.g. `global-enterprises`).
2. Upload **the contents** of this folder to the repository root (drag-and-drop in "Add file > Upload files", or `git push`).
3. Go to **Settings > Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
4. After a minute the site is live at `https://<username>.github.io/<repo>/`.
5. Optional custom domain: add it under Settings > Pages and create the DNS records GitHub shows you.

`.nojekyll` tells GitHub to serve files as-is.

## Images and their dimensions
All photos live in `assets/img/`. `assets/img/images.json` records each file's width, height and orientation,
and every `<img>` tag carries matching `width`/`height` attributes so the layout doesn't jump while loading.

| File | Width | Height |
|---|---|---|
| composite-manhole-cover.jpg | 952 | 1288 |
| gate-driveway-channel-drain.jpg | 1288 | 868 |
| heavy-duty-gully-grating.jpg | 784 | 1568 |
| kitchen-gloss-mirror.jpg | 588 | 868 |
| kitchen-shaker-white.jpg | 644 | 980 |
| kitchen-wall-oak.jpg | 728 | 560 |
| padel-court-channel-drain.jpg | 1288 | 952 |
| pool-overflow-grating-grey.jpg | 784 | 1372 |
| pool-overflow-grating-white.jpg | 896 | 1204 |
| track-edge-channel-drain.jpg | 1288 | 756 |
| vanity-basin-unit.jpg | 812 | 1288 |

**Adding or replacing a photo:** drop it in `assets/img/`, run `python tools/build_manifest.py`
(needs `pip install pillow`), then copy the new width/height into the `<img>` tag where you use it.

## Editing
- WhatsApp link: search for `api.whatsapp.com` across the HTML files to change the number or message.
- Colours and fonts: variables at the top of `assets/css/style.css`.
