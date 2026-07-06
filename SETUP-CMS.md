# Setting up phone editing (Pages CMS)

This lets you and Mario mark fish caught and **upload catch photos from your phone** —
no code. Every change saves as a commit to your GitHub repo and the live site updates.

Repo: `HdruryUT/ProjectTrailmarks`
Live site (after step 2): **https://HdruryUT.github.io/ProjectTrailmarks/**

---

## One-time setup

### 1. Push the new files
Commit and push what we just added (`.pages.yml`, `data/fish.json`, updated `fishdex.js`).
In VS Code: Source Control → message "add Pages CMS + fish data" → Commit → Sync.

### 2. Turn on GitHub Pages (makes the site public)
On github.com → your repo → **Settings → Pages**:
- Source: **Deploy from a branch**
- Branch: **main**, folder: **/ (root)** → **Save**

Wait ~1 minute, refresh, and you'll see the public URL above.

### 3. Add Mario so he can edit
Repo → **Settings → Collaborators → Add people** → Mario's GitHub username.
He'll get an email invite to accept.

### 4. Connect Pages CMS
1. Go to **https://app.pagescms.org** on your computer or phone.
2. Click **Sign in with GitHub** and use your account (HdruryUT).
3. Authorize Pages CMS and give it access to the **ProjectTrailmarks** repo.
4. Open the repo inside Pages CMS — it reads the `.pages.yml` we added and shows a
   **"Catch Dex — Fish of Utah"** editor.

Mario does the same at app.pagescms.org with his own GitHub login (after accepting the invite).

---

## How to log a catch (works great on a phone)
1. Open **app.pagescms.org** → ProjectTrailmarks → **Catch Dex — Fish of Utah**.
2. Find the species in the list (e.g. *Tiger Trout*).
3. Flip **Caught?** on, fill in **Caught by** and **Date**, and tap **Catch photo** to
   upload a picture straight from your camera roll.
4. **Save.** Pages CMS commits it; a minute later the fish lights up on the live Catch Dex
   with your photo in its slot.

That's it — the dex, the category progress bars, and the grand total all update on their own.

---

## Notes
- Photos are stored in `assets/dex/` in the repo.
- The fish data lives in `data/fish.json` — the CMS edits this for you, but you can also edit
  it by hand if you ever want to.
- Only you and Mario (repo collaborators) can edit. Everyone else can only view the site.
