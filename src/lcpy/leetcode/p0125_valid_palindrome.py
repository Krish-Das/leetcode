import re


class Solution:
    REGEX = re.compile(r"[^a-zA-Z0-9]")

    def isPalindrome(self, s: str) -> bool:
        str = self.REGEX.sub("", s.lower())
        right, left = 0, len(str) - 1
        while right < left:
            if str[right] != str[left]:
                return False

            right += 1
            left -= 1

        return True
