import { test, expect } from '@playwright/test';
const baseUrl = 'https://jsonplaceholder.typicode.com'


test('Get post', async ({ request }) => {
    const posts = await request.get(`${baseUrl}/posts/1`);
    expect(posts.ok()).toBeTruthy();
    console.log(await posts.json())

    expect(await posts.json()).toContainEqual(expect.objectContaining({
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
    }));
});

test('Create post', async ({ request }) => {
    const newPost = await request.post(`${baseUrl}/posts`, {
        inputData: {
            title: 'Clean the dishes',
            body: 'Feature description',
        }
    });
    expect(newPost.ok()).toBeTruthy();
    console.log(await newPost.json())
});

test('Delete post', async ({ request }) => {
    const deletedPost = await request.delete(`${baseUrl}/posts/1`)
    expect(deletedPost.ok()).toBeTruthy();
});
