import { test } from '../../_fixtures/fixtures';

test('Read user information', async ({ usersApi }) => {
  const userId = 1;

  const response = await usersApi.getUser(userId);

  await usersApi.assertSuccessResponseCode(response);
  await usersApi.assertBodyHasId(response);
});
