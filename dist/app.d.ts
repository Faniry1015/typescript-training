declare function a(arg: unknown): void;
declare const b = true;
declare const c: {
    isPrivate: true;
    isPublic: false;
};
declare const d: {
    readonly isPrivate: true;
    readonly isPublic: false;
};
declare const e: readonly [1, 2, 3];
declare const f: [string, number];
type ListItem = [string, number];
declare const g: ListItem;
declare const h: ListItem;
declare function merge<T extends unknown[], U extends unknown[]>(a: T, b: U): [...T, ...U];
declare const i: [string, number, string, number];
declare enum STEPS {
    Intro = 0,
    Selection = 1,
    Panier = 2,
    Paiement = 3
}
declare enum STEPS1 {
    Intro = "Intro",
    Selection = "Selection",
    Panier = "Panier",
    Paiement = "Paiement"
}
declare const step: STEPS;
declare const step1: STEPS1;
declare const enum STEPS2 {
    Intro = "Intro",
    Selection = "Selection",
    Panier = "Panier",
    Paiement = "Paiement"
}
declare const step2: STEPS2;
