from two_pointers import Solution


def test_valid_palindrome() -> None:
    sol = Solution()
    assert sol.isPalindrome("A man, a plan, a canal: Panama") is True


def test_not_palindrome() -> None:
    sol = Solution()
    assert sol.isPalindrome("race a car") is False


def test_empty_string() -> None:
    sol = Solution()
    assert sol.isPalindrome(" ") is True
