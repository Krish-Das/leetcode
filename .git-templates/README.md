# Commit Message Templates

## Option 1: Set as project default

```sh
git config commit.template .git-templates/gitmessage-leetcode.txt
git commit
```

## Option 2: Use once, no config change

```sh
git commit -t .git-templates/gitmessage-type-challenges.txt
```

## Option 3: GitButler CLI (`but`)

```sh
but commit -m "$(cat .git-templates/gitmessage-type-challenges.txt)"
```
