# Day 33 Lecture Notes — GitHub Remote Repositories

## 1. What is a remote?
A remote is a named connection to another copy of a Git repository, often hosted online. A common remote name is origin.

![Local and remote repository](images/day-33-local-remote.svg)

## 2. Create or use a GitHub account
1. Open [github.com](https://github.com).
2. Sign up using your own email and a strong unique password, if you are eligible.
3. Complete any verification steps yourself.
4. Keep recovery information private.
5. Never share passwords or one-time codes with classmates or instructors.

Follow current GitHub age and account requirements. If you cannot create an account, complete the instructor's alternative practice using a demonstration repository.

## 3. Create a repository on GitHub
1. Sign in.
2. Choose New repository.
3. Enter a clear name such as practice-website.
4. Choose Public only after checking that the content is safe to publish.
5. For a beginner push from an existing local project, create an empty repository without adding a README, licence, or .gitignore on GitHub. This avoids an unrelated initial history.

**Important:** A public repository can be viewed and copied by anyone. GitHub Pages on GitHub Free is generally available for public repositories. Students who need to keep a repository private should ask the instructor about an alternative publishing option or use the instructor's demonstration for the Pages practice. Never make private work public just to complete a task.

## 4. Protect your email on shared computers
Git stores the author name and email in each commit. On a shared classroom computer, avoid setting a student's personal email globally because that setting can remain for the next user.

For a student who has enabled a GitHub private/noreply commit email, use the exact noreply address shown in their GitHub email settings. Set it only for the current project:

~~~bash
git config user.name "Student Name"
git config user.email "YOUR-GITHUB-NOREPLY-EMAIL"
~~~

Do not copy the example text literally. Replace it with the student's own chosen display name and noreply address. Check the current project settings with:

~~~bash
git config user.name
git config user.email
~~~

A repository-specific setting is safer on shared PCs than `git config --global`. Students using their own personal computer may choose their own settings, but should still understand which email appears in public commits.

## 5. Connect your local repository
Copy the HTTPS repository address from GitHub. Replace the example URL with your own:

~~~bash
git remote add origin https://github.com/USERNAME/REPOSITORY.git
~~~

Check the remote:

~~~bash
git remote -v
~~~

If origin already exists, do not add it again.

## 6. Push the project
~~~bash
git branch -M main
git push -u origin main
~~~

The first push may ask you to authenticate. Use the approved browser/device flow or Git Credential Manager. GitHub does not accept account passwords as Git HTTPS authentication. Never put a password or token directly in the command.

## 7. Verify the result
Open the repository page in your browser. Confirm that index.html, CSS, JavaScript, and images appear. The repository is now online, but it is not automatically a published website.

## 8. Future updates
After changing files, use the local workflow:

~~~bash
git status
git add .
git commit -m "Update website content"
git push
~~~

The push sends new local commits to the remote repository.

## 9. Public repository safety
Before pushing, inspect files. Do not upload passwords, API keys, private keys, private contact lists, student records, or confidential material. A public repository can be viewed and copied by anyone.

## 10. Review
1. What is a remote repository?
2. What is the common name for the main remote?
3. Which command sends local commits to GitHub?
4. Does pushing automatically publish a website?
5. What should never be uploaded to a public repository?
6. Why is a repository-specific email setting useful on a shared computer?
