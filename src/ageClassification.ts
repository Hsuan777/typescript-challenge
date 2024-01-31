/**
 * 任務：實作一個函式 `classifyAge`，根據年齡進行分類。
 *
 * 範例：
 * classifyAge(10) 應該回傳 "Child"
 * classifyAge(15) 應該回傳 "Teenager"
 * classifyAge(30) 應該回傳 "Adult"
 * classifyAge(70) 應該回傳 "Senior"
 *
 * @param age - 一個需要被分類的年齡
 * @returns - 回傳年齡的分類結果
 */
export function classifyAge(age: number): string {
  if (age < 0) {
    return "Error";
  }
  if (age < 13) {
    return "Child";
  }
  if (age < 20) {
    return "Teenager";
  }
  if (age < 65) {
    return "Adult";
  }
  if (age >= 65) {
    return "Senior";
  }
  return "Error";
}
