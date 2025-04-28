import { mergeTests } from '@playwright/test';
import { test as genericTest } from './fixturesGeneric';
import { test as usersApiTest } from './fixturesUsersApi';

export const test = mergeTests(genericTest, usersApiTest);

export { expect } from '@playwright/test';
