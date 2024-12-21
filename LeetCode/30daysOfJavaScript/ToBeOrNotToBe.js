// 2704. To Be Or Not To Be

// Write a function expect that helps developers test their code. 
// It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 
// Example 1:
// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}

// Example 2:
// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}

// Example 3:
// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}


/**
 * expect関数の定義
 * @param {*} val - テスト対象の値
 * @returns {Object} - toBeまたはnotToBeメソッドを持つオブジェクト
 */
var expect = function(val) {
    return {
        /**
         * toBeメソッド
         * @param {*} expectedVal
         * @returns {boolean} - 二つの値が等しい場合、true
         * @throws {Error} - 二つの値が等しくない場合、"Not Equal" 
         */
        toBe(expectedVal) {
            if (val === expectedVal) {
                return true
            }
            throw new Error ("Not Equal");
        },
        /**
         * notToBeメソッド
         * @param {*} expectedVal 
         * @returns {boolean} - 二つの値が等しくない場合、true
         * @throws {Error} - 二つの値が等しくない場合、"Equal"
         */
        notToBe(expectedVal) {
            if (val !== expectedVal) {
                return true;
            }
            throw new Error("Equal");
        }
    };
};


// Example 1
try {
  console.log(expect(5).toBe(5)); // true
} catch (e) {
  console.error(e.message); // 実行されない
}

// Example 2
try {
  console.log(expect(5).toBe(null)); // "Not Equal" エラーがスローされる
} catch (e) {
  console.error(e.message); // "Not Equal"
}

// Example 3
try {
  console.log(expect(5).notToBe(null)); // true
} catch (e) {
  console.error(e.message); // 実行されない
}
