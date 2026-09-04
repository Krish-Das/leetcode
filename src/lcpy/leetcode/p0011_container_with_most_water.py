class Solution:
    def maxArea(self, height: list[int]) -> int:
        ans: int = 0

        left, right = 0, len(height) - 1
        while left < right:
            lHeight, rHeight = height[left], height[right]

            rectBase, rectHeight = (right - left), min(lHeight, rHeight)
            area = rectHeight * rectBase
            ans = max(ans, area)

            if lHeight < rHeight:
                left += 1
            else:
                right -= 1

        return ans
