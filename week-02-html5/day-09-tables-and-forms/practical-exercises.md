# Day 9 Practical Exercises — Tables and Forms

## What you will practise

You will create a small timetable and a sample HTML form. Use fictional information only. This form is for learning and does not send or store submissions.

## Exercise 1 — Read the diagrams

Open:
- `images/day-09-table-structure.svg`
- `images/day-09-form-labels.svg`

Identify a table row, a heading cell, a data cell, a form label, and an input control. Explain what each one does.

## Exercise 2 — Guided practice: timetable

1. Open `examples/index.html`.
2. Find the table, row, heading-cell, and data-cell elements.
3. Change the sample timetable to three school subjects.
4. Add a caption that explains what the table shows.
5. Save and preview in Chrome.
6. Check that each row has the correct number of cells.

## Exercise 3 — Required independent task: timetable and sample form

Create a page with both parts.

### Part A: Weekly timetable

- Add a table with a caption.
- Include at least three column headings.
- Include at least three rows of fictional timetable data.
- Use `th` for heading cells and `td` for ordinary data.

### Part B: Sample contact form

- Add a text input for a fictional name.
- Add an email input.
- Add a textarea for a sample message.
- Connect every label to its control using matching `for` and `id` values.
- Make at least the name and email fields required.
- Add a submit button.

**Important:** The form is only an HTML practice example. It has no server, so it does not send or save information. Do not enter real private details.

## Completion checklist

- [ ] My table has a useful caption.
- [ ] My table uses rows, heading cells, and data cells correctly.
- [ ] Every form control has a visible, connected label.
- [ ] I used suitable input types.
- [ ] Required fields show browser validation when left empty.
- [ ] I understand that this form does not store or send data.

## Optional challenge

Add a checkbox or a radio group for a fictional preference. Use radio buttons when the user should choose only one option from a group.

## Troubleshooting

- If table cells appear in the wrong columns, check the order of cells in each row.
- If a label does not focus its input when clicked, compare the label's `for` with the control's `id`.
- If browser validation does not appear, check that the field has the `required` attribute.
- If you expect a message to be delivered, remember that a server-side service is not part of this exercise.

## Expected result

A readable HTML page containing a small timetable and a labelled sample form that demonstrates basic browser validation without collecting real personal data.
