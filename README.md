# week-6-review

## Git Branching

The `git branch` command will list all existing branches in your current local repository. The branch with a * next to it is the branch you are currently in.
* Note: this will only list branches that you have accessed locally. If a branch exists remotely (ie. on github), if you haven't accessed it on your computer, you won't see it on the list.

To change branches, use the `git checkout BRANCH-NAME` command, where BRANCH-NAME is the name of the branch you want to switch to.
* If you attempt to checkout to a nonexistent branch, you will receive the following error: `error: pathspec 'BRANCH-NAME' did not match any file(s) known to git`, where BRANCH-NAME is the name of the branch you attempted to access.
* If the branch exists remotely (ie. on github), git will access the remote branch.
* If you are creating a new branch, instead use the command `git checkout -b BRANCH-NAME`, where BRANCH-NAME is the name of the branch you would like to create.
    * This `-b` tells git to create a new branch.
    * If you attempt to use `git checkout -b ALREADY-EXISTING`, where ALREADY-EXISTING is the name of a branch that already exists, you will receive the following error:  `fatal: A branch named 'ALREADY-EXISTING' already exists.`

While inside a given branch, using a simple  `git push` or `git pull` will likely give you errors.
* One fix is to just be explicit with git as to where you want to push to or pull from. For example, `git push orign BRANCH-NAME` will push the current commit of BRANCH-NAME locally to BRANCH-NAME on github (even if locally you are checked out into a different branch).
    * `git pull origin BRANCH-NAME`, on the other hand, will pull the contents of BRANCH-NAME from github into your current local branch. If there are merge conflicts, git will inform you as usual.
    * How these commands are structured: `git` of course refers to the fact that this is a git command. `push` or `pull` is the action you would like to perform. `origin` is the name of the remote repository; right now, you only have github, which is called origin by default. If you're uncertain about the name of your remote, you can use the `git remote` command to see the names of the connected remotes (or `git remote -v` if you would also like to see the URLs associated with those remotes). Finally, `BRANCH-NAME` is the name of whichever branch you are pushing to or pulling from.

For some more information on branching, including some common branch naming conventions, you can review `week-3/03-Javascript/01-Activities/27-Evr_Git-Branch` in the class repository.