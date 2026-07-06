# Front-end editing for Haiden & Mario (email login, no GitHub)

Goal: you and Mario edit the Catch Dex and **upload catch photos from your phone**,
logging in with just an **email + password** (Mario needs no GitHub account).
Everyone else can only view the site. It's free.

How it works: the site is hosted on **Netlify** (free). Netlify's invite system lets
specific people log in by email; the editor lives at **your-site/admin** and saves changes
straight to your GitHub repo, so the live site updates automatically.

Repo: `HdruryUT/ProjectTrailmarks`

---

## Step 1 — Push everything
In VS Code: Source Control → message "add editor (Decap CMS)" → **Commit** → **Sync**.

## Step 2 — Host the site on Netlify (free)
1. Go to **https://app.netlify.com** and sign up (you can use your GitHub to sign up —
   this is just for you, the owner; Mario won't need it).
2. **Add new site → Import an existing project → GitHub → ProjectTrailmarks.**
3. Leave build settings empty (it's a plain static site) and click **Deploy**.
4. Netlify gives you a free public URL like `https://gulo-xyz.netlify.app` — that's the
   public view link anyone can visit. (You can rename it in Site settings, or add your own
   domain later.)

## Step 3 — Turn on email logins
In your Netlify site dashboard:
1. Open **Identity** (or Settings → Identity) and click **Enable Identity**.
2. Under **Registration**, set it to **Invite only** (so only people you invite can edit).
3. Find **Services → Git Gateway** and click **Enable Git Gateway**.

> ⚠️ Heads-up: Netlify has been phasing out the Identity feature. If you don't see an
> **Identity** option to enable, stop here and tell me — I'll switch the editor to an
> equivalent free email-login service (no work lost on your end).

## Step 4 — Invite Mario (and yourself)
1. In Netlify → **Identity → Invite users**, enter **Mario's email** (and your own).
2. He gets an email → clicks the link → it opens your site → he sets a password. Done.
3. Only the emails you invite here can ever log in and edit.

---

## Using it (works great on a phone)
1. Go to **your-site/admin** (e.g. `https://gulo-xyz.netlify.app/admin`).
2. Log in with email + password.
3. Open **Catch Dex — Fish of Utah**, pick a species, flip **Caught?** on, add who/when,
   and tap **Catch photo** to upload from the camera roll.
4. **Publish.** A minute later the fish lights up on the live site with the photo.

---

## Notes
- Photos are stored in `assets/dex/` in the repo.
- The fish data lives in `data/fish.json` (the editor writes this for you).
- `admin/` holds the editor (`index.html` + `config.yml`).
- The old `.pages.yml` file was for a GitHub-login editor; you can ignore or delete it now
  that we're using the email-login setup.
