# Day 01 – Not Quite Lisp

**Difficulty:** Easy  
**Topic:** Arrays

## 📝 Problem
Santa is trying to deliver presents in a large apartment building, but he can't find the right floor - the directions he got are a little confusing. He starts on the ground floor (floor 0) and then follows the instructions one character at a time.

An opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), means he should go down one floor.

The apartment building is very tall, and the basement is very deep; he will never find the top or bottom floors.

## 💡 Approach
Read the input as a string and loop through each character.  
Increase the counter for "(" and decrease it for ")", then output the final floor.

## ✅ Solution
280