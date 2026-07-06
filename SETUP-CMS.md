# Front-end editing through GitHub (free, no Netlify)

You and Mario edit the Catch Dex and **upload catch photos from your phone** using a free
editor called **Pages CMS**. The site stays on **GitHub Pages** (free). Changes save to your
repo and the live site updates automatically. Everyone else can only view the site.

The only requirement: each editor logs in with a **free GitHub account**. Mario's is a
2-minute email/password signup — no coding, nothing to learn. He just uses it to open the editor.

Repo: `HdruryUT/ProjectTrailmarks`
Live site (after step 2): **https://HdruryUT.github.io/ProjectTrailmarks/**

---

## One-time setup

### 1. Push everything
VS Code → Source Control → message "publish site + editor" → **Commit** → **Sync**.

### 2. Turn on GitHub Pages (makes the site public)
github.com → your repo → **Settings → Pages**:
- Source: **Deploy from a branch**
- Branch: **main**, folder **/ (root)** → **Save**

Wait ~1 minute, refresh, and the public URL appears. Leave "Custom domain" empty.

### 3. Mario makes a free GitHub account
He goes to **https://github.com/signup** — email, password, username. That's it.

### 4. Add Mario to the repo
Repo → **Settings → Collaborators → Add people** → Mario's GitHub username → he accepts the
email invite. Only repo collaborators (you two) can ever edit.

### 5. Connect the editor
1. Go to **https://app.pagescms.org** (on a computer or phone).
2. **Sign in with GitHub** and authorize it for the **ProjectTrailmarks** repo.
3. It reads the `.pages.yml` we set up and shows a **"Catch Dex — Fish of Utah"** editor.

Mario does the same at app.pagescms.org with his own GitHub login.

---

## Logging a catch (works great on a phone)
1. Open **app.pagescms.org** → ProjectTrailmarks → **Catch Dex — Fish of Utah**.
2. Pick the species, flip **Caught?** on, add **Caught by** and **Date**, and tap
   **Catch photo** to upload from the camera roll.
3. **Save.** A minute later the fish lights up on the live site with the photo.

---

## Notes
- Photos are stored in `assets/dex/` in the repo.
- The fish list lives in `data/fish.json` (the editor writes this for you).
- Everything here is free: GitHub, GitHub Pages, and Pages CMS.
