instead of doing unsupervised development of the arcade cabinet, build documentation outlining the specific steps it must do.

This makes sure that its code doesn't spiral into code smells that suck to refactor.

Ideally refactoring with AI should be last resort, as it is not as good at determining line numbers.
(maybe if line numbers were in comments, or code was in metadata?)

So do the following instead:
- define each file and what it does
- use the docs to generate the code
- test to see if it did what you want (TDD?)