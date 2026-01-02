// promise

function createPromise() {
  let prm = new Promise((resolve, reject) => {
    resolve();
    // reject();
  });

  return prm;
}

createPromise().then(() => console.log("Promise resolved")).catch(() => console.error("Promise Rejected"));

// async await

async function getRandomUser() {
  let raw = await fetch(`https://randomuser.me/api/`);
  let data = await raw.json();
  console.log(data);
}

getRandomUser();

function getRandomNumber() {
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10);
    if (num < 5) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}

async function getNum() {
  let val = await getRandomNumber();
  console.log(val);
}

getNum();

// Scenario 1 — Weather Dashboard with Error Handling
// let apikey = `4708e7920b65e92acd9408f81f5ec0f9`;
// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;


// Scenario 2 — Bulk Email Sending Simulation with Parallel Promises and Error Handling

// const usserEmailList = [
//   "tyson@gmail.com",
//   "kai@gmail.com",
//   "max@gmail.com",
//   "ray@gmail.com",
//   "daichi@gmail.com",
// ];

