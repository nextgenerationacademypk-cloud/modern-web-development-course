# Day 33 Instructor Guide — GitHub Remote Workflow

![Local and remote repository](images/day-33-local-remote.svg)

## Preparation
Check access to GitHub and prepare a demonstration repository. Ensure the local project has at least one commit. Explain account age and eligibility requirements before signup. Prepare a demonstration using a repository-specific Git identity and a GitHub noreply email.

## Outcomes
Students create or access an eligible account, create a repository, connect origin, push main, and verify files. They understand that public repositories are visible to everyone and that GitHub Free Pages generally requires a public repository.

## 120-minute plan
| Time | Activity |
|---|---|
| 0–20 min | Explain local vs remote repository, account safety, visibility, and email privacy |
| 20–24 min | Review Git command sequence |
| 24–54 min | Demonstrate repository creation and first push |
| 54–116 min | Students publish their practice project |
| 116–120 min | Verify repository contents |

## Demonstration
1. Sign in to a demonstration GitHub account.
2. Create an empty repository.
3. Check repository visibility and explain the public/private difference.
4. Copy its HTTPS URL.
5. In the local project, inspect git status and git remote -v.
6. Add origin only if it does not already exist.
7. Set a repository-specific Git identity; demonstrate a GitHub noreply email rather than a personal email on shared classroom computers.
8. Rename current branch to main.
9. Push with upstream tracking.
10. Complete authentication through the supported browser or credential manager flow.
11. Refresh GitHub and inspect the files.

## Shared computer privacy demonstration
Show these commands inside the student's project folder:

~~~bash
git config user.name "Student Name"
git config user.email "YOUR-GITHUB-NOREPLY-EMAIL"
git config user.name
git config user.email
~~~

Explain that omitting `--global` saves the setting only in the current repository. Never ask a student to reveal a personal email, password, token, or verification code. Students should copy their own noreply address from GitHub settings.

## Public and private repository choice
A public repository can be viewed and copied by anyone. GitHub Free Pages generally requires a public repository for this course workflow. If a student cannot or should not publish a public repository, do not pressure them to expose private work; use an instructor demonstration or an approved alternative hosting arrangement.

## Questions
- Is GitHub the same thing as Git?
- What does origin usually mean?
- What is the difference between commit and push?
- Why is a repository-specific email setting safer on a shared PC?
- Why should a student check repository visibility before pushing?

## Common errors
- Remote already exists: inspect git remote -v; do not add a second origin.
- Authentication rejected: use browser/device sign-in or Git Credential Manager; never enter an account password in a command.
- Repository not found: verify URL, account, and access.
- Push rejected due to unrelated history: stop and ask the instructor; do not introduce force push as a quick fix.

## Safety and inclusion
Never ask students to reveal passwords or verification codes. Provide a demonstration alternative for students who cannot create an account or whose accounts are restricted. Check for private data before any public push.

## Checkpoint
Student opens their repository page and points to the uploaded HTML and CSS files, then explains whether the repository is public or private.
