# Collab Flow

## PART 1

1. go to Trello
2. To-Do List: create new `[task name]`
   - require: member icon / labels
   - notes: description / checklist
   - optional: image / link / etc
3. In-Progress: move current `[task name]`
   - the main task you will work on

## PART 2

1. go to terminal (in project)
2. `git checkout -b [branch-name]`
3. `git add .` > `git commit -m ""` > `git push origin [branch-name]`
- [read more for git name/message](#naming-convention)

## PART 3

1. go to GitHub > click `compare & pull request`
   - view sidebar > click `Reviewers ⚙` > select reviewer
   - click `create pull request`
2. you `send message` to a team member
   - copy URL link (from address bar)
   - send `@name + message + URL` in messages
   - DONE 🏁
3. [read more for daily workflow](#daily-workflow)

## PART 4

- (only for reviewer role)
  1. they review code from `pull request` in GitHub
     - open link > click `add your review`
     - select `review changes`
       - +> add `comment & approve` > click `submit review`
       - +> add `comment & request change` > click `submit review`
  2. they merge code in GitHub
     - click `merge pull request` > click `confirm merge` > delete `branch`
  3. they move task card in Trello
     - from `Review` to `Done`
  4. they `respond to message` back to the team member
     - they will response `@name + message (+ URL)` in messages
     - DONE 🏁
- (only for developer role)
  1. go to terminal (in project)
  2. `git checkout [master/main]` > `git branch -D [branch-name]` > `npm run update`
  3. repeat [PART 1](#part-1) 🔁

## Daily Workflow

- **mornings**: run `npm run update`
  - `git pull` for any new updates from the project's codebase
  - `npm install` for any new packages to install
- **nights**: save code
  - `git add .` > `git commit -m ""` for any work that got done
  - `git push origin [branch-name]` when you are finished on a task
- **during**: additional workflow
  - open `Trello`
    - update & track your progess of task/work
    - `To-Do List` > `In-Progress` > `Review`

## Naming Convention
- make it quick, simple, & readable
  - "[current action] [topic]"
- Trello: `[task name format]`
  - create task card in `To-Do List`
	- move task card to `In-Progress`
- `git checkout -b [branch name format]`
  - branch name: `[first-name]/[key-type]/[new-change]`
  - first-name (default) = develop
- `git commit -m "[message format]"`
  - commit message: `[key-type]: [sub-task title]`
- key type list:
  - `feat` = feature task to complete
  - `style` = styling feature related
	- `wip` = work in progress
  - `fix` = bug/issue to resolved
  - `test` = testing stuff
  - `docs` = document notes
- example
  1. Trello - `Handle Navbar` > move to `In-Progess`
  2. Git Branch - `rufio/feat/handle-navbar`
  3. Git Commit - `feat: create many components: Logo, Nav`
  4. Trello - `Handle Navbar` > move to `Review`
  5. Message PM/Reviewer
  6. repeat 🔁

## Misc

- GitHub Pull Request Color Key
  - **green**: able to merge
  - **purple**: updated merge
  - **gray**: merge conflict
- Handling Git Conflicts...
  - message reviewer to meet up & resolve problem together
- the only manual work to do...
  - dev role will be completed after sending `pull request`
  - test role will `review & merge` upcoming code
