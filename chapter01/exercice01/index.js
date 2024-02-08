
export function greetWorld() {
    return `Hey, world!`;
}

export function greet(name) {
    return `Hey, ${name}!`;
}

export function capitilizedGreet(name) {
    const capitalisedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return `Hey, ${capitalisedName}!`;
}
