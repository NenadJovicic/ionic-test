export default defineNuxtRouteMiddleware(async (to, from) => {
  const website = useWebsiteStore();
  await callOnce(website.fetch);
  console.log(website.name, website.description);
  const userLoggedIn = await getRandomBoolean();
  console.log(userLoggedIn, to.path);
  if (to.path === '/login' && userLoggedIn) {
    console.log('navigating to root');
    return navigateTo('/', { replace: true });
  } else if (to.path !== '/login' && !userLoggedIn) {
    console.log('navigating to login');
    return navigateTo('/login', { replace: true });
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
