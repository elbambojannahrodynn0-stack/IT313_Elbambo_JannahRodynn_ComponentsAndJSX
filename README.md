# IT313 Components and JSX

## Problem

The goal of this laboratory is to build a small Expo React Native student roster application. Each student is displayed using a reusable StudentCard component.

The application displays the student's name, course, units enrolled, and a Full Load label when the student is marked as a full-load student.

## Component Structure

### StudentCard

StudentCard is a reusable functional component. It receives the student's name, course, units, and isFullLoad value as props.

The props are destructured in the function parameter. JSX expressions are used to display the student information, and conditional rendering using && displays the Full Load label only when isFullLoad is true.

### StudentRoster

StudentRoster is the parent component that stores the student data and renders one StudentCard for each student.

The students array is rendered using map(). Each StudentCard uses student.id as its key so that every rendered item has a stable identity.

The total number of students is displayed using students.length.

The application also includes a button that reverses the roster order to demonstrate why stable ID-based keys are preferred over array indexes.

## How to Run

Install the project dependencies:

```bash
npm install
```
