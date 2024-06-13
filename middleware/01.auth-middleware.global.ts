export default defineNuxtRouteMiddleware(async (to, from) => {
  const router = useIonRouter();
  const userLoggedIn = await getRandomBoolean();
  console.log(userLoggedIn, to.path);
  if (to.path === '/login' && userLoggedIn) {
    console.log('navigating to root');
    return router.replace({ name: '/index' });
  } else if (to.path !== '/login' && !userLoggedIn) {
    console.log('navigating to login');
    return router.replace({ name: '/login' });
  }
  console.log('navigating to whatever it was');
});

async function getRandomBoolean(): Promise<boolean> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const num = Math.random();
      return res(true);
    }, 500);
  });
}
