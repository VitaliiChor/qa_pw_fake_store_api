import { test } from '../../_fixtures/fixtures';

test('Create user with requred fields', async ({ newUserData, usersApi }) => {
  const response = await usersApi.createNewUser(newUserData);

  await usersApi.assertSuccessResponseCode(response);
  await usersApi.assertBodyHasId(response);
});
