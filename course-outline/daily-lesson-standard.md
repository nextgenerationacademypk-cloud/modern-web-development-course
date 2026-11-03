# Daily Lesson Development Standard

Use this standard for all 40 sessions. A weekly outline is a plan; a completed daily lesson pack must contain the teaching and practice materials needed to deliver that session.

## Required lesson folder

```text
day-XX-topic/
├── README.md
├── lecture-notes.md
├── instructor-guide.md
├── practical-exercises.md
├── homework.md
├── daily-quiz.md
├── examples/
│   └── working-example-files
└── images/
    └── relevant-diagrams-or-screenshots
```

Only include files that add value to the specific lesson. Do not create empty folders or filler images.

## Required content

### 1. Lesson overview
- Session number, title, and estimated duration.
- Prerequisite knowledge.
- Learning outcomes written as observable actions.
- Required software, files, and classroom preparation.

### 2. Lecture notes
- Simple English explanations for absolute beginners.
- Correct definitions and examples.
- Small code examples explained step by step.
- Relevant diagrams or screenshots placed beside the concept they explain.
- A short recap of the main ideas.

### 3. Instructor guide
- A 120-minute lesson plan.
- What to explain and demonstrate.
- Questions to ask students.
- Common beginner mistakes and how to help.
- Checkpoints to confirm understanding before moving on.

### 4. Practical exercises
Every lesson must include:
- A guided task with clear numbered steps.
- A required independent task that most beginners can complete.
- An optional extension for students who finish early.
- A troubleshooting checklist or hints.
- A clear expected result.

### 5. Working examples
- Include complete files when a working example is needed.
- Check that file names and paths match the instructions.
- Test the code in a browser or the relevant tool.
- Explain how students can run the example.
- Do not include code that depends on an unmentioned library or setup.

### 6. Homework and daily quiz
- Homework should reinforce the session and fit beginner ability.
- The quiz should check the stated learning outcomes, not unrelated facts.
- Include a practical check where appropriate.
- Keep answer keys and unreleased solutions in a private instructor location, not this public repository.

## Standard two-hour class plan

| Activity | Minutes | Purpose |
|---|---:|---|
| New explanation | 20 | Introduce the key ideas |
| Quick theory review | 4 | Check understanding |
| Instructor demonstration and guided coding | 30 | Model the process |
| Student practical work | 62 | Build and practise |
| Practical review and questions | 4 | Check the result and clarify issues |
| **Total** | **120** | |

The plan aims for approximately 20% theory and 80% practical learning. Adjust the balance when students need additional support, but preserve meaningful student coding time.

## Beginner workload rules

- Teach one main new idea at a time.
- Do not introduce several unfamiliar tools in one lesson without a strong reason.
- Reuse earlier examples so students can focus on the new concept.
- Prefer small working steps over long copy-and-paste demonstrations.
- Do not assume students know terminal commands, file paths, or browser tools unless previously taught.
- Mark optional content clearly.
- Use a guided project before asking students to build independently.

## Visual material rules

Use visuals only when they explain a concept or help students complete a task:
- Original SVG diagrams for concepts and workflows.
- Real screenshots for software interface instructions.
- Numbered callouts when students need to identify controls.
- Meaningful captions and alternative text.
- Relative image links so the repository remains portable.

Never present a fabricated software screenshot as a real interface. Avoid decorative stock images that do not support learning.

## Completion gate

A lesson is ready for classroom delivery only when it passes the [Instructor Quality Checklist](../resources/instructor-quality-checklist.md).
