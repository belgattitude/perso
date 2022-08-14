# @belgattitude/crypto

## 1.3.0

### Minor Changes

- [#845](https://github.com/belgattitude/perso/pull/845) [`8601589`](https://github.com/belgattitude/perso/commit/86015898cd452cf2ab416b611f4d8582dda622e2) Thanks [@belgattitude](https://github.com/belgattitude)! - Compatibility fix, remove named imports for bcryptjs

  Fix the `SyntaxError: The requested module 'bcryptjs' does not provide an export named 'compareSync'` when used in
  conjunction with tsx from an esm package.

## 1.2.0

### Minor Changes

- [#624](https://github.com/belgattitude/perso/pull/624) [`b60943a`](https://github.com/belgattitude/perso/commit/b60943a02a4bc3c047b55729277eca8eaf02ac7e) Thanks [@belgattitude](https://github.com/belgattitude)! - Ensure encrypt/decrypt passes utf-8 strings

### Patch Changes

- [#624](https://github.com/belgattitude/perso/pull/624) [`b60943a`](https://github.com/belgattitude/perso/commit/b60943a02a4bc3c047b55729277eca8eaf02ac7e) Thanks [@belgattitude](https://github.com/belgattitude)! - Fix flacky test for decrypt error

## 1.1.0

### Minor Changes

- [#544](https://github.com/belgattitude/perso/pull/544) [`74e3d3f`](https://github.com/belgattitude/perso/commit/74e3d3f201d6f901aa0d53326d6e901ec6729963) Thanks [@belgattitude](https://github.com/belgattitude)! - Add password hasher with bcryptjs

* [#544](https://github.com/belgattitude/perso/pull/544) [`74e3d3f`](https://github.com/belgattitude/perso/commit/74e3d3f201d6f901aa0d53326d6e901ec6729963) Thanks [@belgattitude](https://github.com/belgattitude)! - Refactor aes encryptor
