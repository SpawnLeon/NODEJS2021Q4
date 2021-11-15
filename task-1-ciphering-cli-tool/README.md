# Task 1. Caesar cipher CLI tool

The application encrypts and decrypts the text with Caesar/Atbash/ROT-8 cipher. It affects only to letters of the Latin
alphabet. All other characters remain unchanged.

<blockquote>
Config for ciphers Config is a string with pattern {XY(-)}n, where:<br>
X is a cipher mark;<br>
C is for Caesar cipher (with shift 1);<br>
A is for Atbash cipher;<br>
R is for ROT-8 cipher;<br>
Y is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
1 is for encoding
0 is for decoding
</blockquote>


### Install

- Clone project:

```bash
$ git clone git@github.com:SpawnLeon/NODEJS2021Q4.git
```

- If there is no code in `main` branch you must change branch to `task-1-ciphering-cli-tool`:

```sh
$ git checkout task-1-ciphering-cli-tool
```

- Install dependencies:

```sh
$ npm install
```

- Change directory

```sh
$ cd task-1-ciphering-cli-tool
```

- Install package as program

```sh
$ npm link
```

- Run program

```sh
$ caesar-cipher [options]
```

- If you do not want to install as program

```sh
$ node bin/caesar-cipher [options]
```
