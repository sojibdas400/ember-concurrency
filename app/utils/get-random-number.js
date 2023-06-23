export default async function getRandomNumber() {
  return new Promise((resolve) => {
    const randNum = Math.floor(Math.random() * 100);
    setTimeout(() => {
      resolve(randNum);
    }, 1200);
  });
}
