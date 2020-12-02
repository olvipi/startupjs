/**
 * @description This hook is triggering right after user login
 */
export default async function onAfterLoginHook (userId) {
  console.log('\n[@dmapper/auth] AFTER user login hook:', userId, '\n')
}
