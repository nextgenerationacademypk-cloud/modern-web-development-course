# Instructor Guide: Digital Readiness Workshop

## Purpose

Prepare absolute beginners for the main web development course by teaching the basic digital tasks that the course otherwise risks assuming. Teach slowly, demonstrate each action, and let every student repeat it.

**Duration:** 240 minutes  
**Suggested format:** Instructor-led, practical, projector demonstration  
**Prerequisite:** None

## Learning outcomes

By the end, students should be able to:
1. Use a mouse, keyboard, desktop, windows, and common shortcuts.
2. Create, rename, locate, and organise files and folders.
3. Use Chrome's address bar, tabs, links, search, and downloads.
4. Explain basic email terms and safely send or reply to a practice message.
5. Open a folder in VS Code and create and save an HTML file.
6. Preview a local HTML file in Chrome using Live Server or direct file opening.

## Before students arrive

- Check that each computer starts and has a working keyboard and mouse.
- Confirm internet access.
- Install Chrome and VS Code where possible. If students lack installation permission, prepare the computers before class.
- Install Live Server in VS Code if permitted.
- Test the projector and a sample HTML file.
- Prepare a fictional sample email recipient controlled by the academy, or use a safe instructor demonstration. Do not require students to send messages to strangers.
- Prepare printed or digital copies of the [student notes](student-notes.md) and [readiness checklist](readiness-checklist.md).
- Plan support for students who do not have an eligible email account or cannot access one.

## Four-hour teaching plan

| Time | Activity | Instructor action | Student practice |
|---|---|---|---|
| 0–45 min | Computer and files | Demonstrate desktop, windows, apps, mouse, keyboard, shortcuts, folders and file extensions | Create `my-first-website`, create a text file, rename it, locate it, and practise save/copy/paste |
| 45–90 min | Browser and internet | Demonstrate Chrome, address bar, search, tabs, links, downloads and safe browsing | Open a trusted learning site, use two tabs, follow a link, download a harmless practice file, find it |
| 90–150 min | Email basics | Explain address, inbox, compose, To, subject, send, reply and attachment; demonstrate safety and recovery concepts | Sign in to an existing eligible account or follow the approved alternative; send/reply to a safe practice message if available |
| 150–210 min | VS Code setup | Demonstrate Open Folder, Explorer, editor, file creation, save and Live Server | Open project folder, create `index.html`, enter simple text, save and preview in Chrome |
| 210–240 min | Readiness check | Observe each learner and record support needs | Complete the checklist tasks with minimal help |

## Teaching method

For each new action:
1. Say what the action does and why it matters.
2. Demonstrate it slowly on the projector.
3. Ask students to repeat it.
4. Walk around and observe.
5. Correct one step at a time; do not take over the keyboard unless necessary.

Use plain English. Explain unfamiliar words immediately. Do not assume students know what a browser, download, file extension, folder path, or sign-in means.

## Demonstration: project folder

Show the exact result:

```text
my-first-website/
└── index.html
```

Explain that the folder is the project and the HTML file is one item inside it. Students should open the folder in VS Code, not only open the individual file.

## Demonstration: first HTML preview

Use this minimal example. Explain that students are only practising file editing and previewing; the formal HTML lesson begins in Week 1.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Practice Page</title>
</head>
<body>
  <h1>Hello, web development!</h1>
  <p>I can create and preview a webpage.</p>
</body>
</html>
```

Ask students to save the file and open it in Chrome. Change the heading, save again, and show the updated result.

## Email account and privacy rules

- Never ask a student to reveal a password or verification code.
- Do not write credentials on paper that will be collected, photographed, or displayed.
- Do not create accounts using false ages or bypass provider restrictions.
- If a student cannot create or access an account, record the support need and use an academy-approved alternative for practice.
- Do not make GitHub account creation a requirement of this workshop.
- Do not use a student's real private contact details in a public practice page.

## Common problems and responses

| Problem | Check |
|---|---|
| Student cannot find a file | Check the folder where it was saved; use VS Code Explorer |
| File is named `index.html.txt` | Show file extensions and rename carefully |
| VS Code opens only one file | Use File → Open Folder and select the project folder |
| Chrome shows old content | Save in VS Code, then refresh Chrome |
| Live Server option is missing | Check extension installation; use direct file opening as a fallback |
| Internet is unavailable | Continue with offline file and VS Code practice; postpone online tasks |
| Student cannot access email | Do not share credentials; use approved alternative and record follow-up support |

## Differentiation

- Pair confident learners with beginners, but ensure each student gets keyboard time.
- Provide a printed shortcut list.
- Give extra time to students who are unfamiliar with file management.
- Use large zoom and clear projector demonstrations.
- Repeat installation steps individually; do not rush the whole group because some students finish early.

## Readiness decision

Use the [readiness checklist](readiness-checklist.md). Mark each task as **Independent**, **With help**, or **Not yet**. Students who need help should receive a short catch-up practice before or during early Week 1. This workshop is a support bridge, not an entrance exam.
