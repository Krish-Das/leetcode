class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        ans = []

        sorted_nums = sorted(nums)

        for idx, curr in enumerate(sorted_nums):
            prev = sorted_nums[idx - 1]
            if idx > 0 and curr == prev:
                continue

            left, right = idx + 1, len(sorted_nums) - 1

            while left < right:
                lNum, rNum = sorted_nums[left], sorted_nums[right]
                sum = curr + lNum + rNum

                if sum == 0:
                    ans.append([curr, lNum, rNum])
                    left += 1
                    right -= 1
                    while (
                        sorted_nums[left - 1] == sorted_nums[left]
                        and left < right
                    ):
                        left += 1
                elif sum < 0:
                    left += 1
                else:
                    right -= 1
        return ans
