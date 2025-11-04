/*
Generates a random alphanumeric slug of specified length, which is 10 by default.
Useful for creating short URLs.
*/
export function generateSlug(length: number = 10): string {
    const validCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let slug = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validCharacters.length);
        slug += validCharacters[randomIndex];
    }
    return slug;
}