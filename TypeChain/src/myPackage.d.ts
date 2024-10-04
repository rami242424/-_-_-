// d.ts (정의파일) : 타입스크립트에게 타입(호출 시그니처)에 대해 설명하는 곳

interface Config {
    url: string;

}

declare module "myPackage" {
    function init(config: Config): boolean;
    function exit(code: number): number;
}