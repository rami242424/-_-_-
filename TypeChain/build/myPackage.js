// @ ts-check ->TS 파일에게 JVS파일을 확인하라고 알림
// JSDoc : 코멘트로 이루어진 문법
// @ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
    return true;
}
/**
 * Exit the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
    return code + 1;
}
