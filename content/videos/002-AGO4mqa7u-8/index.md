---
title: 'Component Fundamentals'
subtitle: 'Templates and Data Binding'
tags: ['components', 'architecture', 'binding', 'dataflow']
category: 'Lessons'
---

### Plan

- Interpolation and expressions
- Property binding
- Event binding
- Two-way binding
- Template #ref variables

### Additional info related to XSS

To systematically block XSS bugs, Angular treats all values as untrusted by default. When a value is inserted into the DOM from a template binding, or interpolation, Angular sanitizes and escapes untrusted values. If a value was already sanitized outside of Angular and is considered safe, communicate this to Angular by marking the value as trusted.

[Source](https://angular.io/guide/security)

# Panel

[Chihab Otmani](https://twitter.com/chihabotmani)

[Ilyas Elfouih ](https://twitter.com/elfouih)
