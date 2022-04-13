My personal website and playgrounds.

## Structure


```
.
├── apps
│   ├── website 
└── packages
    ├── db-main
    └── eslint-config-bases    
```

## Scripts


| Name                         | Description                                                                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `yarn g:changeset`           | Add a changeset                                                                                                                      |
| `yarn g:typecheck`           | Run typechecks in all apps & packages                                                                                                |
| `yarn g:lint`                | Display linter issues in all apps & packages                                                                                         |
| `yarn g:lint --fix`          | Attempt to run linter auto-fix in all apps & packages                                                                                |
| `yarn g:lint-styles`         | Display css stylelint issues in all apps & packages                                                                                  |
| `yarn g:lint-styles --fix`   | Attempt to run stylelint auto-fix issues in all apps & packages                                                                      |
| `yarn g:test`                | Run tests in all apps & packages                                                                                                     |
| `yarn g:test-unit`           | Run unit tests in all apps & packages                                                                                                |
| `yarn g:test-e2e`            | Run unit tests in all apps & packages                                                                                                |
| `yarn g:build`               | Clean every caches and dist folders in all apps & packages                                                                           |
| `yarn g:clean`               | Add a changeset                                                                                                                      |
| `yarn g:check-dist`          | Ensure build dist files passes es2017 (run `g:build` first).                                                                         |
| `yarn deps:check --dep dev`  | Will print what packages can be upgraded globally (see also [.ncurc.yml](https://github.com/sortlist/packages/blob/main/.ncurc.yml)) |
| `yarn deps:update --dep dev` | Apply possible updates (run `yarn install && yarn dedupe` after)                                                                     |
| `yarn check:install`         | Verify if there's no dependency missing in packages                                                                                  |
| `yarn install:playwright`    | Install playwright for e2e                                                                                                           |


