# Deploy with GitHub Pages (step-by-step)

Use this to get a free live URL for the onboarding (home page + both flows). No credit card, no trial limit.

---

## Which folder to use (recommended: **docs**)

GitHub Pages only lets you choose **root** or **docs**.

| Folder | What happens | Recommendation |
|--------|----------------|-----------------|
| **/ (root)** | Serves the repo root. If there's no `index.html`, GitHub shows the README. You need an `index.html` at root that links into the kit (paths depend on your repo structure). | Works only if you have a root `index.html` and correct paths to the kit. |
| **docs** | Serves the contents of the `docs/` folder as the site root. The repo now has `docs/index.html` (home with two buttons), `docs/setup-chat.html`, `docs/onboarding-pm.html`, and `docs/screenshots/`. | **Best option:** one folder, clean URLs, no guessing subfolder names. |

**Use the docs folder:** In Settings → Pages, set **Folder** to **docs**. Then your live site will be:
- Home: `https://YOUR_USERNAME.github.io/CursorOnboarding/`
- New users: `.../setup-chat.html`
- PM: `.../onboarding-pm.html`

---

## How to re-deploy (after changes)

GitHub Pages **does not** have a "Redeploy" button. It redeploys automatically when you push to the branch you chose (e.g. `main`):

1. Commit and push your changes:
   ```bash
   cd /path/to/your/repo
   git add -A
   git commit -m "Update onboarding"
   git push origin main
   ```
2. Wait **1–2 minutes**. The "Last deployment" time on the Pages settings will update.
3. Hard-refresh the site (e.g. Ctrl+Shift+R or Cmd+Shift+R) to avoid cache.

If it still shows an old deployment after a few minutes, check that you pushed to the correct branch and that Pages is set to that branch.

---

## 1. Push your repo to GitHub

If the repo is not on GitHub yet:

- Create a new repository on [github.com](https://github.com/new) (e.g. `cursor-onboarding-kit`).
- On your machine, from the project folder:

```bash
cd /path/to/cursor-onboarding-kit
git remote add origin https://github.com/YOUR_USERNAME/cursor-onboarding-kit.git
git push -u origin main
```

(Use your real GitHub username and repo name. If you use SSH, use `git@github.com:YOUR_USERNAME/cursor-onboarding-kit.git`.)

If the repo is already on GitHub, just make sure your latest changes are pushed:

```bash
git add -A
git commit -m "Your message"
git push origin main
```

---

## 2. Turn on GitHub Pages

1. Open your repo on **GitHub** (e.g. `https://github.com/YOUR_USERNAME/cursor-onboarding-kit`).
2. Click **Settings** (tab at the top of the repo).
3. In the left sidebar, click **Pages** (under "Code and automation").
4. Under **Build and deployment**:
   - **Source:** choose **Deploy from a branch**.
   - **Branch:** select **main** (or **master** if that’s your default).
   - **Folder:** select **docs** (recommended; the repo includes `docs/index.html` as the home page).
5. Click **Save**.

---

## 3. Wait for the first deploy

- GitHub will build and deploy. The first time can take 1–2 minutes.
- At the top of the **Pages** settings you’ll see: “Your site is live at **https://YOUR_USERNAME.github.io/cursor-onboarding-kit/**” (or your repo name).
- If you see “GitHub Pages is currently disabled” or no URL yet, wait a minute and refresh.

---

## 4. Open the site and test both options

- **Home (choose path):**  
  `https://YOUR_USERNAME.github.io/cursor-onboarding-kit/`  
  or  
  `https://YOUR_USERNAME.github.io/cursor-onboarding-kit/index.html`

- **New users flow:**  
  `https://YOUR_USERNAME.github.io/cursor-onboarding-kit/docs/setup-chat.html`

- **PM flow:**  
  `https://YOUR_USERNAME.github.io/cursor-onboarding-kit/docs/onboarding-pm.html`

From the home page, the two buttons (“I’m completely new” and “I’m a PM with some experience”) will take users to the right flow.

---

## 5. Updating the site later

Every time you push to the branch you chose (e.g. `main`), GitHub Pages will redeploy in about a minute:

```bash
git add -A
git commit -m "Update onboarding"
git push origin main
```

No extra build step is needed; the repo is served as static files.

---

## Notes

- **Vercel-style short URLs** (`/setup-chat`, `/onboarding-pm`) don’t work on GitHub Pages (no redirects). Use the full paths above or link from the home page.
- **Repo name in the URL:** If you renamed the repo, the URL becomes `https://YOUR_USERNAME.github.io/NEW_REPO_NAME/`.
- **Organization repos:** If the repo is under an organization, the URL is still `https://USERNAME.github.io/REPO_NAME/` (user or org as the first part, depending on who owns the Pages site).
