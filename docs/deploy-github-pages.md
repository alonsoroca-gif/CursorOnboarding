# Deploy with GitHub Pages (step-by-step)

Use this to get a free live URL for the onboarding (home page + both flows). No credit card, no trial limit.

---

## Which folder to use (recommended: **docs**)

GitHub Pages only lets you choose **root** or **docs**.

| Folder | What happens | Recommendation |
|--------|----------------|-----------------|
| **/ (root)** | Serves the repo root. If there's no `index.html`, GitHub shows the README. You need an `index.html` at root that links into the kit (paths depend on your repo structure). | Works only if you have a root `index.html` and correct paths to the kit. |
| **docs** | Serves the contents of the `docs/` folder as the site root. The repo now has `docs/index.html` (home with two buttons), `docs/setup-chat.html`, `docs/onboarding-pm.html`, and `docs/screenshots/`. | **Best option:** one folder, clean URLs, no guessing subfolder names. |

**The app is now at repo root and in docs/.** Set **Settings → Pages → Source** to **Deploy from a branch**, **Branch** main, **Folder** either **/ (root)** or **docs**. Both work; root serves the app directly. Then your live site will be:
- Home: `https://YOUR_USERNAME.github.io/CursorOnboarding/`
- New users: `.../setup-chat.html`
- PM: `.../onboarding-pm.html`

**If the link still shows the README (project overview) instead of the app:** The repo now includes a **`.nojekyll`** file at the root. This tells GitHub Pages to serve files as-is (no Jekyll), so **index.html** is used as the home page instead of README. Do this:
1. Set **Folder** to **/ (root)** in Pages settings.
2. Commit and push the `.nojekyll` file (and ensure `index.html` is at the repo root).
3. Wait 1–2 minutes and hard-refresh (Cmd+Shift+R). You should see the two-button app.

If it still shows the README, switch **Folder** to **docs** and push so that `docs/index.html` is deployed; then the app will be at the same URL.

---

## Fix 404 (page not found)

**Why root gives 404:** Your git repo root is the **parent folder** (e.g. Desktop), not the kit. So on GitHub the repo root has **Cursor-Onboarding/** and no `index.html` at the very top level. GitHub Pages “root” therefore has nothing to serve at `/`, so you get 404.

**Fix:** An **index.html** was added at the **repo root** (the folder that contains Cursor-Onboarding). It redirects to **Cursor-Onboarding/cursor-onboarding-kit/** where the app lives. You must **commit and push that root index.html** from the parent folder:

```bash
cd /Users/alonso.roca/Desktop
git add index.html
git commit -m "Add root index.html redirect to app for GitHub Pages"
git push origin main
```

Then set **Settings → Pages → Folder: / (root)** and wait 1–2 minutes. Opening the site will redirect to the app.

---

If you still get 404:

1. **Use the right URL** (case-sensitive, with trailing slash):  
   `https://alonsoroca-gif.github.io/CursorOnboarding/`  
   Try with and without the trailing slash.

2. **Set the source to the docs folder:**  
   **Settings → Pages** → **Build and deployment** → **Source** → **Deploy from a branch** → **Branch:** main → **Folder:** **docs** → **Save**.  
   The app lives in the `docs/` folder (`docs/index.html`), so Pages must publish from **docs**, not root.

3. **Confirm the branch has `docs/index.html`:**  
   On GitHub, open your repo → make sure there is a **docs** folder and inside it **index.html**, **setup-chat.html**, **onboarding-pm.html**, and **screenshots**. If your repo root only has a subfolder (e.g. Cursor-Onboarding) and the app is inside it, then at the **root** of the repo there is no **docs** folder, so "docs" in Pages will be empty and you get 404. In that case you must push so the **repo root** is the kit (so that the root has a **docs** folder). The remote should be from inside the kit folder when you push.

4. **Wait 1–2 minutes** after changing the folder, then open the URL again and do a **hard refresh** (Cmd+Shift+R or Ctrl+Shift+R).

5. **Check the deployment:**  
   **Settings → Pages** → at the top it should say "Your site is live at …". If it says "Page build failure" or similar, open the link to the Actions tab and fix the reported error.

---

## Avoid "changes not showing" next time

The live site is built from **repo root** or **docs/**. Edits live in **Cursor-Onboarding/cursor-onboarding-kit/docs/**. If you push without syncing, the site won’t update.

- **Always deploy with `./push`** from the repo root. It syncs kit → docs → root, then commits and pushes.
- **Optional:** Install the pre-push hook so a normal `git push` is blocked when root/docs are out of sync:
  ```bash
  cp scripts/pre-push-github-pages .git/hooks/pre-push && chmod +x .git/hooks/pre-push
  ```
  After that, if you push without syncing, the hook will tell you to commit the synced files (or run `./push`).

---

## How to re-deploy (after changes)

GitHub Pages **does not** have a "Redeploy" button. It redeploys automatically when you push to the branch you chose (e.g. `main`).

**One command (recommended):** From the **repo root**, run:
   ```bash
   ./push
   ```
   This syncs kit docs → root docs, commits, and pushes. Optional: `./push "Your commit message"` to use a custom message.

**Or do it step by step:**

1. From the **repo root**, run:
   ```bash
   ./sync-docs-for-pages.sh
   ```
2. Commit and push (include root app files so both root and docs stay in sync):
   ```bash
   git add docs Cursor-Onboarding/cursor-onboarding-kit/docs index.html onboarding-pm.html onboarding-pm.js setup-chat.html setup-chat.js screenshots .nojekyll
   git commit -m "Update onboarding"
   git push origin main
   ```
3. Wait **1–2 minutes**. The "Last deployment" time on the Pages settings will update.
4. Hard-refresh the site (e.g. Ctrl+Shift+R or Cmd+Shift+R) to avoid cache.

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
