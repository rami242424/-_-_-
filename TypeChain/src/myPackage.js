// @ts-check // TS파일에게 JVS파일을 확인하라고 알리는 것

/**
 * Initializes the project // 어떤함수인지 설명
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */

export function init(config){
    return true;
}

/**
 * Exits the program
 * @param {number} code 
 * @returns {number}
 */
export function exit(code){
    return code + 1;
}