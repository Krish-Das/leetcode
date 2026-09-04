from lcpy.leetcode.p0011_container_with_most_water import Solution


def test_container_with_most_water() -> None:
    sol = Solution()
    assert sol.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) == 49
    assert sol.maxArea([1, 1]) == 1
