---
'@belgattitude/crypto': minor
---

Compatibility fix, remove named imports for bcryptjs


Fix the `SyntaxError: The requested module 'bcryptjs' does not provide an export named 'compareSync'` when used in
conjunction with tsx from an esm package.