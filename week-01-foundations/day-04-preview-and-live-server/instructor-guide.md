# Day 4 Instructor Guide — Preview and Live Server

## Teaching purpose

Students have written their first HTML document. Today they connect the code editor with the browser and learn a reliable save-and-preview workflow.

## Preparation checklist

- [ ] Check that each student has a working `index.html`.
- [ ] Check Chrome or another classroom browser.
- [ ] Install and test Live Server on classroom computers where possible.
- [ ] Prepare the direct file-opening method as a backup.
- [ ] Prepare the workflow diagrams.
- [ ] If showing screenshots, capture them from the current classroom installation.

## Two-hour lesson plan

### 1. Explain previewing — 20 minutes

Explain the difference between the code editor and browser. Describe previewing, saving, and refreshing. Introduce Live Server as an optional local preview tool.

Use the editor-to-browser workflow diagram and save-refresh cycle diagram.

### 2. Quick review — 4 minutes

Ask:

1. What does HTML do?
2. What is the purpose of `<body>`?
3. Where do we write the page title?
4. What is the name of the student's HTML file?

### 3. Instructor demonstration — 30 minutes

**A. Open the page directly (8 minutes)**

1. Save `index.html`.
2. Open the project folder in the file manager.
3. Open the HTML file in the browser.
4. Point out the page content and local file address.

**B. Edit and refresh (8 minutes)**

1. Change the heading in VS Code.
2. Save.
3. Refresh the browser.
4. Show the updated heading.

**C. Start Live Server (10 minutes)**

1. Open VS Code with the project folder.
2. Open `index.html`.
3. Select Go Live if Live Server is installed.
4. Show the local browser address.
5. Change a paragraph, save, and observe the browser refresh.

**D. Compare the methods (4 minutes)**

Explain that both methods preview local work. Live Server can refresh after saving. Neither method publishes the website for the public.

### 4. Student practical work — 62 minutes

- Open HTML directly in browser: 12 minutes
- Change heading and refresh: 12 minutes
- Change paragraph and refresh: 10 minutes
- Start Live Server if available: 12 minutes
- Repeat save-and-preview independently: 10 minutes
- Pair-check and troubleshoot: 6 minutes

Students without Live Server should continue using the direct file-opening method.

### 5. Practical review — 4 minutes

Ask students to show the browser preview and make one final change. Check that the new content appears.

## Common problems

| Problem | Instructor response |
|---|---|
| Student edits a different file | Compare the file path in VS Code and browser |
| Student forgets to save | Ask them to save, then refresh |
| Live Server is unavailable | Use the direct file-opening method |
| Wrong browser tab is refreshed | Identify the tab displaying the student's page |
| Browser displays code | Check file extension and file opening method |

## End-of-class checklist

- [ ] Students can open the HTML file in a browser.
- [ ] Students can save a change.
- [ ] Students can refresh the browser.
- [ ] Students understand the purpose of Live Server.
- [ ] Students know that local preview is not public hosting.

## Teaching reminder

Do not make Live Server installation a barrier to learning. The core skill is understanding the editor-save-browser-preview cycle.
